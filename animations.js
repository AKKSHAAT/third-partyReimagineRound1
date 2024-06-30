function initAnimations() {
    if (document.getElementById('img1')) {
        //_____________Paste_Animations_Here_____________
        gsap.from("#img1", {
            opacity: 0
        });

        gsap.from('#lol', {
            'background-color': 'red'
        });
    }
}





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
