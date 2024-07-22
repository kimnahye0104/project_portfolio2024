/* on, off 모드 전환 스크립트 */
const onoff_btn = document.querySelector('#onoff_btn')
console.log(onoff_btn)

const main = document.querySelector('main')
console.log(main)

const header = document.querySelector('header')

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
console.log(header, h1, h2, h3)

/* main.style.backgroundColor = '#fff'; */

/* onoff_btn.addEventListener('click',function(){
    onoff_btn.style.filter = 'invert(100%)';
    h2.style.filter = 'invert(100%)';
    h3.style.filter = 'invert(100%)';
}) */

const sub = document.querySelectorAll('.sub')
console.log(sub)
const menu = document.querySelectorAll('.sub > li')
console.log(menu)
const nav_menu = document.querySelectorAll('header .right > li')
console.log(nav_menu[1])

sub[0].style.display = 'none';

nav_menu[1].addEventListener('mouseover',function(){
    sub[0].style.display = 'block';
})
nav_menu[1].addEventListener('mouseout',function(){
    sub[0].style.display = 'none';
})

/* sns swiper */
const snsS = new Swiper('.sns .swiper',{
    slidesPerView:2,//한번에 4개 보이기 //slides "s" 뻬먹지 마ㅏㅏㅏㅏ(기본 : 모바일 : 600px)
    spaceBetween:20,//슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteration:true,},
    loop:true,
    speed:8000,
    freemode:true,
    //반응형 슬라이드 수
    breakpoints:{
        800:{slidesPerView:3,}, //800이상일때 3개
        1200:{slidesPerView:4,}, //1200이상일때 4개
    }
})