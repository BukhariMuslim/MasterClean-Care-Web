<?php

namespace App\Providers;

use App\AdditionalInfo;
use App\Article;
use App\Comment;
use App\EmergencyCall;
use App\Job;
use App\Language;
use App\Message;
use App\Order;
use App\Place;
use App\Requests;
use App\User;
use App\Wallet;
use App\WorkTime;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use \Iterator;
use \DirectoryIterator;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //
        parent::boot();

        Route::model('info_id', AdditionalInfo::class);
        Route::model('article_id', Article::class);
        Route::model('comment_id', Comment::class);
        Route::model('emergency_call_id', EmergencyCall::class);
        Route::model('message_id', Message::class);
        Route::model('job_id', Job::class);
        Route::model('language_id', Language::class);
        Route::model('order_id', Order::class);
        Route::model('place_id', Place::class);
        Route::model('request_id', Requests::class);
        Route::model('user_id', User::class);
        Route::model('art_id', User::class);
        Route::model('wallet_id', Wallet::class);
        Route::model('work_time_id', WorkTime::class);
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }
}
