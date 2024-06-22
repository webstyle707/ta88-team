var menu = document.querySelector('.menu');
// var menu = document.querySelector('.menu');
const hideNav = ()=>{
    menu.style.transition = "all 0.8s ease";
    menu.style.left = "-100%";
}

const showNav = ()=>{
    menu.style.transition = "all 0.8s ease";
    menu.style.left = "0%";
}


function toggleClassOnScroll() {
    const containtRight = document.querySelector(".containt-right");
    const navbar = document.querySelector(".navbar");
    //   const scrollThreshold = 100; // Adjust this value as needed
  
    if (window.scrollY > 70) {
        containtRight.classList.add("stickyStyle");
        console.log("1")
    } else {
        containtRight.classList.remove("stickyStyle");
    }
  }
  
 
  // Add event listener to window scroll
  window.addEventListener("scroll", toggleClassOnScroll);