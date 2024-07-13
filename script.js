document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');

    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                `;
                productsContainer.appendChild(productElement);
            });
        });
});