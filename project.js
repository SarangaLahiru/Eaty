var slides=document.querySelectorAll('.slide')
var radb=document.querySelectorAll('.rad-btn')
var right=document.querySelector('.right')
var left=document.querySelector('.left')

var slideInt;
var intTime=5000;


right.addEventListener('click',next);

left.addEventListener('click',pre);
   
function next(e){
    e.preventDefault();
    nextSlide();
    clrInterval();
}


function nextSlide(){
    var curr=document.querySelector('.curr');
    var active=document.querySelector('.active');

    curr.classList.remove('curr')
    active.classList.remove('active')

    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr')
        active.nextElementSibling.classList.add('active')

    }
    else{
        slides[0].classList.add('curr')
        radb[0].classList.add('active')
    }
}

function preSlide(){
    var curr=document.querySelector('.curr');
    var active=document.querySelector('.active');

    curr.classList.remove('curr')
    active.classList.remove('active')

    if(curr.previousElementSibling){
        curr.previousElementSibling.classList.add('curr')
        active.previousElementSibling.classList.add('active')

    }
    else{
        slides[slides.length-1].classList.add('curr')
        radb[radb.length-1].classList.add('active')
    }
}
slideInt=setInterval(nextSlide,intTime);

function clrInterval(){
    clearInterval(slideInt);
    slideInt=setInterval(nextSlide,intTime);
}
function pre(e){
    e.preventDefault();
   preSlide();
   clrInterval();
}

var msg=document.querySelectorAll('.msg')
var right1=document.querySelector('.right1');
var left1=document.querySelector('.left1')

right1.addEventListener('click',function next(e){
    e.preventDefault()
    next1();

    
})
left1.addEventListener('click',function next(e){
    e.preventDefault()
    pre1();

    
})

function next1(){
    var curr2=document.querySelector('.curr2');
    curr2.classList.remove('curr2')

    if(curr2.nextElementSibling){
        curr2.nextElementSibling.classList.add('curr2')
    }
    else{
        msg[0].classList.add('curr2')
    }
}

function pre1(){
    var curr2=document.querySelector('.curr2');
    curr2.classList.remove('curr2')

    if(curr2.previousElementSibling){
        curr2.previousElementSibling.classList.add('curr2')
    }
    else{
        msg[msg.length-1].classList.add('curr2')
    }
}

var r1=document.querySelectorAll('.r1')
var box=document.querySelectorAll('.box')
var leftpi=document.querySelector('.leftpi') 
var rightpi=document.querySelector('.rightpi') 
console.log(r1)

rightpi.addEventListener('click',function pi(e){
    e.preventDefault();
    nextpi();

})
leftpi.addEventListener('click',function bt(e){
    e.preventDefault();
    prepi();

})

 function nextpi(){
    var pi=document.querySelector('.pi')
    var bt=document.querySelector('.bt')

    pi.classList.remove('pi')
    bt.classList.remove('bt')

    if(pi.nextElementSibling){
        pi.nextElementSibling.classList.add('pi')
        bt.nextElementSibling.classList.add('bt')

    }
    else{
        box[0].classList.add('pi')
        r1[0].classList.add('bt')
    }
 }

 function prepi(){
    var pi=document.querySelector('.pi')
    var bt=document.querySelector('.bt')

    pi.classList.remove('pi')
    bt.classList.remove('bt')

    if(pi.previousElementSibling){
        pi.previousElementSibling.classList.add('pi')
        bt.previousElementSibling.classList.add('bt')

    }
    else{
        box[box.length-1].classList.add('pi')
        r1[r1.length-1].classList.add('bt')
    }
 }

