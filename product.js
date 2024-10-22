// Function to display selected product details
function displayProductDetails() {
    const productDetailsDiv = document.getElementById('product-details');
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        productDetailsDiv.innerHTML = `
            <img src="${product.Image}" alt="${product.name}" class="product-image-large"/>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;
    } else {
        productDetailsDiv.textContent = 'No product selected';
    }
}

// Function to go back to the product list page
function goBack() {
    window.location.href = 'index.html';
}

// Call the function to display the product details
displayProductDetails();
