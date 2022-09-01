let cart = []


let storageCart = localStorage.getItem("cart");

if(storageCart){
  cart = JSON.parse(storageCart);
}

let checkoutSection = document.getElementById("checkout-section")


for (item of cart){
    console.log(item.name, item.price)

    const para = document.createElement("p");
    para.innerHTML = `${item.name}: ${item.price}`;

    checkoutSection.appendChild(para)

}

// console.log(cart)





