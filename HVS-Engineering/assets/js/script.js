document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded Successfully"); // Debugging Check

    // 🔹 Language Toggle Functionality
    const langToggle = document.querySelector(".language-toggle");
    const langDropdown = document.querySelector(".language-menu");
    const langIcelandic = document.getElementById("lang-icelandic");
    const langEnglish = document.getElementById("lang-english");

    if (langToggle && langDropdown && langIcelandic && langEnglish) {
        const pages = {
            "index.html": "index_is.html",
            "about.html": "about_is.html",
            "services.html": "services_is.html",
            "projects.html": "projects_is.html",
            "all-projects.html": "all-projects_is.html",
            "ongoing-projects.html": "ongoing-projects_is.html",
            "contact.html": "contact_is.html",

            "index_is.html": "index.html",
            "about_is.html": "about.html",
            "services_is.html": "services.html",
            "projects_is.html": "projects.html",
            "all-projects_is.html": "all-projects.html",
            "ongoing-projects_is.html": "ongoing-projects.html",
            "contact_is.html": "contact.html"
        };

        let currentPage = window.location.pathname.split("/").pop();
        let isIcelandic = currentPage.endsWith("_is.html");

        // Set the dropdown text based on the current language
        langToggle.textContent = isIcelandic ? "Tungumál ▼" : "Languages ▼";

        // Ensure dropdown opens on click
        langToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            langDropdown.classList.toggle("active");
        });

        // Switch to Icelandic
        langIcelandic.addEventListener("click", function (event) {
            event.preventDefault();
            if (!isIcelandic) {
                let newPage = pages[currentPage] || "index_is.html";
                console.log("Switching to Icelandic:", newPage); // Debugging output
                window.location.href = newPage;
            }
        });

        // Switch to English
        langEnglish.addEventListener("click", function (event) {
            event.preventDefault();
            if (isIcelandic) {
                let newPage = pages[currentPage] || "index.html";
                console.log("Switching to English:", newPage); // Debugging output
                window.location.href = newPage;
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!langDropdown.contains(event.target) && event.target !== langToggle) {
                langDropdown.classList.remove("active");
            }
        });

        // Prevent dropdown from closing when clicking inside
        langDropdown.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    // 🔹 Ensure Bootstrap modal buttons work correctly
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    if (readMoreButtons.length > 0) {
        readMoreButtons.forEach(button => {
            button.addEventListener("click", function () {
                let targetModal = this.getAttribute("data-bs-target");
                let modal = document.querySelector(targetModal);
                if (modal) {
                    console.log("Opening Modal:", targetModal); // Debugging output
                    let bootstrapModal = new bootstrap.Modal(modal);
                    bootstrapModal.show();
                }
            });
        });
    }

    // 🔹 Fix for Page Freezing After Closing Modal
    let modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
        modal.addEventListener("hidden.bs.modal", function () {
            document.body.style.overflow = "auto"; 
            document.body.classList.remove("modal-open");
            let backdrops = document.querySelectorAll(".modal-backdrop");
            backdrops.forEach(backdrop => backdrop.remove());
        });
    });

    // 🔹 Logo Size Adjustment Slider (If Present)
    const logo = document.querySelector(".expertise-logo");
    const slider = document.getElementById("logoSizeSlider");

    if (logo && slider) {
        slider.addEventListener("input", function () {
            logo.style.width = this.value + "px";
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded: Checking Modal Functionality...");

    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            let targetModal = this.getAttribute("data-bs-target");
            console.log("Opening Modal:", targetModal); // Debugging Output
            let modal = document.querySelector(targetModal);
            if (modal) {
                let bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            } else {
                console.log("Modal Not Found:", targetModal); // Debugging Output
            }
        });
    });

    // Fix for Bootstrap Modal Freezing Issue
    let modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
        modal.addEventListener("hidden.bs.modal", function () {
            document.body.style.overflow = "auto"; 
            document.body.classList.remove("modal-open");
            let backdrops = document.querySelectorAll(".modal-backdrop");
            backdrops.forEach(backdrop => backdrop.remove());
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Bootstrap Modal Debugging...");
    
    // Check if Bootstrap Modal is available
    if (typeof bootstrap !== "undefined") {
        console.log("Bootstrap Loaded Successfully");
    } else {
        console.error("🚨 Bootstrap is NOT loaded! Check script order.");
    }

    // Debugging for buttons
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            let targetModal = this.getAttribute("data-bs-target");
            console.log("Opening Modal:", targetModal);
            let modal = document.querySelector(targetModal);
            if (modal) {
                let bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            } else {
                console.error("🚨 Modal Not Found:", targetModal);
            }
        });
    });
});
