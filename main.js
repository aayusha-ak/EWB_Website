
function ShowHide() {
    const menu = document.getElementById("hamMenu");
    if (menu) {
      menu.classList.toggle("show");
    }
    //when a link is clicked, hide the menu
    
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navLinks a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});
