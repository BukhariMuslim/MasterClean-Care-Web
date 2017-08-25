<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Carbon\Carbon;
use DB;
use Exception;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function(){
            try {
                DB::beginTransaction();
                $order = \App\Models\Order::where('status', 0)
                         ->where('start_date', '<', Carbon::now());

                $order->update('status', 2);

                if ($order->first()) {
                    $walletTransaction = \App\Models\WalletTransaction::whereIn('id', $order->pluck('wallet_transaction_id')->toArray());
                    $walletTransaction->udpate('status', 2);
                }
                DB::commit();
            }
            catch(Exception $e) {
                DB::rollBack();
            }
        })->hourly();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
