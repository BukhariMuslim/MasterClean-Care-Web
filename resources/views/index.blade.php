<!doctype html>
<<<<<<< HEAD
<html lang="{{ app()->getLocale() }}">
=======
<html lang="{{ config('app.locale') }}">
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="env" content="{{ App::environment() }}">
<<<<<<< HEAD
        <!-- <meta name="token" content="{{ Session::token() }}"> -->
=======
        <meta name="token" content="{{ Session::token() }}">
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
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
