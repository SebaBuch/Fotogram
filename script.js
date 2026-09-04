let items[];
const imagesRef = document.getElementById('images');

function init(){
    render();
}

function render(){
    for(let i = 0; i<items.length; i=i+1){
         imagesRef.innerHTML += templateLi(i);
    }
}

function templateLi(i){
    return `<img class='myImages'>${items[i]}</img>`;
}
