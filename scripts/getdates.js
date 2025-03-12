document.addEventListener("DOMContentLoaded", () => {

    const copyrightElement = document.getElementById("copyright");
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `&copy; ${currentYear} ${copyrightElement.innerHTML}`;
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
});
