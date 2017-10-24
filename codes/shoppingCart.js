// This file contains all the shoppingCart software's code.class ShoppingCart 

class ShoppingCart {
    constructor(){
        this._total = 0;
        this._items = {};
    }

    addItem(name, quantity, price, discount) {
        let item = new Item(name, price, discount); 
        this._total += quantity * item.price;
        this._items[item.name] = quantity;
    }

    get total() {
        return this._total;
    }
 }

class Item {
    constructor(name, price, discount) {
        this._name = name;
        this._price = price;
        this._discount = discount; 
    }
    
    get name() {
        return this._name;
    }

    get price() {
        if(this._discount === undefined) {
            return this._price;
        } else {
            let discountPrice = ((this._discount/100) * this._price);
            let newPrice = this._price - discountPrice;
            return newPrice;
        }
    }
}

let shoppingCart = new ShoppingCart();
shoppingCart.addItem('bobo', 3, 60, 20);
console.log(shoppingCart.total);