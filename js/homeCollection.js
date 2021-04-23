                                                                    /*Trending Page JS code*/
let cardBookmark = document.getElementsByClassName('cardBookmark');
let cards = document.getElementsByClassName('cards')
function displayBookmark(num){
    cardBookmark[num].className = 'cardBookmark open';
}
function disappearBoorkmark(num){
    cardBookmark[num].className = 'cardBookmark';
}