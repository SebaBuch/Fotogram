let items = ["assets/images/img1.png",
    "assets/images/img2.png",
    "assets/images/img3.png",
    "assets/images/img4.png",
    "assets/images/img5.png",
    "assets/images/img6.png",
    "assets/images/img7.png",
    "assets/images/img8.png",
    "assets/images/img9.png",
    "assets/images/img10.png",
    "assets/images/img11.png",
    "assets/images/img12.png"];


const imagesRef = document.getElementById('images');

function init() {
    render();
}

function render() {
    for (let i = 0; i < items.length; i = i + 1) {
        imagesRef.innerHTML += templateImg(i);
    }
}

function templateImg(i) {
    return `<img class='myImages' src="${items[i]}">`;
}

init();
