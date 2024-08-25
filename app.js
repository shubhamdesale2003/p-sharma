// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth:true
// });



(function loadingAnimation(){

var t1 = gsap.timeline();
t1.from(".line1 h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})
t1.from('.now-txt', {
    opacity:0,
})

t1.from('.line1-part1',{
  opacity:0,
  onStart:function(){
    let counter = document.querySelector('h5')
    let count=0;
    setInterval(()=>{
        if(count < 100){
            counter.innerHTML=count++;
        }
        else{
           counter.innerHTML=count;
        }
    
    },33)
  }
})

t1.to('.loader',{
    opacity:0,
    duration:0.2,
    delay:4
})
t1.from('.page1',{
    y:1600,
    delay:0.2,
    duration:0.6,
    ease:Power4
   
})
t1.to('.loader',{
    display:"none"
})
t1.from('nav .menu a, .logo',{
    opacity:0,
    y:-50,
    stagger:.2
})
t1.from('.hero h4',{
    y:120,
    stagger:0.2
})
t1.from(".page2", {
    y:1200,
    duration:0.6,
    delay:0.2,
})
t1.from(".page2-content h1, .underline , p , img", {
    opacity:0,
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})


})();


(function cursorAnimation(){
    document.addEventListener("mousemove", function (dets) {
    
        gsap.to('.crsr', {
            left:dets.x,
            top:dets.y
        });
    })
})();

// Shery.makeMagnet(".menu a , .logo" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });
//   Shery.imageEffect(".image", {
   
//    gooey:true
//   });
 
Shery.makeMagnet(" .menu a, .logo h2, .txt-stroke , .flex img , .gola i, .btn a", {})
Shery.imageEffect(".image",{
    style:5,
    gooey:true
})

document.addEventListener("mousemove", function(dets){
    gsap.to(".flag", {
        x:dets.x,
        y:dets.y
    })
})
document.querySelector(".hero3").addEventListener("mouseenter", function(){
    gsap.to(".flag", {
        opacity:1,
    })
})
document.querySelector(".hero3").addEventListener("mouseleave", function(){
    gsap.to(".flag", {
        opacity:0,
    })
})

