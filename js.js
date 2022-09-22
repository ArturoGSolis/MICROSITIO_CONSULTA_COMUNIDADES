
window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("nav");
var boton1 = document.getElementById("test1");
var boton2 = document.getElementById("test2");
var boton3 = document.getElementById("test3");
var boton4 = document.getElementById("test4");
var boton5 = document.getElementById("test5");

var sticky = navbar.offsetTop;

const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

function myFunction() {
    
    if (window.pageYOffset >= 1000 && $(window).width() > 992) {
        
        navbar.classList.add("sticky", "notop")
        boton1.classList.add('botones2');
        boton1.classList.remove('botones');
        boton2.classList.add('botones2');
        boton2.classList.remove('botones');
        boton3.classList.add('botones2');
        boton3.classList.remove('botones');
        boton4.classList.add('botones2');
        boton4.classList.remove('botones');
        boton5.classList.add('botones2');
        boton5.classList.remove('botones');

    } else {
        navbar.classList.remove("sticky", "notop")
        boton1.classList.remove('botones2');
        boton1.classList.add('botones');
        boton2.classList.remove('botones2');
        boton2.classList.add('botones');
        boton3.classList.remove('botones2');
        boton3.classList.add('botones');
        boton4.classList.remove('botones2');
        boton4.classList.add('botones');
        boton5.classList.remove('botones2');
        boton5.classList.add('botones');

    }

    if (window.scrollY < 1000) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}



