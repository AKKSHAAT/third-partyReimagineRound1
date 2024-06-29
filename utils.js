console.log('connected');
function add(elementId, path) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

add('nav', 'components/nav.html');
add('hero_section', 'components/hero_section.html');
add('features', 'components/features.html');
add('horizontal_scroll', './components/horizontal_scroll.html');
add('aboutus', './components/aboutus.html');    
add('sec2', 'components/sec2.html')
add('sec3', 'components/sec3.html')
add('sec4', 'components/sec4.html')
add('sec5', 'components/sec5.html')
add('3d_waffle', 'components/3d_waffle.html')




