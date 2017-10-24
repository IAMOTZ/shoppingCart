let shop = require('./shoppingCart');

let ShoppingCart = shop.ShoppingCart;
let Item = shop.Item;

class PromoShoppingCart extends ShoppingCart {
    constructor() {
        super();
        this._promoValue = 20;
    }

    // Allow adding 20 item without billing the user.
    addItem(name, quantity, price, discount) {
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
        return this._promoValue;
    } 

}