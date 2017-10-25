class ShoppingCart {
    constructor(){
        this._total = 0;
        this._items = {};
        this._itemNumber = 0;
    }

    addItem(name, quantity, price, discount) {
        let item = new Item(name, price, discount); 
        this._total += quantity * item.price;
        this._items[item.name] = quantity;
        this._itemNumber ++;
    }

    removeItem(name, quantity, price, discount) {
        let item = new Item(name, price, discount);
        if(this._items[item.name]) {
            this._total -= item.price * quantity;
            this._items[item.name] -= quantity;
            this._itemNumber --;
        } else {
            return 'This item does not exist, try Adding it';
        }
    }

    checkout(payment) {
        if(payment < this._total) {
           return `You need extra ${this._total - payment} to checkout`;
        } else {
            this._items = {};
            this._total = 0;
            this._itemNumber = 0;
            return 'You have successfully checked out';
        }
    }

    viewItems() {
        console.log(`Items \t\t Amount`)
        for(let item in this._items) {
            console.log(`${item} \t\t ${this._items[item]}`)
        }
        console.log(`You have a total of ${this._itemNumber} items.`)
    }

    get total() {
        return this._total;
    }

    get itemNumber() {
        return this._itemNumber;
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

let MyCart = new ShoppingCart();
MyCart.addItem('Keyboard', 2, 400, 20);
MyCart.addItem('mouse', 2, 300, 10);
MyCart.addItem('Joystick', 4, 500);

MyCart.viewItems();

module.exports.ShoppingCart = ShoppingCart;
module.exports.Item = Item;
