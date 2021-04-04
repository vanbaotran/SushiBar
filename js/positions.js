let docW = document.body.width;
let topLineH= document.querySelector('.topLine').getBoundingClientRect().height;
let titleH = document.querySelector('#name').getBoundingClientRect().height;
//DOM - Ingredients: click on ingredient to move the Chef and pick up item;
var dish = document.querySelector('.dst.dish');
var salmon = document.querySelector('.dst.salmon');
var rice = document.querySelector('.dst.rice');
var seaweed = document.querySelector('.dst.seaweed');
var cucumber = document.querySelector('.dst.cucumber');
var trashCan = document.querySelector('.dst.trashCan');


//define position for each destination
function ingPosition(item){
    var posXDst;
    if (docW>1130){posXDst= 1010 + (docW-1130)/2;} else {posXDst=1010;}
    var posYDst = item.getBoundingClientRect().y; 
    var dstHeight = item.getBoundingClientRect().height;     
    const dstx = posXDst - chef.w - 20;
    const dsty = posYDst - topLineH - titleH + dstHeight/2 - chef.h/2 -20;
    return {dstx,dsty}
}
function tablePosition(){
    var posYDst = H/2; 
    const dstx = W/2-chef.w/2;
    const dsty = posYDst - chef.h/2;
    return {dstx,dsty}
}
function pickUpPointPosition(){
    var posXDst= 0;
    var posYDst = pickUpPoint.getBoundingClientRect().y; 
    var dstHeight = pickUpPoint.getBoundingClientRect().height;  
    var dstWidth = pickUpPoint.getBoundingClientRect().width;
    const dstx = posXDst + dstWidth;
    const dsty = posYDst  - topLineH - titleH + dstHeight/2 - chef.h/2;
    return {dstx,dsty}
}
//move to the prepTable
function handleClickMiddle(){
    var posYDst = H/2; 
    const dstx = W/2-chef.w/2;
    const dsty = posYDst - chef.h/2;
    chef.moveTo(dstx,dsty);
}
//move to the pickUpPoint
function handleClickLeft(){
    var posXDst= 0;
    var posYDst = pickUpPoint.getBoundingClientRect().y; 
    var dstHeight = pickUpPoint.getBoundingClientRect().height;  
    var dstWidth = pickUpPoint.getBoundingClientRect().width;
    const dstx = posXDst + dstWidth;
    const dsty = posYDst  - topLineH - titleH + dstHeight/2 - chef.h/2;
    chef.moveTo(dstx,dsty);
    // chef.deliver();
}
//move to the ingredients
function handleClickRight (event){
    var posXDst;
    if (docW>1130){posXDst= 1010 + (docW-1130)/2;} else {posXDst=1010;}
    // var posXDst= event.target.getBoundingClientRect().x;
    var posYDst = event.target.getBoundingClientRect().y; 
    var dstHeight = event.target.getBoundingClientRect().height;   
    const dstx = posXDst - chef.w - 20;
    const dsty = posYDst - topLineH - titleH + dstHeight/2 - chef.h/2 -20;
    chef.moveTo(dstx,dsty);
}   
    