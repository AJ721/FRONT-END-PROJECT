let cityText = document.getElementById('cityText');
let dropDownArrow = document.getElementById('dropDownArrow');
let recommendations = document.getElementById('recommendations');
let footerLanguageText = document.getElementById('footerLanguageText');
let languages = document.getElementById('languages');


let emailRadio = document.getElementById('email');
let phoneRadio = document.getElementById('phone');
let form1 =  document.getElementById('form1');
let form2 =  document.getElementById('form2');
let invalid1 = document.getElementById('invalid1');
let invalid2 = document.getElementById('invalid2');
let eNInput = document.getElementById('eNInput');
let eNInputText = document.getElementById('eNInputText');
let eNButton = document.getElementById('eNButton');
let pNumInput = document.getElementById('pNumInput');
let phoneNumber = document.getElementById('phoneNumber');


document.addEventListener('DOMContentLoaded', function(){
    //emailRadio.checked = true;
    cityText.onfocus = function(){
        recommendations.style.visibility = "visible";
        dropDownArrow.className = 'dArrow open';
    }
    cityText.onblur = function(){
        recommendations.style.visibility = 'hidden';
        dropDownArrow.className = 'dArrow';
    } 

    eNInput.onfocus = function(){
        placeHolderChanges(eNInput, eNInputText, '1px solid rgb(17, 145, 153)', 'rgb(17, 145, 153)', '30px', '0.5s ease', 'absolute');
        eNInputText.style.marginTop = '-6px';
        eNInputText.style.fontSize = '12px';
    }
    
    emailRadio.onclick = function(){
        emailRadio.checked = true;
        hideOrDisplay(form1, 'visible');
        hideOrDisplay(form2, 'hidden');
        invalid2.style.display = 'none';  
        console.log('emailClicked');
        placeHolderChanges(eNInput, eNInputText, '1px solid rgb(177, 177, 177)', 'rgb(150, 150, 150)', '35px', '0.5s ease', 'absolute')
        eNInputText.style.marginTop = '15px';
        eNInputText.style.fontSize = '17px';  

        eNButton.onclick = function(){
            if(emailRadio.checked === true && eNInput.value.length <= 0){
                placeHolderChanges(eNInput, eNInputText, '1px solid red', 'rgb(255, 75, 75)', '30px', '0.5s ease', 'absolute');
                eNInputText.style.marginTop = '-6px';
                eNInputText.style.fontSize = '12px';  
                invalid1.style.display = 'block';
                console.log('emailBlank');
            }
        }
    }   
    phoneRadio.onclick = function(){
        phoneRadio.checked = true;
        hideOrDisplay(form2, 'visible');
        hideOrDisplay(form1, 'hidden');
        invalid1.style.display = 'none';
        console.log('phoneClicked');
        placeHolderChanges(phoneNumber, cCodeText, '1px solid rgb(177, 177, 177)', 'rgb(150, 150, 150)', '30px', '0.5s ease', 'absolute')
        

        eNButton.onclick = function(){
            if(phoneRadio.checked === true && eNInput.value.length <= 0){
                placeHolderChanges(phoneNumber, cCodeText, '1px solid red', 'rgb(255, 75, 75)', '30px', '0.5s ease', 'absolute');
                invalid2.style.display = 'block';
            }
        }
    }
});

function placeHolderChanges(elm1, elm2, border, color, width, tran, pos){
        elm1.style.border = border;
        elm2.style.color = color;
        elm2.style.width = width;
        elm2.style.transition = tran;
        elm2.style.position = pos;
}

function hideOrDisplay(element, opt){
    element.style.visibility = opt;
}





