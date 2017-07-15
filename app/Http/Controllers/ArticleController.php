<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Article::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        
        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }

            $article = Article::create($data);

            return response()->json([ 'data' => $article, 
                                      'status' => 201]);
        }
        catch(Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        return $article;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('user_id', $data)) {
                $article->user_id = $data['user_id'];
            }
            if (array_key_exists('title', $data)) {
                $article->title = $data['title'];
            }
            if (array_key_exists('tag', $data)) {
                $article->tag = $data['tag'];
            }
            if (array_key_exists('published_date', $data)) {
                $article->published_date = $data['published_date'];
            }
            if (array_key_exists('content', $data)) {
                $article->content = $data['content'];
            }

            $article->save();

            return response()->json([ 'data' => $article, 
                                      'status' => 200]);
        }
        catch(Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $article->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, Article $article, $param = 'info', $text)
    {
        return $article
            ->where($param,
                Operator::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
