class Product{
    name;
    price;
    description;

    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;

        // return this;
        // return {x:10};
    }

    display(){

    }
}

const p = new Product("Bag", 1000, "Good Quality");

console.log(p);