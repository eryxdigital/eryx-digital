document.addEventListener("DOMContentLoaded", function () {
    const config = {
        blog: {
            containerSelector: ".row.g-5",
            itemSelector: ".blog-item",
            paginationSelector: ".journal_pagination .pagination",
            itemsPerPage: 9
        },
        hub: {
            containerSelector: ".row.g-5",
            itemSelector: ".card.h-100",
            paginationSelector: ".digital-hub-pagination .pagination",
            itemsPerPage: 9
        }
    };

    let activePage = null;

    if (document.querySelector(config.blog.itemSelector)) {
        activePage = config.blog;
    } else if (document.querySelector(config.hub.itemSelector)) {
        activePage = config.hub;
    }

    if (!activePage) return;

    const container = document.querySelector(activePage.containerSelector);
    const paginationContainer = document.querySelector(activePage.paginationSelector);
    const items = document.querySelectorAll(activePage.itemSelector);
    const totalItems = items.length;
    const itemsPerPage = activePage.itemsPerPage;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let currentPage = 1;

    function displayItems() {
        // Hide all
        items.forEach(item => item.style.display = "none");

        // Show only current page items
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
});
