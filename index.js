const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const nava = document.querySelectorAll('.nav-links a');
    var navfix = document.getElementsByTagName("nav");
    console.log(navfix);
    console.log(nava);
    console.log(navLinks);
    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index) =>{
        if (link.style.animation) {
            link.style.animation = ''
        }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        }
    });

    burger.classList.toggle('toggle');    
});

    window.addEventListener('scroll', () => {
        const pos = window.scrollY;
        const maxscroll = document.documentElement.scrollHeight - window.innerHeight;
        // console.log(pos);
        // console.log(maxscroll);// const maxscroll = 500;
        // if (Math.ceil(pos) > 350) {
            if (pos > 100) {
            navfix[0].classList.add("nav-fixed");
        }
        else{
            navfix[0].classList.remove("nav-fixed");
        }
    });
  
    

}


function menuClose() {
    if(document.querySelector('.nav-links').classList.toggle('nav-active')){
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
    else{
        document.querySelector('.burger').classList.remove('toggle');
    }

    window.onload = function(){
        //hide the preloader
        document.querySelector('.preloader').style.display = 'none';
        document.getElementsByClassName('cont')[0].classList.remove('load');
    }

    document.addEventListener('mousemove', parallax);
    function parallax(e) {
           const speed = this.querySelectorAll('.img-land')[0].getAttribute('data-speed')
           const speed1 = this.querySelectorAll('.img-land-1')[0].getAttribute('data-speed')
           const texttrans = this.querySelectorAll('.name')[0].getAttribute('data-speed')
            // const m = e.pageX;
            // console.log(m);
           const x = (window.innerWidth - e.pageX*speed)/500
           const y = (window.innerHeight - e.pageY*speed)/500

           const x1 = (window.innerWidth - e.pageX*speed1)/500
           const y1 = (window.innerHeight - e.pageY*speed1)/500

           const x2 = (window.innerWidth - e.pageX*texttrans)/800
           const y2 = (window.innerHeight - e.pageY*texttrans)/800

        // document.getElementsByClassName('img-land')[0].style.transform = `skewX(${x}deg) skewY(${y}deg)`
        // document.getElementsByClassName('img-land-1')[0].style.transform = `skewX(${x1}deg) skewY(${y1}deg)`
        document.getElementsByClassName('img-land')[0].style.transform = `translate3d(${x}px , 10px ,${y}px) skewX(${x/10}deg) skewY(${y/4}deg)`
        document.getElementsByClassName('img-land-1')[0].style.transform = `translate3d(${x1}% , 10px ,${y1}px)`
        document.getElementsByClassName('name')[0].style.transform = `translate3d(${x2}% , 10px ,${y2}px) skewX(${x2/10}deg) skewY(${y2/4}deg)`
    }

} 

document.getElementById("name").addEventListener('mousemove',(ex) =>{
    if(!onmousemove){ 
            const x = ex.offsetX;
            console.log(x);
            // document.getElementById('num').innerText = x;
     }
  },false);
navSlide();
menuClose();