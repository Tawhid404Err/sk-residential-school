const header = document.getElementById("header-fixed");
const mediaQuery = window.matchMedia("(max-width: 1100px)");

function handleScroll() {
  if (window.scrollY > 0) {
    header.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.boxShadow = "none";
  }
}

function checkScreenSize() {
  if (mediaQuery.matches) {
    window.addEventListener("scroll", handleScroll);
  } else {
    window.removeEventListener("scroll", handleScroll);
    header.style.boxShadow = "none";
  }
}

checkScreenSize();

mediaQuery.addEventListener("change", checkScreenSize);
