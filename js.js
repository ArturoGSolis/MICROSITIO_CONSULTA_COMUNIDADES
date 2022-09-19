
window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

    if (window.scrollY < 1000) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}



