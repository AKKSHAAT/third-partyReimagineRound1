console.log('connected');
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

function add(elementId, path) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            try {
                document.getElementById(elementId).innerHTML = data;
            } catch (err) {
                console.warn(`${err} for ID: '${elementId}'`);
            }
        });
}

// add('Landing', 'components/Landing.html');
add('nav', 'components/nav.html');
add('hero_section', 'components/hero_section.html');
add('features', 'components/features.html');
add('horizontal_scroll', './components/horizontal_scroll.html');
add('aboutus', './components/aboutus.html');
add('waffle_cakes', './components/waffle_cakes.html');
add('3d_waffle', 'components/3d_waffle.html');
add('regular_Waffles', 'components/regular_Waffles.html');
add('premix', 'components/premix.html');
add('product-List', './components/product-List.html');
add('Spreads', './components/spreads.html');
add('footer', './components/footer.html');




    document.addEventListener('DOMContentLoaded', () => {
        let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Downscroll
                navbar.style.top = '-100%';
                navbar.style.transition="all ease-in-out 1s"
            } else {
                // Upscroll
                navbar.style.top = '0';
                 navbar.style.transition="all ease-in-out 1s"
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });
    });

