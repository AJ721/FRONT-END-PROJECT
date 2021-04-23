let bannerNavButton = document.getElementsByClassName('bannerNavButton');
let topNavButtons = document.getElementsByClassName('topNavButtons');
let shortForm = document.getElementsByClassName('shortForm');
let fullForm = document.getElementsByClassName('fullForm');
let benefits = document.getElementsByClassName('benefits');
let current = document.getElementsByClassName('current');
let content = document.getElementsByClassName('content');
let map = document.getElementsByClassName('map');

let worldCounting = document.getElementById('worldCounting');
let worldPlaces = document.getElementById('worldPlaces');
let banner = document.getElementById('banner');


let len = content.length - 1;
let currentPos = 0;
let lastMove = 0;
let move = 0;
let temp = 0;


/*for(let i = 0; i < topNavButtons.length; i++){
    topNavButtons[i].addEventListener('click', function(){
        let active = document.getElementsByClassName('active');
        active[0].className = active[0].className.replace(' active', "");
        this.className += ' active';
    });
}*/
document.addEventListener('DOMContentLoaded', function(){
    selectNav(topNavButtons, ' active');

    selectNav(benefits, ' display');

    for(let i = 0; i < bannerNavButton.length; i++){                                //triggered when user click on navButton below the banner
        bannerNavButton[i].addEventListener('click', function(){
            current[0].className = current[0].className.replace(' current', "");
            this.className += ' current';
            console.log(i);
            if(temp > i)
                changeBanner(-1, i)
            else
                changeBanner(1, i);
            temp = i;
        });
    }

    map[0].onmouseover = () => {
        worldCounting.style.opacity = '0';
        worldPlaces.style.opacity = '1';
    };
    map[0].onmouseout = () => {
        worldCounting.style.opacity = '1';
        worldPlaces.style.opacity = '0';
    };
    
}); 

function selectNav(mainClassName, subClassName){
    let actualName = subClassName.trim();
    for(let i = 0; i < mainClassName.length; i++){
        mainClassName[i].addEventListener('click', function(){
            let cName = document.getElementsByClassName(actualName);
            cName[0].className = cName[0].className.replace(subClassName, "");
            this.className += subClassName;
        });
    }
}

function changeBanner(n, pos){                          //onlcick for slider buttons
    if(arguments.length === 1){
        if(n === -1){                                   //leftSlider Button
            move = lastMove + 1100;
            if(move > 0)
                move = len * (-1100); 
        }
        if(n === 1){                                    //rightSlider Button
            move = lastMove - 1100;
            if(move < len * (-1100))
                move = 0;
        }
    }
    if(arguments.length === 2){
        move = pos * -1100;
    }
    lastMove = move;
    currentPos = move / -1100;
    banner.style.transform = 'translateX(' + move + 'px)';
    current[0].className = current[0].className.replace(' current', "");
    bannerNavButton[currentPos].className += ' current';
    for(let i = 0; i < shortForm.length; i++){
        shortForm[i].style.opacity = '1';
        fullForm[i].style.opacity = '0';
    }
    shortForm[currentPos].style.opacity = '0';
    fullForm[currentPos].style.opacity = '1';
}