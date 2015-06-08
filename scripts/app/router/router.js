//This is the page router, because angular is an app framework, it needs to simulate changing links.
//If it changed links each time, the controller would lose the data input.
app.config(function ($routeProvider) {
    $routeProvider

        .when('/',{
            templateUrl : 'home.html',
            controller  : 'ShopCtrl'
        })
        .when('/basket',{
            templateUrl : 'basket.html',
            controller  : 'BasketCtrl'
        });




});


