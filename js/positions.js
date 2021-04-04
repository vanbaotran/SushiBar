//DOM - Ingredients: click on ingredient to move the Chef and pick up item;
var dish = document.querySelector('.dst.dish');
var salmon = document.querySelector('.dst.salmon');
var rice = document.querySelector('.dst.rice');
var seaweed = document.querySelector('.dst.seaweed');
var cucumber = document.querySelector('.dst.cucumber');
var trashCan = document.querySelector('.dst.trashCan');


//define position for each destination
function ingPosition(item){
    var posXDst= item.getBoundingClientRect().x;
    var posYDst = item.getBoundingClientRect().y; 
    var dstHeight = item.getBoundingClientRect().height;     
    const dstx = posXDst - chef.w - 0.35*W;
    const dsty = posYDst + dstHeight/2 - chef.h/2;
    return {dstx,dsty}
}
function tablePosition(){
    var posYDst = middleSection.getBoundingClientRect().y; 
    const dstx = W/2-chef.w/2;
    const dsty = posYDst + chef.h;
    return {dstx,dsty}
}
function pickUpPointPosition(){
    var posXDst= pickUpPoint.getBoundingClientRect().x;
    var posYDst = pickUpPoint.getBoundingClientRect().y; 
    var dstHeight = pickUpPoint.getBoundingClientRect().height;  
    var dstWidth = pickUpPoint.getBoundingClientRect().width;  
    const dstx = posXDst + dstWidth - W*0.35;
    const dsty = posYDst + dstHeight/2 - chef.h/2;
    return {dstx,dsty}
}
//move to the prepTable
function handleClickMiddle(event){
    var posYDst = event.target.getBoundingClientRect().y; 
    const dstx = W/2-chef.w/2;
    const dsty = posYDst + chef.h;
    chef.moveTo(dstx,dsty);
}
//move to the pickUpPoint
function handleClickLeft(){
    var posXDst= pickUpPoint.getBoundingClientRect().x;
    var posYDst = pickUpPoint.getBoundingClientRect().y; 
    var dstHeight = pickUpPoint.getBoundingClientRect().height;  
    var dstWidth = pickUpPoint.getBoundingClientRect().width;
    const dstx = posXDst + dstWidth - W*0.35;
    const dsty = posYDst + dstHeight/2 - chef.h/2;
    chef.moveTo(dstx,dsty);
    // chef.deliver();
}
//move to the ingredients
function handleClickRight (event){
    var posXDst= event.target.getBoundingClientRect().x;
    var posYDst = event.target.getBoundingClientRect().y; 
    var dstHeight = event.target.getBoundingClientRect().height;   
    const dstx = posXDst - chef.w - 0.35*W;
    const dsty = posYDst + dstHeight/2 - chef.h/2;
    chef.moveTo(dstx,dsty);
}   
    