function initAnimations() {
    if (document.getElementById('img1')) {
        //_____________Paste_Animations_Here_____________
       

    }
}
var tl=gsap.timeline()
 tl.to(".loader",{
    opacity:"0",
    delay:2.5,
    duration:.5,
    ease:"ease-out"
 })
 tl.to(".loader",{
    display:"none"
 })

 $(document).ready(function () {
    // ELEMENTS
    var $scramble = $(".scramble");
  
    $scramble.scramble(3000, 30, "alphabet", true);
  });
  var treattext = ""
  document.querySelector(".treat").textContent.split("").
    forEach(function (z) {
      if (z === "")
        treattext += `<h3>@nbsp:</h3>`
      treattext += `<h3>${z}</h3>`
    })
  document.querySelector(".treat").innerHTML = treattext;

  var tl = gsap.timeline()
  gsap.from(".treat h3", {
    scrollTrigger:{
trigger:".treat",
scroller:"body",
start:"80% 90%",
end:"90% 90%",
scrub:2
    },
    opacity:0,
    y: 300,
    duration: .7,
    stagger: 0.06
  },"a")
// let clutter=""
//   let words=document.querySelector(".Experience").split("")
//   words.forEach(element => {
//     clutter+=`<span> ${element} </span>`
//     document.querySelector(".Experience").innerHTML=clutter;
//   });
//   tl.from(".Experience span",{

//   })



// --------------------DONT TOUCH THIS--------------------
function observeDOM(callback) {
    const observer = new MutationObserver((mutationsList) => {
        console.log('cause 2nd');
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                callback();
            }
        }
    });

    console.log('cause 3d');
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    return observer;
}

const observer = observeDOM(() => {
    initAnimations();
});
