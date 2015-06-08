app.controller("BasketCtrl", function ($scope, basketService, $routeParams, $http, SaveService) {

    console.log($routeParams);

    $scope.basket = basketService.contents;

    $scope.basket_total = function() {

        return basketService.basket_total();
    };

    $scope.basket_price = function(){

        return basketService.basket_price();
    };

    $scope.remove_from_basket = function (product) {

        basketService.remove_from_basket(product);
        alert('Product removed from basket.')

    };

    $scope.clear_basket = function(product){
        basketService.clear_basket(product);
    }

    $scope.saveBasket = function(){

        basketService.saveBasket();
        console.log('Save Basket')
    }


});