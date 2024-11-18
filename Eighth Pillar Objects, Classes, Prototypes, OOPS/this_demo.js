let ipohne = {
    name : "Iphone 15 Pro",
    price : 150000,
    description: "Too Costly",
    rating: 4.8,

    display:() => {
        console.log("First Display",this);
    }
} 

let macBook = {
    name : "MacBook M1 Pro",
    price : 150000,
    description: "Too Costly",
    rating: 4.8,

    display: function() {
        console.log("Second Display",this);
    }
} 

macBook.display();
ipohne.display();


