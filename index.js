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

var x = window.matchMedia("(max-width: 1300px)");
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



// slider
const slides = document.querySelectorAll(".c_slide");

const preBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector ("#nextBtn");
const indicatorParent = document.querySelector('.c_dot '); 
const indicators = document.querySelectorAll('.c_dot li');
let index = 0;

slides.forEach(function(slide, index){
    slide.style.left= `${index*100}%`;
});

// function for swipe 

function carousel(){
    if (index === slides.length){
        index = 0;
    }
    if (index < 0 ){
        index = slides.length -1 ;
    }

    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${index*100}%)`;
    });

    document.querySelector('.c_dot .c_selected').classList.remove('c_selected');
    indicatorParent.children[index].classList.add('c_selected');
    // setIndex(index);
   
}

// auto slide function 

function autoslide(){
    index++;
    carousel();
    setTimeout(autoslide, 5000);

};

autoslide();

// dot point function 
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${index*100}%)`;
    });
    
    document.querySelector('.c_dot .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    //   index = i;
    });
});

// btn add event listener for swipe card 
nextBtn.addEventListener("click" ,function(){
    index++;
    carousel();


});
preBtn.addEventListener("click" ,function(){
    index--;
    carousel();

});