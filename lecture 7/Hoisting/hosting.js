console.log(a);
var a = 76;
// but you can use this {let and const}
//   so aftersometime you can see error 
// but var cannot see error 



addNum1()

function addNum1() {
console. log("Hello");
}

console.log(addTwoNum);
 
// this code error dega because undifined
var addTwoNum = function(){
console. log("function expression");
}


var a = 6;
let b = 7;

function addNum() {
    const a = 6 ;
console. log(a+b);
}
addNum() 


let city = "Delhi"

// function printCity(){
// console. log(city);
// }

function random(fn) {
let city = "Varanasi"
fn()
}


random(printCity)


function random(fn) {
let city = "Varanasi"
function printCity() {
console. log(city);
}

return printCity
}
console. log(random())



function outter(){

function inner(){
return 10
}
return inner
}
const result = outter()
console. log(result);