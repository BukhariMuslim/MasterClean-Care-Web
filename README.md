# Master Clean & Care

## API Installation

1. Download Composer `curl -Ss https://getcomposer.org/installer | php`.
2. Run `./composer.phar install`.

## Database Instalation

1. Configure `/config/database.php` settings.
2. Run `php artisan migrate`.
3. Run `php artisan passport:install`.
4. Run `php artisan db:seed`. (optional)

## Web Instalation

1. Run `npm install` to install package.
2. Run `npm run build` or `npm run watch-poll` (development) to build assets before run.
3. Run `php artisan serve` to run Web.

## Mobile Resource

Visit [Master Clean & Care Mobile](https://github.com/JClarens/MasterClean-Care).
