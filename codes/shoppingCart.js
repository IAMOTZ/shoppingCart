// This file contains all the shoppingCart software's code.class ShoppingCart 

class ShoppingCart {
    constructor(){
        this.total = 0;
        this.items = {};
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