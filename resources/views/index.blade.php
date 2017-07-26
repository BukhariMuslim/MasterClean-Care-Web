<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="env" content="{{ App::environment() }}">
        <meta name="token" content="{{ Session::token() }}">
        <meta name="_csrf" content="{{ csrf_token() }}">
        
        <title>Master Clean & Care</title>

        <!-- Fonts -->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="/css/materialize.css" rel="stylesheet">
        <link href="/css/default.css" rel="stylesheet">
        

    </head>
    <body>
        <div id="root">

        </div>

        <script src="/js/index.js"></script>
    </body>
</html>
