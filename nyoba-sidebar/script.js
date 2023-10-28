const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".sidebar-close");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

sidebarClose.addEventListener("click", () => {
    if (sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    }
});