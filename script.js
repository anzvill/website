//Javascript to animate the nav bar to hide when scrolling down , and reappear when scrolling up. 
//Easy access to go to top of the page by selecting home. or visitng another section. 

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

function handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (window.innerWidth > 768) {
        if (scrollTop > lastScrollTop) {
            // Downscroll
            navbar.style.top = '-100px'; //navbar height
        } else {
            // Upscroll
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
    } else {
        //fixed for small screens
        navbar.style.top = '0';
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('mousemove', function(e) {
    if (window.innerWidth > 768 && e.clientY < 50) { // Show navbar when mouse is near the top of the screen
        navbar.style.top = '0';
    }
});
