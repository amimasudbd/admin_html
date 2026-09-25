async function loadComponent(elementId, filePath) {
    const element = document.getElementById(elementId);

    if (!element) {
        return;
    }

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}`);
        }

        const html = await response.text();

        element.innerHTML = html;

        document.dispatchEvent(
            new CustomEvent("componentLoaded", {
                detail: {
                    elementId: elementId
                }
            })
        );

    } catch (error) {
        console.error(error);
    }
}


document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "navbarContainer",
        "components/navbar.htm"
    );

    await loadComponent(
        "sidebarContainer",
        "components/sidebar.htm"
    );

    await loadComponent(
        "headerContainer",
        "components/header.htm"
    );

    await loadComponent(
        "footerContainer",
        "components/footer.htm"
    );

    initializeAdmin();
});