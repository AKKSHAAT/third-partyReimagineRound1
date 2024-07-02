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
  
    $scramble.scramble(500, 30, "alphabet", true);
  });

  let words=document.querySelector(".Experience").split



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
