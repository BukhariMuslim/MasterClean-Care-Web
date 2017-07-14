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
use App\Request;
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

        Route::model('id', AdditionalInfo::class);
        Route::model('id', Article::class);
        Route::model('id', Comment::class);
        Route::model('id', EmergencyCall::class);
        Route::model('id', Message::class);
        Route::model('id', Job::class);
        Route::model('id', Language::class);
        Route::model('id', Order::class);
        Route::model('id', Place::class);
        Route::model('id', Request::class);
        Route::model('id', User::class);
        Route::model('id', Wallet::class);
        Route::model('id', WorkTime::class);
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
