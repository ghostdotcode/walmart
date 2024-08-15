let cart = [
    {
        picture: "path_to_image",
        name: "Item 1",
        price: 5000,
        quantity: 1
    },
    {
        picture: "path_to_image",
        name: "Item 2",
        price: 7000,
        quantity: 1
    }
];

function updateCart() {
    let cartTable = document.querySelector("#cart-items tbody");
    cartTable.innerHTML = "";
    let totalAmount = 0;

    cart.forEach((item, index) => {
        let row = `<tr>
            <td><img src="${item.picture}" alt="${item.name}" width="50"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
            <td>${item.price * item.quantity}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        </tr>`;
        cartTable.innerHTML += row;
        totalAmount += item.price * item.quantity;
    });

    document.getElementById("total-amount").innerText = totalAmount;
}

function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function addItemToCart() {
    // Get values from the input fields
    let name = document.getElementById("product-name").value;
    let description = document.getElementById("product-description").value;
    let price = parseFloat(document.getElementById("product-price").value);
    let quantity = parseInt(document.getElementById("product-quantity").value);
    let image = document.getElementById("product-image").value || "https://via.placeholder.com/50";

    // Validate inputs
    if (!name || !description || isNaN(price) || isNaN(quantity) || quantity <= 0) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Create a new product object
    let newItem = {
        picture: image,
        name: name,
        description: description,
        price: price,
        quantity: quantity
    };

    // Add the new item to the cart
    cart.push(newItem);

    // Update the cart display
    updateCart();

    // Clear the input fields
    document.getElementById("product-name").value = "";
    document.getElementById("product-description").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-image").value = "";
}

document.getElementById("pay-now").addEventListener("click", () => {
    alert("Proceeding to payment");
});

// Initial cart update
updateCart();
