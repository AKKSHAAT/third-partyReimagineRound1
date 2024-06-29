var tl=gsap.timeline()
tl.to(".text-loader",{
    opacity:1,
    duration:0.7,
    stagger:{
        each:0.14,
        repeat:1,
        yoyo:true
    }
})
