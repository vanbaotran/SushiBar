
// //pick item when clicked on an ing
document.querySelector('.ing .dish').addEventListener('click',function(){
    if (onHand.length===0 && Math.abs(chef.x-ingPosition(dish).dstx)<1 && Math.abs(chef.y-ingPosition(dish).dsty)<3) {onHand+='dish'};
})
document.querySelector('.ing .salmon').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(salmon).dstx)<1 && Math.abs(chef.y-ingPosition(salmon).dsty)<3 && onHand.length===0) {onHand+='salmon';}
});
document.querySelector('.ing .rice').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(rice).dstx)<1 && Math.abs(chef.y-ingPosition(rice).dsty)<3 && onHand.length===0) {onHand+='rice';}
});
document.querySelector('.ing .seaweed').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(seaweed).dstx)<1 && Math.abs(chef.y-ingPosition(seaweed).dsty)<3 && onHand.length===0) {onHand+='seaweed';}
});
document.querySelector('.ing .cucumber').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(cucumber).dstx)<1 && Math.abs(chef.y-ingPosition(cucumber).dsty)<3 && onHand.length===0) {onHand+='cucumber';}
});

document.querySelector('.ing .trashCan').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(trashCan).dstx)<1 && Math.abs(chef.y-ingPosition(trashCan).dsty)<3  && onHand.length!==0) {onHand='';}
});
// middleSection.addEventListener('click',function(){
    
function takeTheDish(){
    if (Math.abs(chef.x-tablePosition().dstx)<1 && Math.abs(chef.y-tablePosition().dsty)<3  && onHand==='' && preparedDish==='maki'){
        onHand+="maki";
        console.log('why')
    }
}