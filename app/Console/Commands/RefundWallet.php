<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Log;
use Carbon\Carbon;
use DB;
use Exception;

class RefundWallet extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'wallet:refund';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refund Expire Order Wallet';
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Log::info('Start Log');
        try {
            DB::beginTransaction();
            $order = \App\Models\Order::where('status', 0)
                        ->where('start_date', '<=', Carbon::now());

            if ($order->first()) {
                $walletTransaction = \App\Models\WalletTransaction::whereIn('id', $order->pluck('wallet_transaction_id')->toArray(), 'or');
                
                $order->update(['status' => 2]);
                
                if ($walletTransaction->first()) {
                    Log::info('Wallet Trc Refunding');
                    $walletTransaction->update(['status' => 2]);
                    Log::info('Wallet Trc Refunded');
                }
            }
            DB::commit();
        }
        catch(Exception $e) {
            DB::rollBack();
            Log::info($e);
            Log::info('Roll Back');
        }
    }
}