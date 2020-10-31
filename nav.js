function change(index) {
    const p = document.querySelector('#show');
    console.log('p', p);
    switch (index) {
        case 1:
            p.innerHTML = '<iframe width=100% height=100% src="./109-1-w01-06/w01-intro_pokemon/intro.html" />';
            break;
        case 2:
            p.innerHTML = '<iframe width=100% height=100% src="./109-1-w01-06/w01-intro_pokemon/pokemon.html">';
            break;
        case 3:
            p.innerHTML = '<iframe width=100% height=100% src="./109-1-w01-06/w02-imageGallery/imageGallery.html" />';
            break;
        case 4:
            p.innerHTML = '<iframe width=100% height=100% src="./109-1-w01-06/w02-blog/blog.html" />';
            break;
        case 5:
            p.innerHTML = '<iframe width=100% height=100% src="./109-1-w01-06/w03-div/div.html" />';
            break;
        case 6:
            p.innerHTML = '<iframe width=100% height=100% src="./109-1-w01-06/w05-bootstrap/1091-1A-demo-id/w05-bootstrap/w03-div-tku60/div_tku60.html" />';
            break;
        case 7:
            p.innerHTML = '<iframe width=100% height=100% src="./109-1-w01-06/w06-ms-clone/index.html" />';
            break;
    }
}