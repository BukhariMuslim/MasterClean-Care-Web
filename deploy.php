<?php

namespace Deployer;

require 'recipe/laravel.php';

set('bin/npm', function () {
    return (string) run('which npm');
});
desc('Install Yarn packages');

task('npm:install', function () {
    if (has('previous_release')) {
        if (test('[ -d {{previous_release}}/node_modules ]')) {
            run('cp -R {{previous_release}}/node_modules {{release_path}}');
        }
    }
    run('cd {{release_path}} && {{bin/npm}} install');
});

task('npm:production', function () {
    run('cd {{release_path}} && {{bin/npm}} run production',
        ['timeout' => null, 'tty' => true]);
});

// Configuration

set('repository', 'https://github.com/BukhariMuslim/MasterClean-Care-Web');
set('ssh_type', 'native');
set('writable_use_sudo', false);
set('permission_method', 'chmod_777');
set('http_user', 'root');
// set('git_tty', true); // [Optional] Allocate tty for git on first deployment
set('shared_files',
    ['.env', 'resources/assets/js/lib/pusher-conf.js']
);
set('shared_dirs', [
    'storage', 
    'public/images', 
    'public/users', 
    'public/api',
]);
set('writable_dirs', [
    'bootstrap/cache',
    'storage',
    'storage/app',
    'storage/app/public',
    'storage/framework',
    'storage/framework/cache',
    'storage/framework/sessions',
    'storage/framework/views',
    'storage/logs',
]);
// add('shared_dirs', []);
// add('writable_dirs', []);
inventory('hosts.yml');

task('upload:env', function () {
    run('npm production');
})->desc('Environment setup');

desc('Deploy your project');
task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'npm:install',
    'npm:production',
    'deploy:vendors',
    'deploy:writable',
    'artisan:view:clear',
    // 'artisan:route:cache',
    'artisan:optimize',
    'deploy:public_disk',
    'deploy:symlink',
    'artisan:cache:clear',
    'deploy:unlock',
    'cleanup',
]);

after('deploy:failed', 'deploy:unlock');