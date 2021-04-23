let btns = document.getElementsByClassName("navButton");
selectNav(btns, ' active');

let fixedDiv = document.getElementById('fixedDiv');
let buttonsContainer = document.getElementById('buttonsContainer');
let navButtonContainer = document.getElementById('navButtonContainer');
let overview = document.getElementById('overview');
window.onscroll = () => {
    if(window.scrollY >= 500){
        fixedDiv.style.position = 'fixed';
        fixedDiv.style.top = '0';
        document.getElementById('spacingDiv').style.position = 'relative';
        buttonsContainer.style.opacity = '0';
        navButtonContainer.style.transform = 'translateY(-70px)';     
    }
    else if(window.scrollY <= 500){
        fixedDiv.style.position = 'sticky';
        document.getElementById('spacingDiv').style.position = 'absolute';
        navButtonContainer.style.transform = 'translateY(0px)';
        buttonsContainer.style.opacity = '1';
    }
}

let filter =  document.getElementsByClassName('filter');
selectNav(filter, ' selected');


function selectNav(mainClassName, subClassName, content){
    let actualName = subClassName.trim();
    let check;
    if(arguments.length > 2)
        check = true;
    else 
        check = false;
    for(let i = 0; i < mainClassName.length; i++){
        mainClassName[i].addEventListener('click', function(){
            let cName = document.getElementsByClassName(actualName);
            cName[0].className = cName[0].className.replace(subClassName, "");
            if(check === true)
                content[i].className += subClassName;
            else
                this.className += subClassName;
        });
    }
}


let content = document.getElementsByClassName('content');
selectNav(btns, ' show', content);
/*for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        let show = document.getElementsByClassName('show');
        show[0].className = show[0].className.replace(' show', "");
        content[i].className += ' show';
    })
}*/