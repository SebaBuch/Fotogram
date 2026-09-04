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
    return `<img class='myImages' src="${items[i]}">`;
}

imagesRef.addEventListener('click', function (event) {
    if (event.target.classList.contains('myImages')) {
        const clickedSrc = event.target.src;
        currentIndex = items.findIndex(item => clickedSrc.includes(item));
        openDialog();
    }
});

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
}
function updateDialog() {
    dialogImgRef.src = items[currentIndex];
    dialogTitelRef.textContent = items[currentIndex].split('/').pop().split('.')[0];
    counterRef.textContent = `${ currentIndex + 1}/${items.length}`;
}

init();
