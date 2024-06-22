console.log('connected');
function add(elementId, path) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

add('nav', 'components/nav.html');
add('main', 'components/main.html')
add('sec2', 'components/sec2.html')
add('sec3', 'components/sec3.html')


