document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(collapsible => {
        collapsible.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.classList.toggle("active");

            // Toggle arrow direction
            const arrow = this.querySelector(".arrow");
            if (content.classList.contains("active")) {
                arrow.textContent = "▼"; // Down arrow
            } else {
                arrow.textContent = "▶"; // Right arrow
            }
        });
    });
});
