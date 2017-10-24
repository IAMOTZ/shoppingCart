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
        this._promoValue ++;
        if(this._promoValue <= 20) {
            this._items[item.name] = quantity;
        } else {
            this._total += quantity * item.price;
            this._items[item.name] = quantity;
        }
    }

    get promoValue() {
        return this._promoValue;
    } 

}