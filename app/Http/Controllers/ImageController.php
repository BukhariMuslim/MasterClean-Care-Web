<?php

namespace App\Http\Controllers;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response as IlluminateResponse;
use Image;
use Storage;
use App\Models\WalletTransaction;
use Carbon\Carbon;

class ImageController extends Controller
{
    public function store(Request $request)
    {
        $filename = str_random(20);
        $path = $request->image->storeAs('users', "{$filename}.jpg", 'public');
        
        $data = [
            'status'    => 201,
            'image'     => "users/{$filename}.jpg",
            'links'     => [
                'small'  => url('image/small', "users/{$filename}.jpg"),
                'medium' => url('image/medium', "users/{$filename}.jpg"),
                'large'  => url('image/large', "users/{$filename}.jpg"),
            ],
            'message'   => null,
        ];
        // Send to Queue Delete
        return response()->json($data, 201);
    }

    public function storeTrc(Request $request)
    {
        $filename = str_random(20);
        
        try {
            $path = $request->image->storeAs('users', "{$filename}.jpg", 'public');
            $data = [
                'user_id'   => $request->user_id,
                'amount'    => $request->amt,
                'trc_type'  => 0,
                'trc_time'  => Carbon::create(),
                'trc_img'   => "{$filename}.jpg",
                'status'    => 0,
            ];

            $walletTransaction = WalletTransaction::create($data);

            // Send to Queue Delete
            return response()->json([ 'data' => $walletTransaction, 
                                    'status' => 201]);
        }
        catch(Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    public function renderImage($ratio, $sourcePath, $filename, Request $request)
    {
        $drive = Storage::disk('public');
        $path = "{$sourcePath}/{$filename}";
        $exists = $drive->exists($path);
        try {
            if ($path) {
                $size = false;
                $h = false;
                switch ($ratio) {
                    case 'thumb':
                        $size = 150;
                        $h = 112;
                        break;
                    case 'small':
                        $size = 400;
                        $h = 300;
                        break;
                    case 'medium':
                        $size = 600;
                        $h = 450;
                        break;
                    case 'large':
                        $size = 800;
                        $h = 600;
                        break;
                    default:
                        // original size
                        break;
                }
                $temp = $drive->get($path);
                $img = Image::cache(function ($image) use ($path, $size, $temp, $h) {
                    $img = $image->make($temp);
                    if ($size) {
                        $img = $img->resize($size, $h, function ($constraint) {
                            $constraint->aspectRatio();
                        });
                    }
                    return $img;
                });
                return $this->buildResponse($img);
            }
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);            
            // Log::debug($e->getMessage());
            // abort(404);
        }
    }
    protected function buildResponse($content)
    {
        // define mime type
        $mime = finfo_buffer(finfo_open(FILEINFO_MIME_TYPE), $content);
        $etag = md5($content);
        $not_modified = isset($_SERVER['HTTP_IF_NONE_MATCH']) && $_SERVER['HTTP_IF_NONE_MATCH'] == $etag;
        $content = $not_modified ? null : $content;
        $status_code = $not_modified ? 304 : 200;
        return new IlluminateResponse($content, $status_code, [
            'Content-Type'  => $mime,
            'Cache-Control' => 'max-age='.(config('imagecache.lifetime') * 60).', public',
            'Etag'          => md5($content),
            'Expires'       => gmdate('D, d M Y H:i:s \G\M\T', time() + 86400 * 365),
        ]);
    }
}