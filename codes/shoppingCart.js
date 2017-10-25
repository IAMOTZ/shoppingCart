class ShoppingCart {
    // A shopping cart class;
    constructor(){
        // Initialize properties, _total to track price, 
        // _items to track items and _itemNumber to track number of items.
        this._total = 0;
        this._items = {};
        this._itemNumber = 0;
    }

    addItem(name, quantity, price, discount) {
        // This method adds items to the cart and take care of if the item has a discount.
        let item = new Item(name, price, discount); 
        this._total += quantity * item.price;
        this._items[item.name] = quantity;
        this._itemNumber ++;
    }

    removeItem(name, quantity, price, discount) {
        // This method remmoves items from the cart and takes care of if the item has a discount
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
        // This method handles the user payment.
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
        // This method displays all the user activity in the console.
        console.log(`Items \t\t Amount`)
        for(let item in this._items) {
            console.log(`${item} \t\t ${this._items[item]}`)
        }
        console.log(`You have a total of ${this._itemNumber} items.`)
    }

    get total() {
        // Outputs the value of total
        return this._total;
    }

    get itemNumber() {
        // Outputs the value of total
        return this._itemNumber;
    }
 }

class Item {
    // This class is used to instantiate an item.
    constructor(name, price, discount) {
        // Initialize properties, _name for the item name, 
        // _price for the item price, _discount for the item discount 
        this._name = name;
        this._price = price;
        this._discount = discount; 
    }
    
    get name() {
        // Outputs the name of the item.
        return this._name;
    }

    get price() {
        // Outputs the price of the item and take care of if the item has a discount.
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
