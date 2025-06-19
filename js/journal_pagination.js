// journal.js logic for pagination
document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.querySelector(".row.g-5");
    const paginationContainer = document.querySelector(".pagination");
    const postsPerPage = 30; // Number of posts per page
    let currentPage = 1; // Initial page
    const totalPosts = document.querySelectorAll(".blog-item").length; // Get the total number of blog items
    const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate total pages based on posts

    // Function to display posts based on the current page
    function displayPosts() {
        // Hide all posts initially
        const allPosts = document.querySelectorAll(".blog-item");
        allPosts.forEach(post => post.style.display = "none");

        // Show posts for the current page
        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        for (let i = start; i < end && i < allPosts.length; i++) {
            allPosts[i].style.display = "block";
        }

        updatePagination();
    }

    // Function to update pagination buttons
    function updatePagination() {
        // Reset pagination HTML (if needed, you can build it dynamically based on the number of pages)
        paginationContainer.innerHTML = "";

        // "Previous" button
        const prevButton = document.createElement("li");
        prevButton.classList.add("page-item");
        prevButton.classList.toggle("disabled", currentPage === 1);
        prevButton.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true"><i class="bi bi-arrow-left"></i></span></a>`;
        prevButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                displayPosts();
            }
        });
        paginationContainer.appendChild(prevButton);

        // Pagination number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("li");
            pageItem.classList.add("page-item");
            pageItem.classList.toggle("active", i === currentPage);
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener("click", function () {
                currentPage = i;
                displayPosts();
            });
            paginationContainer.appendChild(pageItem);
        }

        // "Next" button
        const nextButton = document.createElement("li");
        nextButton.classList.add("page-item");
        nextButton.classList.toggle("disabled", currentPage === totalPages);
        nextButton.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true"><i class="bi bi-arrow-right"></i></span></a>`;
        nextButton.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                displayPosts();
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    // Initial setup and display
    displayPosts();
});

//MAIN before object