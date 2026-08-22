// let product1name = "t-shirt1";
// // let product1price = 5234;

// let product2name = "lower2";
// // let product2price = 532;

// let product3name = "cap3";
// // let product3price = 54;

// let product = ["t-shirt","lower","cap",product1name,product2name,product3name]
// console.log(product);

// // indexing------->

// console.log(product[2]);
// console.log(product["cap"]);

// // type of---------->
// console.log(typeof(product));

// // length of  array---------->
// console.log(product.length);
// console.log(product[product.length-1]);

// console.log(product.at(-7));

// for(let i = 0; i<product.length;i++)
//     console.log(product[i]);

// --------------------------------> Nested Array --------------------->

let products = [["t-shirt" ,566],["lower",543],["cap",673]]
console.log(products);
console.log(products[0][0]);

for(let i = 0; i<products.length;i++)
    console.log(products[i][0]);



// ---------------> thats is wrong way of code -------------->
// ------------------->         But               ------------->
// --------------------> next lecture cantinue to Object And ----->
// ---------------------->         And       ----------------------->
// ---------------------> understood why that is wrong way  -------------->

// function of array 

products.push("hello")  // join to array last index
console.log(products);
products.pop("hello")
console.log(products);
products.unshift("hello")  // join to array start index
console.log(products);
products.shift("hello")  // join to array start deleting index
console.log(products);
