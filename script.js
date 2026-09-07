let items = ["assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg",
    "assets/images/img5.jpg",
    "assets/images/img6.jpg",
    "assets/images/img7.jpg",
    "assets/images/img8.jpg",
    "assets/images/img9.jpg",
    "assets/images/img10.jpg",
    "assets/images/img11.jpg",
    "assets/images/img12.jpg"];


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
    document.body.style.overflow = 'hidden';
}
function updateDialog() {
    dialogImgRef.src = items[currentIndex];
    dialogTitelRef.textContent = items[currentIndex].split('/').pop().split('.')[0];
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
