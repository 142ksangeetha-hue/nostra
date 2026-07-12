// ===============================
// MOBILE MENU
// ===============================

const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

if (menuIcon && mobileMenu && closeMenu) {

    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });

    });

}

// ===============================
// ACTIVE NAVIGATION
// ===============================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// ===============================
// NAVBAR SHADOW
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});

// ===============================
// COLLECTION SEARCH + FILTER
// ===============================

const searchInput = document.getElementById("search");
const productContainer = document.getElementById("productContainer");

if (searchInput && productContainer) {

    const products = productContainer.querySelectorAll(".collection-card");
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const productCount = document.getElementById("productCount");

    function filterProducts() {

        const searchText = searchInput.value.toLowerCase().trim();

        let selectedCategories = [];

        checkboxes.forEach(box => {

            if (box.checked) {

                selectedCategories.push(box.value.toLowerCase());

            }

        });

        products.forEach(product => {

            const productName = product.dataset.name.toLowerCase();

            const category = product.dataset.category.toLowerCase();

            const matchesSearch = productName.includes(searchText);

            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(category);

            if (matchesSearch && matchesCategory) {

                product.classList.remove("hide");

            } else {

                product.classList.add("hide");

            }

        });

        const visibleProducts = document.querySelectorAll(".collection-card:not(.hide)");

        if (productCount) {

            productCount.innerHTML = visibleProducts.length + " Products";

        }

        let message = document.getElementById("noProducts");

        if (!message) {

            message = document.createElement("h2");

            message.id = "noProducts";

            message.innerHTML = "No Products Found";

            message.style.textAlign = "center";
            message.style.marginTop = "30px";
            message.style.color = "#777";

            productContainer.after(message);

        }

        message.style.display = visibleProducts.length ? "none" : "block";

    }

    searchInput.addEventListener("keyup", filterProducts);

    checkboxes.forEach(box => {

        box.addEventListener("change", filterProducts);

    });

    filterProducts();

}

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// NEWSLETTER
// ===============================

const newsletterButtons = document.querySelectorAll(".newsletter-box button");

newsletterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const input = button.parentElement.querySelector("input");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (input.value.trim() === "") {

            alert("Please enter your email.");

            return;

        }

        if (!emailPattern.test(input.value)) {

            alert("Please enter a valid email.");

            return;

        }

        alert("Thank you for subscribing!");

        input.value = "";

    });

});

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

            }

        });

        if (!valid) {

            alert("Please fill all fields.");

            return;

        }

        const email = contactForm.querySelector("input[type='email']");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && !emailPattern.test(email.value)) {

            alert("Please enter a valid email.");

            return;

        }

        alert("Your message has been sent successfully!");

        contactForm.reset();

    });

}

// ===============================
// SCROLL TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display = window.scrollY > 300 ? "block" : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}