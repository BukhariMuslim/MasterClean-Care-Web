<?php

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\Setting;

class SettingsTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        $setting = $this->findSetting('title');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Site Title',
                'value'        => '',
                'details'      => '',
                'type'         => 'text',
                'order'        => 1,
            ])->save();
        }

        $setting = $this->findSetting('description');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Site Description',
                'value'        => '',
                'details'      => '',
                'type'         => 'text',
                'order'        => 2,
            ])->save();
        }

        $setting = $this->findSetting('logo');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Site Logo',
                'value'        => 'settings/logo.png',
                'details'      => '',
                'type'         => 'image',
                'order'        => 3,
            ])->save();
        }

        $setting = $this->findSetting('admin_bg_image');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Admin Background Image',
                'value'        => 'settings/bg-img.jpg',
                'details'      => '',
                'type'         => 'image',
                'order'        => 9,
            ])->save();
        }

        $setting = $this->findSetting('admin_title');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Admin Title',
                'value'        => 'MCC-Admin',
                'details'      => '',
                'type'         => 'text',
                'order'        => 4,
            ])->save();
        }

        $setting = $this->findSetting('title');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Title',
                'value'        => 'Master Clean & Care',
                'details'      => '',
                'type'         => 'text',
                'order'        => 5,
            ])->save();
        }

        $setting = $this->findSetting('admin_description');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Admin Description',
                'value'        => 'Temukan solusi kebersihan dan perawatan rumah tangga terbaik.',
                'details'      => '',
                'type'         => 'text',
                'order'        => 6,
            ])->save();
        }

        $setting = $this->findSetting('admin_loader');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Admin Loader',
                'value'        => 'settings/logo.png',
                'details'      => '',
                'type'         => 'image',
                'order'        => 7,
            ])->save();
        }

        $setting = $this->findSetting('admin_icon_image');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Admin Icon Image',
                'value'        => 'settings/logo.png',
                'details'      => '',
                'type'         => 'image',
                'order'        => 8,
            ])->save();
        }

        $setting = $this->findSetting('google_analytics_client_id');
        if (!$setting->exists) {
            $setting->fill([
                'display_name' => 'Google Analytics Client ID',
                'value'        => '',
                'details'      => '',
                'type'         => 'text',
                'order'        => 9,
            ])->save();
        }
    }

    /**
     * [setting description].
     *
     * @param [type] $key [description]
     *
     * @return [type] [description]
     */
    protected function findSetting($key)
    {
        return Setting::firstOrNew(['key' => $key]);
    }
}
