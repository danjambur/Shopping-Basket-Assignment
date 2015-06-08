app.factory('basketService', function ($http) {

    //This variable is created so that it wraps the contents of the products, allowing the products to be shown on the basket
    var returned = {
        contents: []
    }

    returned.addProduct = function (product) {

        //Looks for objects inside array
        var keyfound = false;

        //Logs the name, and price of the product
        console.log('Product', product.name, 'Price', product.price);

        // Find if already in basket
        angular.forEach(returned.contents, function (value, key) {


            if (value.sku === product.sku) {
                keyfound = key;
            }


            console.log('Comparing', value.sku, product.sku, keyfound);

        });

        if (keyfound !== false) {
            // if it finds the key, it increased the qty property, rather than adding the whole object
            returned.contents[keyfound].qty++;
            console.log('Found', keyfound);

        } else {
            // if its false, then it pushes the product to the array.
            returned.contents.push({
                sku: product.sku,
                name: product.name,
                price: product.price,
                qty: product.qty,
                image: product.image

            });

        }
        console.log('Basket', returned.contents);
    };


    //produces the total items, and total cost
    returned.basket_total = function() {
        //instantiates totalQty variable, default to 0.
        var totalQty =  0;

        //for each product in the array of objects, add onto totalQty
        angular.forEach(returned.contents, function (value, key) {

            // $scope.basket[key] = value;


            totalQty = value.qty + totalQty;


            console.log(totalQty);

        });



        return totalQty;
    };
    //produces the total price of the basket
    returned.basket_price = function(){
        //instantiates totalPrice variable, default to 0.
        var totalPrice = 0;

        angular.forEach(returned.contents, function (value, key){
            //for each of the products in the array, times the quantity by the price, and add to the total price
            totalPrice = (value.price * value.qty) + totalPrice;

        });

        return totalPrice;
    };

    //removes the product from the basket
    returned.remove_from_basket = function (product) {

        console.log(product.name, product.price);

        //for each of the products, find the SKU (the property shared by the objects within the array) and remove the relevant products
        angular.forEach(returned.contents, function (value, key){

            if(value.sku === product.sku){
                // match!
                returned.contents.splice(key ,1);
            }


        });


    };

    returned.clear_basket = function(){


        returned.contents.splice(0, returned.contents.length);
        alert('Basket cleared');
        console.log('Basket cleared', returned.contents);


    };

    returned.saveBasket = function(){

        var basket = returned.contents;

        console.log('Saving data:', basket);

        $http.post('save.php', {
                potato: 'Tasty',
                basket: basket,
            }).success(function(data, status, headers, config) {
            alert("Success")});


    };

    return returned;

});


