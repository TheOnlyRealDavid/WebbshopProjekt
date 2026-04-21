function addToCart(productName) {

    let cart = document.getElementById("KundvagnLista");

    let newItem = document.createElement("li");

    newItem.textContent = productName;

    cart.appendChild(newItem);
}