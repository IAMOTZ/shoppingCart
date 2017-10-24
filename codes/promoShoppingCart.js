// Import the classes from shoppingCart
let shop = require('./shoppingCart');

// Retrieve the two classes created in the shoppingCart file.
let ShoppingCart = shop.ShoppingCart;
let Item = shop.Item;

class PromoShoppingCart extends ShoppingCart {
    // This class is built on the shoppingCart class.
    // It is gives the user a promo usage by allowing him buy 20 items without billing.
    constructor() {
        // initialize property _promoValue to track how long the promo last.
        super();
        this._promoValue = 20;
    }

    
    addItem(name, quantity, price, discount) {
        // Allow adding 20 item without billing the user.
        let item = new Item(name, price, discount); 
        this._promoValue --;
        if(this._promoValue >= 0) {
            this._items[item.name] = quantity;
        } else {
            this._total += quantity * item.price;
            this._items[item.name] = quantity;
        }
    }

    removeItem(name, quantity, price, discount) {
        // Just like the method it overides, but takes care of if the user has a promoValue.
        let item = new Item(name, price, discount);
        this._promoValue ++;
        if(this._items[item.name]) {
            this._total -= item.price * quantity;
            this._items[item.name] -= quantity;
        } else {
            return 'This item does not exist, try Adding it';
        }
    }

    get promoValue() {
        // Output the value of the promovalue
        return this._promoValue;
    } 

}