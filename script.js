let items = [
    "assets/images/ice-landscape.jpg",
    "assets/images/city-night.jpg",
    "assets/images/clouds.jpg",
    "assets/images/bird.jpg",
    "assets/images/above-hurrican.jpg",
    "assets/images/water-mountain.jpg",
    "assets/images/duck-water.jpg",
    "assets/images/man-fishing.jpg",
    "assets/images/bird-stones.jpg",
    "assets/images/jaguar.jpg",
    "assets/images/top-mountain.jpg",
    "assets/images/iced-tree.jpg"
];


const imagesRef = document.getElementById('images');
const dialogRef = document.getElementById('dialog');
const dialogTitelRef = document.getElementById('dialog-titel');
const dialogImgRef = document.getElementById('dialog-img');
const closeDialogRef = document.getElementById('close-dialog');
const prevImgRef = document.getElementById('prev-img');
const nextImgRef = document.getElementById('next-img');
const counterRef = document.getElementById('counter');

let currentIndex = 0;

function init() {
    render();
}

function render() {
    for (let i = 0; i < items.length; i = i + 1) {
        imagesRef.innerHTML += templateImg(i);
    }
}

function templateImg(i) {
    const altText = items[i].split('/').pop().split('.')[0];
    return `<img class='myImages' src="${items[i]}" alt="${altText}" tabindex="0" role="button">`;
}

imagesRef.addEventListener('click', function (event) {
    if (event.target.classList.contains('myImages')) {
        openImageFromEvent(event);
    }
});

imagesRef.addEventListener('keydown', function (event) {
    if (event.target.classList.contains('myImages') && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        openImageFromEvent(event);
    }
});

function openImageFromEvent(event) {
    const clickedSrc = event.target.src;
    currentIndex = items.findIndex(item => clickedSrc.includes(item));
    openDialog();
}

closeDialogRef.addEventListener('click', function () {
    dialogRef.close();
});

prevImgRef.addEventListener('click', function () {
    currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    updateDialog();
});

nextImgRef.addEventListener('click', function () {
    currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    updateDialog();
});

function openDialog() {
    updateDialog();
    dialogRef.showModal();
    document.body.style.overflow = 'hidden';
}

function updateDialog() {
    const altText = items[currentIndex].split('/').pop().split('.')[0];
    dialogImgRef.src = items[currentIndex];
    dialogImgRef.alt = altText;
    dialogTitelRef.textContent = altText;
    counterRef.textContent = `${currentIndex + 1}/${items.length}`;
}

dialogRef.addEventListener('close', function () {
    document.body.style.overflow = '';
});

dialogRef.addEventListener('click', function (event) {
    if (event.target === dialogRef) {
        dialogRef.close();
    }
});

init();
