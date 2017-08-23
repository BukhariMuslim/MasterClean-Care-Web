<?php

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\DataType;

class DataTypesTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        // $dataType = $this->dataType('slug', 'posts');
        // if (!$dataType->exists) {
        //     $dataType->fill([
        //         'name'                  => 'posts',
        //         'display_name_singular' => 'Post',
        //         'display_name_plural'   => 'Posts',
        //         'icon'                  => 'voyager-news',
        //         'model_name'            => 'TCG\\Voyager\\Models\\Post',
        //         'controller'            => '',
        //         'generate_permissions'  => 1,
        //         'description'           => '',
        //     ])->save();
        // }

        // $dataType = $this->dataType('slug', 'pages');
        // if (!$dataType->exists) {
        //     $dataType->fill([
        //         'name'                  => 'pages',
        //         'display_name_singular' => 'Page',
        //         'display_name_plural'   => 'Pages',
        //         'icon'                  => 'voyager-file-text',
        //         'model_name'            => 'TCG\\Voyager\\Models\\Page',
        //         'controller'            => '',
        //         'generate_permissions'  => 1,
        //         'description'           => '',
        //     ])->save();
        // }

        $dataType = $this->dataType('slug', 'users');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'users',
                'display_name_singular' => 'User',
                'display_name_plural'   => 'Users',
                'icon'                  => 'voyager-person',
                'model_name'            => 'App\Models\\User',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        // $dataType = $this->dataType('name', 'categories');
        // if (!$dataType->exists) {
        //     $dataType->fill([
        //         'slug'                  => 'categories',
        //         'display_name_singular' => 'Category',
        //         'display_name_plural'   => 'Categories',
        //         'icon'                  => 'voyager-categories',
        //         'model_name'            => 'TCG\\Voyager\\Models\\Category',
        //         'controller'            => '',
        //         'generate_permissions'  => 1,
        //         'description'           => '',
        //     ])->save();
        // }

        $dataType = $this->dataType('slug', 'menus');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'menus',
                'display_name_singular' => 'Menu',
                'display_name_plural'   => 'Menus',
                'icon'                  => 'voyager-list',
                'model_name'            => 'TCG\\Voyager\\Models\\Menu',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'roles');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'roles',
                'display_name_singular' => 'Role',
                'display_name_plural'   => 'Roles',
                'icon'                  => 'voyager-lock',
                'model_name'            => 'TCG\\Voyager\\Models\\Role',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'additional-infos');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'additional_infos',
                'display_name_singular' => 'Additional Info',
                'display_name_plural'   => 'Additional Infos',
                'icon'                  => 'voyager-list-add',
                'model_name'            => 'App\\Models\\AdditionalInfo',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'jobs');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'jobs',
                'display_name_singular' => 'Job',
                'display_name_plural'   => 'Jobs',
                'icon'                  => 'voyager-company',
                'model_name'            => 'App\\Models\\Job',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'task-lists');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'task_lists',
                'display_name_singular' => 'Task List',
                'display_name_plural'   => 'Task Lists',
                'icon'                  => 'voyager-list',
                'model_name'            => 'App\\Models\\TaskList',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'languages');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'languages',
                'display_name_singular' => 'Language',
                'display_name_plural'   => 'Languages',
                'icon'                  => 'voyager-world',
                'model_name'            => 'App\\Models\\Language',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'places');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'places',
                'display_name_singular' => 'Place',
                'display_name_plural'   => 'Places',
                'icon'                  => 'voyager-location',
                'model_name'            => 'App\\Models\\Place',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'review-orders');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'review_orders',
                'display_name_singular' => 'Review Order',
                'display_name_plural'   => 'Review Orders',
                'icon'                  => 'voyager-location',
                'model_name'            => 'App\\Models\\ReviewOrder',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'reports');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'reports',
                'display_name_singular' => 'Report',
                'display_name_plural'   => 'Reports',
                'icon'                  => 'voyager-exclamation',
                'model_name'            => 'App\\Models\\Report',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'emergency-calls');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'emergency_calls',
                'display_name_singular' => 'Emergency Call',
                'display_name_plural'   => 'Emergency Calls',
                'icon'                  => 'voyager-bell',
                'model_name'            => 'App\\Models\\EmergencyCall',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'critisms');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'critisms',
                'display_name_singular' => 'Critism',
                'display_name_plural'   => 'Critisms',
                'icon'                  => 'voyager-bulb',
                'model_name'            => 'App\\Models\\Critism',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'wallet-transactions');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'wallet_transactions',
                'display_name_singular' => 'Wallet Transaction',
                'display_name_plural'   => 'Wallet Transactions',
                'icon'                  => 'voyager-dollar',
                'model_name'            => 'App\\Models\\WalletTransaction',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }   
        
        $dataType = $this->dataType('slug', 'wallets');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'wallets',
                'display_name_singular' => 'Wallet',
                'display_name_plural'   => 'Wallets',
                'icon'                  => 'voyager-wallet',
                'model_name'            => 'App\\Models\\Wallet',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'work-times');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'work_times',
                'display_name_singular' => 'Work Time',
                'display_name_plural'   => 'Work Times',
                'icon'                  => 'voyager-alarm-clock',
                'model_name'            => 'App\\Models\\WorkTime',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'orders');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'orders',
                'display_name_singular' => 'Order',
                'display_name_plural'   => 'Orders',
                'icon'                  => 'voyager-paper-plane',
                'model_name'            => 'App\\Models\\Order',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
    }

    /**
     * [dataType description].
     *
     * @param [type] $field [description]
     * @param [type] $for   [description]
     *
     * @return [type] [description]
     */
    protected function dataType($field, $for)
    {
        return DataType::firstOrNew([$field => $for]);
    }
}
