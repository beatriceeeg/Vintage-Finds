let currentPage = 1;

const products = {
    page1: [
        {
            name: "Chanel Classic Flap Vintage",
            price: "Rp 45.000.000",
            rating: 4.5,
            image: "bag (6).jpg"
        },
        {
            name: "Gucci Bamboo Vintage",
            price: "Rp 38.500.000",
            rating: 4.0,
            image: "bag (3).jpg"
        },
        {
            name: "Miu Miu Matelassé Vintage",
            price: "Rp 32.300.000",
            rating: 4.5,
            image: "bag (4).jpg"
        },
        {
            name: "Prada Nylon Vintage",
            price: "Rp 28.900.000",
            rating: 4.5,
            image: "bag (5).jpg"
        },
        {
            name: "Vivienne Westwood Heart Bag",
            price: "Rp 25.700.000",
            rating: 4.5,
            image: "bag (1).jpg"
        },
        {
            name: "Bottega Venetta Intrecciato",
            price: "Rp 41.200.000",
            rating: 4.5,
            image: "bag (2).jpg"
        }
    ],
    page2: [
        {
            name: "Chanel Diana Vintage",
            price: "Rp 52.000.000",
            rating: 4.9,
            image: "bag (7).jpg"
        },
        {
            name: "Gucci Jackie Vintage",
            price: "Rp 35.800.000",
            rating: 4.4,
            image: "bag (8).jpg"
        },
        {
            name: "Hermes Kelly Vintage",
            price: "Rp 75.000.000",
            rating: 4.8,
            image: "bag (9).jpg"
        },
        {
            name: "Louis Vuitton Speedy Vintage",
            price: "Rp 30.000.000",
            rating: 4.6,
            image: "bag (10).jpg"
        },
        {
            name: "Fendi Baguette Vintage",
            price: "Rp 27.500.000",
            rating: 4.3,
            image: "bag (11).jpg"
        },
        {
            name: "Dior Saddle Vintage",
            price: "Rp 40.000.000",
            rating: 4.7,
            image: "bag (12).jpg"
        }
    ]
};

function changePage(page) {
    if (page !== currentPage) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        document.getElementById(`page${page}`).classList.add('active');
        currentPage = page;
        displayProducts(page);
    }
}

function displayProducts(page) {
    const productList = document.getElementById('productList');
    const currentProducts = products[`page${page}`];
    
    let html = '';
    currentProducts.forEach(product => {
        const stars = generateStarRating(product.rating);
        html += `
            <div class="col-md-4 mb-4">
                <div class="product-card">
                    <img src="vintagefinds/${product.image}" alt="${product.name}" class="product-img">
                    <h4>${product.name}</h4>
                    <div class="rating">
                        ${stars}
                        <span class="ms-2">${product.rating}/5</span>
                    </div>
                    <p class="price">${product.price}</p>
                    <button class="btn btn-primary w-100">Tambah ke Keranjang</button>
                </div>
            </div>
        `;
    });
    productList.innerHTML = html;
}

function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

displayProducts(currentPage); 