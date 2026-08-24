// let product1 = [56835, 4.5, 75, 10,"iphone"]

// console.log(product1[0]);
// console.log(typeof product1);
// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 25 pro max",
//     printProductName : function(){
//         console.log(this.productName);
//     },
//     printDiscount(){
//         console.log(this.discount);
//     }
// }

// let res = product2.printProductName()
// console.log(res);
// product2.printDiscount()

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));


// for( value of product1){
//     console.log(value);
// }

// for( let  i = 0 ; i < product1.length; i++){
//     console.log(product1[i]);
// }

// product1.forEach(function(value , index){
//     console.log(value , index);
// })


// let Math2 = {
//     abs(){

//     },
//     ceil(){

//     },
//     floor(){

//     }
// }

// product2.first-name     // error
// product2["first-name"]

// Math2.abs()




// function b(fun){
//     console.log("b");
//     console.log(fun);
//     fun()
// }

// let a = function(){
//     console.log("a");
// }

// b(a)

// for ( value in product2){
//     console.log(product2[value]);
// }


// destructuring 

// let product1 = [56835, 4.5, 75, 10,"iphone"]

// const [name , price ,c ,d] = ["iphone",56835, 4.5, 75, 10]
// console.log(price);
let product2 = {
    price: 57633,
    avgRating: 4.5,
    totalRevies: 75,
    discount: 50,
    productName: "iphone 25",
    variants : ["pro" , "base" ,"pro max"],
    manufacturerDetail : {
        city : "Dhampur",
        state : "Up",
        country : "India",
        price : 30000
    },
    printProductName: function () {
        console.log(this.productName);
    },
    printDiscount() {
        console.log(this.discount);
    }
}


// let { price, printDiscount, avgRating } = product2

// console.log(price , printDiscount() , avgRating);


// for ([key, value] of Object.entries(product2)) {
//     console.log(key, value);
// }






let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]

// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));

let a = [1, 2]
let b = [3, 4]

let c = [...a, ...b] // array merging by spread operator
// console.log(...c);
// Math.max()



let product1 = [56835, 4.5, 75, 10, "iphone"]

const [n, p, ...hello] = ["iphone", 56835, 4.5, 75, 10]


// console.log(hello);


function add(...numbers) {
    let total = 0;
    for (value of numbers) {
        total += value
    }
    return total;
}

// console.log(add(4, 5, 2546, 254, 2));


let { manufacturerDetail , ...userKeLiyeDetail } = product2; // rest

console.log(userKeLiyeDetail);




// // function to use this ---------> ()
// // array to use this ---------> []
// // Object to use this ---------> {}

// console.log(product1);   // array 
// console.log(product2);
// console.log(product2['name']);
let student = {
    name: "varad",
    rollNo: 34,
    subjects: ["math", "english", "hindi"],
    totalMarks: 600
}

// how to rename key
const { subjects: vishay, totalMarks = 500, ...variable } = student
// subjects -> vishay
// let vishay = subjects
// console.log(vishay);
// console.log(totalMarks);


// object merging using spread operator
let obj1 = {
    name: "yash",
    phone: 7825763245
}

let obj2 = {
    address: "india",
    adharCard: 5223452345543,
    name: "nishant",
}


let obj3 = { ...obj1, ...obj2 }

// console.log(obj3);


// array and object update

let arr1 = [1, 2, 3, 4]

arr1[1] = "updated"

// console.log(arr);

const obj = {
    name: "kasturi",
    rollNo: 23,
}

obj["name"] = "vanshika"
obj.name = "sumit"


delete obj.rollNo  // property deleted - > this is for object

// console.log(obj);

// console.log(obj.address?.street);

let arr1 = [10, 2, 4, 5, 3]

// arr1.splice(1, 3) // delete
// arr1.splice(3, 0 , ["add"])  // add
// arr1.splice(3, 2 , ["replace"])  //replace
// console.log(arr1);


// let trimArr = arr1.slice(1 , 3)

// console.log(trimArr);


// console.log(arr1.indexOf(43624));


let res = arr1.find((value) => {

    if (value === 3) {
        return value
    } 
})

console.log(res);

let resIndex = arr1.findIndex((value) => {
    return value === 3;
})
// console.log(resIndex);

//flat

let arr3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]]

// console.log(arr3.flat(Infinity));


// mutability

let arr4 = [4, 5, 6, 62, 213, 13]

let arrCopy = arr4;
let arrCopy2 = [...arr4]; // spread operator

arrCopy2.pop()

// console.log("arr4",arr4);
// console.log("arrCopy",arrCopy2);