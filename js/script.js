// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// hamburger active
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klick di luar sidebar untuk nav

const ham = document.getElementById("hamburger-menu");

document.addEventListener("click", function (e) {
  //ham content
  if (!ham.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
