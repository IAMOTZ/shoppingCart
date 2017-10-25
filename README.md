# shoppingCart
An OOP program to implement a shopping cart software

There are two major classes in this program, one is the ShoppingCart and the other is PromoShoppingCart.  
Each of them are in different files inside the codes folder.

The ShoppingCart class does everything that a typical ShoppingCart software is needed to do.
* You can add item with  `ShoppingCart.addItem(name, quantity, price, discount)` 
* You can remove items with `ShoppingCart.removeItem(name, quantity, price, discount)`
* You can view the items added with `ShoppingCart.viewItems()`
* You can get the total price of items added with `ShoppingCart.total`
* You can get the number of items you added with `ShoppingCart.itemNumber`
* You can make payments with `ShoppingCart.checkout(payment)`

The PromoShoppingCart is subclass of the ShoppingCart class.(Inheritance)  
It is very similar to the ShoppingCart class but it allows the users to buy 20 items without billing the user.
* Use thesame methods that ShoppingCart class uses and everything still works fine(polymorphism);
* Alter the value of `promoValue` property in the constructor to change the no of items the user can buy for free.

# Background Context
* The discount is to be in percentage
* The discount parameter is optional
* There is an Item helper class to handle if an Item has a discount or not.

# To use this project
* Clone the repo.
* cd into the projects directory
* Run the command `npm start` to see the program in action
    * This would initialize a ShoppingCart class 
    * Add items ('Keyboard', 2, 400, 20)
    * Add items ('mouse', 2, 300, 10)
    * Add items ('Joystick', 4, 500)
    * Then logs the items to the console with viewItems()
* If you don't use nodejs, then just run the code in any js runtime.