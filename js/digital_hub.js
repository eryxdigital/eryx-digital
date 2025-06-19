// Dynamic Content for Digital Hub
const digitalHubProducts = [
    //Enter the digital products
    //product 1
    {
        title: "Ultimate Notion Planner",
        price: "$12.99",
        imageUrl: "img/erick_avatar.png",
        description: "Organize your entire life with this all-in-one digital planner. Works seamlessly in Notion.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },

    //product 2
    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },

    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },

    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },



    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },


    //product
    {
        title: "30 Instagram Post Templates",
        price: "$7.00",
        imageUrl: "img/carousel_business_city.jpg",
        description: "Editable Canva templates to boost your online brand and engagement in minutes.",
        link: "https://payhip.com/b/FrRCX",
        buyLink: "https://payhip.com/b/FrRCX"
    },



    // Add more products as necessary
];

function renderDigitalHubProducts() {
    const container = document.querySelector("#digital-products .row.g-5");
    digitalHubProducts.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${product.imageUrl}" class="card-img-top digital-hub-img" alt="">
                    <div class="card-body d-flex flex-column">
                        <p class="text-muted mb-2 fw-semibold">${product.price}</p>
                        <h5 class="card-title fw-semibold">
                            <a href="${product.link}" class="card-title" target="_blank">
                                ${product.title}
                            </a>
                        </h5>
                        <p class="card-text small">${product.description}</p>
                        <div class="mt-auto d-flex gap-4">
                            <a href="${product.link}" target="_blank" class="btn btn-outline-secondary">
                                <span class="btn-label">View</span>
                            </a>
                            <a href="${product.buyLink}" class="payhip-add-to-cart-button" data-theme="blue" data-product="FrRCX">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });

    // Call pagination function after the content is rendered
    setupPagination();
}

// Pagination Logic
function setupPagination() {
    const itemsPerPage = 30;
    const totalItems = digitalHubProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 1;

    const paginationContainer = document.querySelector('.digital-hub-pagination .pagination');
    const items = document.querySelectorAll(".card.h-100");

    function displayItems() {
        // Hide all items
        items.forEach(item => item.style.display = "none");

        // Show only the items for the current page
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        for (let i = start; i < end && i < totalItems; i++) {
            items[i].style.display = "block";
        }

        updatePagination();
    }

    function updatePagination() {
        paginationContainer.innerHTML = "";

        if (totalPages <= 1) {
            paginationContainer.parentElement.style.display = "none";
            return;
        }

        paginationContainer.parentElement.style.display = "flex";

        // Prev button
        const prevBtn = document.createElement("li");
        prevBtn.className = "page-item";
        if (currentPage === 1) prevBtn.classList.add("disabled");
        prevBtn.innerHTML = `
            <a class="page-link rounded-0" href="#" aria-label="Previous">
                <span aria-hidden="true"><i class="bi bi-arrow-left"></i></span>
            </a>`;
        prevBtn.addEventListener("click", e => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                displayItems();
            }
        });
        paginationContainer.appendChild(prevBtn);

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("li");
            pageItem.className = "page-item";
            if (i === currentPage) pageItem.classList.add("active");
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener("click", e => {
                e.preventDefault();
                currentPage = i;
                displayItems();
            });
            paginationContainer.appendChild(pageItem);
        }

        // Next button
        const nextBtn = document.createElement("li");
        nextBtn.className = "page-item";
        if (currentPage === totalPages) nextBtn.classList.add("disabled");
        nextBtn.innerHTML = `
            <a class="page-link rounded-0" href="#" aria-label="Next">
                <span aria-hidden="true"><i class="bi bi-arrow-right"></i></span>
            </a>`;
        nextBtn.addEventListener("click", e => {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                displayItems();
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    displayItems();
}

// Initialize the page content and pagination
document.addEventListener("DOMContentLoaded", renderDigitalHubProducts);
