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
add('sec4', 'components/sec4.html')
add('sec5', 'components/sec5.html')




