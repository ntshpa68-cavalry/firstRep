// from, to GSAP

gsap.to(".box",{
  duration: 3,
  delay: 1,
  rotate: 270,
  stagger: 1,
  bottom: "5%",
  left: "70%",
  opacity: 1,
  repeat: -1,
  yoyo: true
})

gsap.to(".box1",{
  marginBottom: 10
})

gsap.to(".box2",{
  marginBottom: 35
})

gsap.to(".box3",{
  marginBottom: 60
})

gsap.to(".box4",{
  marginBottom: 85
})

gsap.to(".fromh1",{
  fontSize: 40,
  delay: 1,
  duration: 3,
  rotate: 270,
  x: 150,
  y: -100,
  opacity: 0.8
})

gsap.to(".fromh2",{
  fontSize: 32,
  delay: 1,
  rotate: 270,
  x: 250,
  y: -150,
  opacity: 0.5
})

gsap.from(".page2 .boxx",{
  duration: 3,
  delay: 1,
  rotate: 270,
  scale: 0,
  opacity: 0,
  repeat: -1,
  yoyo: true
})

gsap.to(".page3 h1",{
  transform: "translateX(-200%)",
  scrollTrigger:{
    trigger: ".page3",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 5,
    pin: true
  }
})


// Cursor Movement

var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")
var body = document.querySelector("body")

body.addEventListener("mousemove", function(dets)
{
  gsap.to(cursor,{
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out"
  })
})

imageDiv.addEventListener("mouseenter", function()
{
  gsap.to(cursor,{
    scale: 2,
    borderRadius: "0%"
  })
})

imageDiv.addEventListener("mouseleave", function()
{
  gsap.to(cursor,{
    scale: 1,
    borderRadius: "50%"

  })
})
