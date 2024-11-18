function Product(n, p, d){
    this.name = n;
    this.price = p;
    this.description = d;
}

const p = new Product("Bag", 100, "Bad");

console.log(p);