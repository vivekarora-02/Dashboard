const eventEmitter = require("node:events");

class pizzaShop extends eventEmitter{
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(){
        this.orderNumber++;
        this.emit("order", size, toppings);
    }

    displayOrderNumber(){
        console.log(`current order number is ${this.orderNumber}`);
    }
}

module.exports = pizzaShop;