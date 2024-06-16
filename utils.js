console.log('connected');
function add(elementId, path) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

add('banner', 'components/banner.html');

