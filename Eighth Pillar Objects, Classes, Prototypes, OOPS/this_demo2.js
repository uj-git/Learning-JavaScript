let Products = {
    arr: [
        {
            name : "Iphone 15 Pro",
            price : 150000, 
            description: "Too Costly",
            rating: 4.8,
            getCategory: () => {console.log(this.category);}
        },
        {
            name : "MacBook M1 Pro",
            price : 150000,
            description: "Too Costly",
            rating: 4.8,
            getCategory: function() {console.log(this.category);}
        }
    ],

    category: "Electronics",

    getProducts: function() {
        return this.arr;
    }
}

Products.getProducts()[0].getCategory();