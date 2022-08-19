$('.owl-carousel').owlCarousel({
    loop: true,
    items:1,
    margin: 75,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1000,
    nav: true,
    navText: ['<img src="./img/prev.png">','<img src="./img/next.png">']
});

// sideBar 

const open = document.querySelector('.sideBar'),
      close = document.querySelector('.close'),
      sideBar = document.getElementById('sideBar');



open.addEventListener('click', () => {
    sideBar.style.display = 'block';
});

close.addEventListener('click', () => {
    sideBar.style.display = 'none';
});
