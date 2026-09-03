"use strict";

let Student = {
    name: "manish",
    printName: function () {
        console.log("manish");
    }
}


Student.printName();

// THIS KEYWORD -->

// to use this keyword in the above code snippet
//  we can modify the printName function to use
//  this.name instead of hardcoding the name. 
// Here's the updated code:


let student = {
    name: "MANISH KUMAR",
    printName: function () {
        console.log(this.name);
    }
}
student.printName();
//  THIS ARROW FUNCTION -->
// this use in arrow function will not work as 
// expected because arrow functions do not have
//  their own 'this' context. Instead, they inherit 
// 'this' from the surrounding lexical scope. In 
// the case of the product object, using an arrow
//  function for printName will result in 'this'
//  referring to the global object (or undefined in 
// strict mode), rather than the product object itself.



let name = "something"
let Product = {
    name: "Iphone",
    printName: () => {
        console.log(this.name);

    }
}
Product.printName()





let product = {
    name: "Iphone",
    printName: function () {
        const print = () => {
            console.log(this.name);
        }
        print()
    }

}
product.printName()



function fun4() {
    let name = "something"
    let product = {
        name: "Iphone",
        printName: () => {
            const print = () => {
                console.log(this.name);
            }
            print()
        }
    }
    product.printName()
}

fun4()



// code 
let nestedFunction = {
    name: "Something",
    fun: function () {
        let name = "something"
        let product = {
            name: "Iphone",
            printName: function () {
                const print = () => {
                    console.log(this.name);
                }
                print()
            }
        }
        product.printName()
    }
}
nestedFunction.fun()


let nestedFunction1 = {
    name: "Something",
    fun: function () {
        let product = {
            printName: function () {
                const print = () => {
                    console.log(this.name);
                }
                print()
            }
        }
        product.printName()
    }
}
nestedFunction1.fun()



let nestedFunction2 = {
    name: "Something",
    fun: function () {
        let product = {
            name: "Iphone",
            printName: () => {
                const print = () => {
                    console.log(this.name);
                }
                print()
            }
        }
        product.printName()
    }
}
nestedFunction2.fun()



