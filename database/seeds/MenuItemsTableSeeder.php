<?php

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\Menu;
use TCG\Voyager\Models\MenuItem;

class MenuItemsTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        if (file_exists(base_path('routes/web.php'))) {
            require base_path('routes/web.php');

            $menu = Menu::where('name', 'admin')->firstOrFail();

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Dashboard',
                'url'        => route('voyager.dashboard', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-boat',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 1,
                ])->save();
            }

            $managementMenuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Management',
                'url'        => '',
            ]);
            if (!$managementMenuItem->exists) {
                $managementMenuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-helm',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 2,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Users',
                'url'        => '/admin/users',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-person',
                    'color'      => null,
                    'parent_id'  => $managementMenuItem->id,
                    'order'      => 1,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Roles',
                'url'        => route('voyager.roles.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-lock',
                    'color'      => null,
                    'parent_id'  => $managementMenuItem->id,
                    'order'      => 2,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Media',
                'url'        => route('voyager.media.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-images',
                    'color'      => null,
                    'parent_id'  => $managementMenuItem->id,
                    'order'      => 3,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Review Orders',
                'url'        => '/admin/review-orders',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-check',
                    'color'      => null,
                    'parent_id'  => $managementMenuItem->id,
                    'order'      => 4,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Wallet Transactions',
                'url'        => '/admin/wallet-transactions',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-dollar',
                    'color'      => null,
                    'parent_id'  => $managementMenuItem->id,
                    'order'      => 5,
                ])->save();
            }

            $basicMenuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Basic',
                'url'        => '',
            ]);
            if (!$basicMenuItem->exists) {
                $basicMenuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-receipt',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Additional Infos',
                'url'        => '/admin/additional-infos',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-list-add',
                    'color'      => null,
                    'parent_id'  => $basicMenuItem->id,
                    'order'      => 1,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Jobs',
                'url'        => '/admin/jobs',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-company',
                    'color'      => null,
                    'parent_id'  => $basicMenuItem->id,
                    'order'      => 2,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Languages',
                'url'        => '/admin/languages',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-world',
                    'color'      => null,
                    'parent_id'  => $basicMenuItem->id,
                    'order'      => 3,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Places',
                'url'        => '/admin/places',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-location',
                    'color'      => null,
                    'parent_id'  => $basicMenuItem->id,
                    'order'      => 4,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Wallets',
                'url'        => '/admin/wallets',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-wallet',
                    'color'      => null,
                    'parent_id'  => $basicMenuItem->id,
                    'order'      => 5,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Work Times',
                'url'        => '/admin/work-times',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-alarm-clock',
                    'color'      => null,
                    'parent_id'  => $basicMenuItem->id,
                    'order'      => 6,
                ])->save();
            }

            $toolsMenuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Tools',
                'url'        => '',
            ]);
            if (!$toolsMenuItem->exists) {
                $toolsMenuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-tools',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 4,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Menu Builder',
                'url'        => route('voyager.menus.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-list',
                    'color'      => null,
                    'parent_id'  => $toolsMenuItem->id,
                    'order'      => 10,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Database',
                'url'        => route('voyager.database.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-data',
                    'color'      => null,
                    'parent_id'  => $toolsMenuItem->id,
                    'order'      => 11,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Settings',
                'url'        => route('voyager.settings.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-settings',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 5,
                ])->save();
            }
        }
    }
}
