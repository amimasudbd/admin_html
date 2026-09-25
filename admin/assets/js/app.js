function initializeAdmin() {

    initializeSidebar();

    initializeUserMenu();

    initializeDarkMode();

    initializeDate();

    initializeFooterYear();

    initializeActiveMenu();

}


function initializeSidebar() {

    const sidebarButton =
        document.getElementById("mobileSidebarButton");

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    if (!sidebarButton || !sidebar || !overlay) {
        return;
    }


    sidebarButton.addEventListener("click", () => {

        sidebar.classList.toggle("-translate-x-full");

        overlay.classList.toggle("hidden");

    });


    overlay.addEventListener("click", () => {

        sidebar.classList.add("-translate-x-full");

        overlay.classList.add("hidden");

    });

}


function initializeUserMenu() {

    const button =
        document.getElementById("userMenuButton");

    const menu =
        document.getElementById("userMenu");


    if (!button || !menu) {
        return;
    }


    button.addEventListener("click", (event) => {

        event.stopPropagation();

        menu.classList.toggle("hidden");

    });


    document.addEventListener("click", () => {

        menu.classList.add("hidden");

    });

}


function initializeDarkMode() {

    const button =
        document.getElementById("darkModeButton");


    if (!button) {
        return;
    }


    const savedTheme =
        localStorage.getItem("adminTheme");


    if (savedTheme === "dark") {

        document.documentElement.classList.add("dark");

        button.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }


    button.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark");


        const isDark =
            document.documentElement.classList.contains("dark");


        localStorage.setItem(
            "adminTheme",
            isDark ? "dark" : "light"
        );


        button.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    });

}


function initializeDate() {

    const dateElement =
        document.getElementById("currentDate");


    if (!dateElement) {
        return;
    }


    const date =
        new Date();


    dateElement.textContent =
        date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

}


function initializeFooterYear() {

    const yearElement =
        document.getElementById("footerYear");


    if (!yearElement) {
        return;
    }


    yearElement.textContent =
        new Date().getFullYear();

}


function initializeActiveMenu() {

    const currentPage =
        window.location.pathname.split("/").pop();


    const menuItems =
        document.querySelectorAll(".sidebar-link");


    menuItems.forEach((item) => {

        const href =
            item.getAttribute("href");


        if (!href) {
            return;
        }


        if (href.endsWith(currentPage)) {

            item.classList.add(
                "bg-indigo-600",
                "text-white"
            );

        }

    });

}