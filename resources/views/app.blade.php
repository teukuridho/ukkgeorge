@php($page['url'] = App::make('request')->getRequestUri())
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>