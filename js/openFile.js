function openFile(file){                                            /*Open Other HTML file*/
    window.open(file, "_self");
}
let optionDiv = document.getElementsByClassName('optionDiv');
let fOption = document.getElementsByClassName('fOption');
let check = true;
let last = 0;

for(let i = 0; i < fOption.length; i++){
    fOption[i].addEventListener('click', function(){
        optionDiv[last].style.opacity = '0';
        if(check === true){
            optionDiv[i].style.opacity = '1';
            check = false;
        }
        else{
            optionDiv[i].style.opacity = '0';
            check = true
        }
        last = i;
    })
}