// let products = [

//     {
//         name: "Iphone 20",
//         price: 12342

//     },
//     {
//         name: "Samsung 15",
//         price: 62324
//     },
//     {
//         name: "MI 23",
//         price: 35354
//     },
//     {
//         name: "Poco 10",
//         price: 43534
//     },
//     {
//         name: "Lava 12",
//         price: 53422
//     }
// ]


// let div = document.createElement("div")

// div.textContent = "Hello"

// let body = document.querySelector("body")

// body.appendChild(div)

let products = [
    {
        name: "Iphone 20",
        price: 12342,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Samsung 15",
        price: 62324,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "MI 23",
        price: 35354,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Poco 10",
        price: 43534,
        imgUrl : "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "Lava 12",
        price: 53422,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")

    // const img = document.createElement("img")

    // img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")

    // upperDiv.append(img)

    // card.append(upperDiv)

    // productList.append(card)


    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`

    productList.append(card)

})


let h2 = document.querySelector("#h23")

// body.removeChild(h2) // you have to perform on parent


h2.remove() // directly on the element you want to remove

let clone = productList.cloneNode(true);

// body.append(clone)


const items = productList.children


// productList.insertBefore(h2 , items[2]) // for precise positioning

// items[2].before(h2)
items[2].after(h2)