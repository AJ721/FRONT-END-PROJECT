let menu = document.getElementsByClassName('menu');

function changeColor(num){
    menu[num].className = 'menu open';
}
function changeColorBack(num){
    menu[num].className = 'menu';
}
let topContainer = document.getElementById('topContainer');
window.onscroll = () => {
    if(window.scrollY >= 200){
        topContainer.style.top = '0px';
        topContainer.style.position = 'fixed'; 
    }
    else if(window.scrollY <= 200){
        topContainer.style.position = 'relative';
    }
}