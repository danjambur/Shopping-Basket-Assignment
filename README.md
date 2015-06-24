# Shopping-Basket-Assignment
A simple shopping basket system created in Angularjs to a specification from an assignment. 

# How to use and maintain this program.

This application uses AngularJS for the front-end. There is no back-end to this application. The required dependencies include:
- AngularJS
- Protractor
- A Browser
- A local web server
- Bootstrap
- jQuery

AngularJS and Protractor are included in this repository.

The file structure of this program are as follows:

Shopping Basket Assignment
```
-css
--bootstrap
--main.css
--main.less

-images
--cat_PNG1631.png
--chipminkContent.png
--jack-russel-puppy.png
--shocked-goldfish-isolated-on-white-background-34fd6911.jpg

-scripts
--app
---controllers
----basketController.js
----shopController.js
---shoppingBasket.js

---factories
----basketService.js
----saveService.js

---router
----router.js

---tests
----conf.js
----spec.js
```

The files listed above are the most relevant files in the project. The CSS is created in LESS format, and compiled into CSS. The images are the images of the example products.

Inside the 'scripts/app' folder is the main application. in the controllers folder is the controllers. These controllers create a bridge between the model and the view. They are simply the services added to the $scope object as either methods or values.

Also inside the app folder is the factories, or services.

The basketService.js file contains the basketService object. This object contains methods that are the core functionality of the shopping basket itself.

The 'addProduct' method checks if an object is inside of the array. It utilises angular's forEach function to iterate through the objects that are in the basket array, comparing the keys with values. If the key 'SKU' returns true, the quantity is increased. Otherwise, the object is added to the contents array. It then logs the basket contents.

The 'basketTotal' method sets the total to 0 as default. it then utilises angular's forEach function again to iterate through all of the objects in the basket array, and adds the quantity of the products onto eachother, and then returns the total quantity.

The 'basketPrice' method sets the price to 0 as default. It then also uses angular.forEach to iterate through the array of objects, and adds the products price onto eachother and returns the total price value

The 'removeFromBasket' method uses angular.forEach to iterate through each object inside of the array and checks if the SKU's match. If so, the product object is removed from the basket array.

The 'clearBasket' method uses javaScripts '.splice' utility and the '.length' utility to find the length of the array and remove all of the objects in the array. It then alerts the user 'Basket Cleared'.

The 'saveBasket' method uses a $http.post to find the 'save.php' file, and sets the basket property to be the contents array. It then saves the file to a txt file.

The saveService.js file contains the SaveService object. It is a simple service that returns just a $http.get request, looks for the basket.txt file to make sure it is there.

The router.js file contains the routes used in this application. These check what the URL state is, and uses the according controllers and templates.

The tests folder contains the spec.js and the conf.js files.
The conf.js file is the settings for the selenium test server. The selenium server needs to be running before the tests are carried out. The spec.js file contains the tests, written with the protractor library.




