app.factory('SaveService', function($http){


    return $http.get('basket.txt').error(function(status){
        console.log(status)
    });

});