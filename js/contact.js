let textFields = document.getElementsByClassName('textFields');
let placeholderText = document.getElementsByClassName('placeholderText');
let placeholder = document.getElementsByClassName('placeholder');


function textChanges(pos, temp){
    if(temp === true){
        placeHolderChanges(textFields[pos], '1px solid rgb(17, 145, 153)', placeholder[pos], 'rgb(17, 145, 153)', 'auto', '1s ease', 'relative', '20px', '12px', '-20px');
    }
    if(temp === false){
        placeHolderChanges(textFields[pos], '1px solid rgb(207, 207, 207)', placeholder[pos], ' rgb(156, 156, 156)', 'auto', '1s ease', 'relative', 'auto', '18px', '0px');
    }
}
        

function placeHolderChanges(elm1, border, elm2, color, width, tran, pos, height, fSize, mTop){
    elm1.style.border = border;
    elm2.style.color = color;
    elm2.style.width = width;
    elm2.style.transition = tran;
    elm2.style.position = pos;
    elm2.style.height = height;
    elm2.style.fontSize = fSize;
    elm2.style.marginTop = mTop;
}