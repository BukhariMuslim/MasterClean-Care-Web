<?php

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\Permission;
use TCG\Voyager\Models\Role;

class PermissionRoleTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::where('name', 'admin')->firstOrFail();

        $permissions = Permission::whereNotIn('key',
                        [
                            'add_critisms',
                            'edit_critisms',
                            'add_reports',
                            'edit_reports',
                            'add_emergency_calls',
                            'edit_emergency_calls',
                            'add_review_orders',
                            'edit_review_orders',
                            'add_wallet_transactions',
                        ]);
        
        $role->permissions()->sync(
            $permissions->pluck('id')->all()
        );
    }
}
