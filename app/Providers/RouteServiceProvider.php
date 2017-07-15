<?php

namespace App\Providers;

use App\Models\AdditionalInfo;
use App\Models\Article;
use App\Models\Comment;
use App\Models\EmergencyCall;
use App\Models\Job;
use App\Models\Language;
use App\Models\Message;
use App\Models\Order;
use App\Models\OrderTaskList;
use App\Models\Place;
use App\Models\Offer;
use App\Models\OfferArt;
use App\Models\OfferTaskList;
use App\Models\User;
use App\Models\Wallet;
use App\Models\WorkTime;
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
        Route::model('language_id', Language::class);
        Route::model('job_id', Job::class);
        Route::model('order_id', Order::class);
        Route::model('order_task_list_id', OrderTaskList::class);
        Route::model('place_id', Place::class);
        Route::model('offer_id', Offer::class);
        Route::model('offer_art_id', OfferArt::class);
        Route::model('offer_task_list_id', OfferTaskList::class);
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
