let h1= document.querySelector("#h1");
console.log(h1);



// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector(".h1")
// let h1 = document.querySelector("#h1")



let p = document.querySelector("#desc");
// reudte to html file and add a p
//  tag with id p and some text in it
p.textContent = "<h2>Hello Dostooooooo </h2>"
console. log(p.textContent);
// it is very very risky to use innerHTML because it
//  can lead to XSS attacks if the content is not 
// sanitized properly. It is safer to use textContent
//  when you want to set plain text.
 p.innerHTML = "<h2>Hello Dostooooooo </h2>"
console.log(p.innerHTML);



p.setAttribute("style", "background-color: pink; font-size : 50px")

let btn = document.querySelector("#btn")

btn.setAttribute("disabled", "true")
btn. textContent = "Remove"

let res = p.getAttribute("style")

console. log(res);

p.removeAttribute("style")



p.classList.add("random")
p.classList. remove("random")
p.classList. toggle("random")

console. log(p.classList.contains("random"));

p.style.backgroundColor = "red" // camelCase

p.dataset.helloDostoHii = "hii"

console. log(p.dataset.helloDostoHii);