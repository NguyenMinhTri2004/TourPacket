let mobilemenu = document.querySelector('#mobile-menu');
let navmenu = document.querySelector('#nav-menu');
let closeicon = document.querySelector('#close-icon');
mobilemenu.onclick = function () {
  navmenu.classList.toggle('active');
}

closeicon.onclick = function () {
    navmenu.classList.remove('active');
}


let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })