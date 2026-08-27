function outter(){

let username = "manish";
function inner(){
console. log(username);
}
return inner
}
const inner = outter()
let username = "dhruv"

inner()
