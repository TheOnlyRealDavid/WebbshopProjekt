function addToCart(productName) {

    let cart = document.getElementById("cartList");

    let newItem = document.createElement("li");

    newItem.textContent = productName;

    cart.appendChild(newItem);
}