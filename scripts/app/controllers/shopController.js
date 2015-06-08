//This is the controller. It utilises all of the factory functions rather than having them all
//here. This is because the factory is pretty much a constructor, allowing the use of the functions.
app.controller("ShopCtrl", function ($scope, $location, basketService, $routeParams, $sce, SaveService, $http) {

    $scope.products = get_products();



    $scope.addProduct = function (product) {
        basketService.addProduct(product);

    };



    var send_basket = function(basket){

        $.ajax({
            url: "save.php",
            type: "POST",
            data: {
                basket: basket
            },
            dataType: "json"
        });


    };




    function get_products() {
        var products = [
            {
                sku: 'CAT01',
                name: 'Cat',
                price: 10.99,
                qty: 1,
                image: 'images/cat_PNG1631.png'
            },
            {
                sku: 'DOG01',
                name: 'Dog',
                price: 12.99,
                qty: 1,
                image: 'images/jack-russel-puppy.png'
            },
            {
                sku: 'GOLDFISH01',
                name: 'Goldfish',
                price: 9.99,
                qty: 1,
                image: 'images/shocked-goldfish-isolated-on-white-background-34fd6911.jpg'
            },
            {
                sku: 'CHIPMUNK01',
                name: 'Chipmunk',
                price: 15.99,
                qty: 1,
                image: 'images/chipmunkContent.png'
            }
        ];

        return products;
    }


});