// section 1
const openMenu = document.querySelector(".c_openMenu");
const sideNavHeader = document.querySelector(".c_sideNavHeader");
const navMenu = document.querySelector(".c_navMenu");
const sidenav = document.querySelector(".c_sidenav");

function openNav() {
  document.getElementById("c_mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("c_mySidenav").style.width = "0";
}
function myFunction(x) {
  if (x.matches) {
    openMenu.style.display = "";
    sideNavHeader.style.display = "";
    navMenu.style.display = "block";
  } else {
    openMenu.style.display = "none";
    sideNavHeader.style.display = "none";
    navMenu.style.display = "flex";
  }
}

var x = window.matchMedia("(max-width: 1024px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};
document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();
