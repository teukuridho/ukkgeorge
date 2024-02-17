README

Syarat-syarat
1. PHP 8.3.2
2. Laravel 10.43.0
3. Composer 2.6.6
4. Nodejs 18.16.0
5. Webserver
6. MySQL Server

Cara menjalankan
1. Jalankan di CLI `cp .env.example .env`
2. Buat database di MySQL Server dengan nama `digitalibrary`
3. Buka file `.env`, 
    - pastikan var "APP_URL" dan "VITE_BASE" benar
    - pastikan pengaturan database benar
4. Jalankan di CLI `composer install`
5. Jalankan di CLI `npm install`
6. Jalankan di CLI `node changeVendorInertia.js`
7. Jalankan di CLI `php artisan migrate`
8. Jalankan di CLI `npm run build`
9. Buka situs