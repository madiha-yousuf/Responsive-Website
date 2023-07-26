burger = document.querySelector('.burger');
navBar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');

navList = document.querySelector('.navlist');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navBar.classList.toggle('h-nav-resp');


}
)


 