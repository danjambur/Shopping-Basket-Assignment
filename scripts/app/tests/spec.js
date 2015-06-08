// spec.js
describe('Shopping Basket Test Case', function() {
    it('Should add product to basket', function() {
        browser.get('http://danny-macbook:8888/Shopping Basket Assignment');
        element(by.css('[ng-click="addProduct(product)"]')).click();
        element(by.css('[href="#basket"]')).click();
        expect(element.all(by.repeater('product in basket')).count()).toBeGreaterThan(0);

    });
});