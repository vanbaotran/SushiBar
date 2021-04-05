
// //pick item when clicked on an ing
document.querySelector('.ing .dish').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(dish).dstx)<3 && Math.abs(chef.y-ingPosition(dish).dsty)<3 && onHand.length===0) {playPickUpSound();onHand='dish'};
})
document.querySelector('.ing .salmon').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(salmon).dstx)<3 && Math.abs(chef.y-ingPosition(salmon).dsty)<3 && onHand.length===0) {playPickUpSound();onHand='salmon';}
});
document.querySelector('.ing .rice').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(rice).dstx)<3 && Math.abs(chef.y-ingPosition(rice).dsty)<3 && onHand.length===0) {playPickUpSound();onHand='rice';}
});
document.querySelector('.ing .seaweed').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(seaweed).dstx)<3 && Math.abs(chef.y-ingPosition(seaweed).dsty)<3 && onHand.length===0) {playPickUpSound();onHand='seaweed';}
});
document.querySelector('.ing .cucumber').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(cucumber).dstx)<3 && Math.abs(chef.y-ingPosition(cucumber).dsty)<3 && onHand.length===0) {playPickUpSound();onHand='cucumber';}
});

document.querySelector('.ing .trashCan').addEventListener('click',function(){
    if (Math.abs(chef.x-ingPosition(trashCan).dstx)<3 && Math.abs(chef.y-ingPosition(trashCan).dsty)<3  && onHand.length!==0) {playTrashSound();onHand='';}
    if (Math.abs(chef.x-ingPosition(trashCan).dstx)<3 && Math.abs(chef.y-ingPosition(trashCan).dsty)<3  && menu.includes.onHand){playTrashSound();onHand='';prepFood=[]}
});


    
function takeTheDish(){
    if (Math.abs(chef.x-tablePosition().dstx)<3 && Math.abs(chef.y-tablePosition().dsty)<3  && onHand==='' && preparedDish==='maki'){
        onHand="maki";
    }
    if (Math.abs(chef.x-tablePosition().dstx)<3 && Math.abs(chef.y-tablePosition().dsty)<3  && onHand==='' && preparedDish==='kappamaki'){
        onHand="kappamaki";
    }
    if (Math.abs(chef.x-tablePosition().dstx)<3 && Math.abs(chef.y-tablePosition().dsty)<3  && onHand==='' && preparedDish==='sashimi'){
        onHand="sashimi";
    }
}
let score=0;
const turnOver = document.querySelector('.turnOver');

function deliver(){
    if (Math.abs(chef.x-pickUpPointPosition().dstx)<3 && Math.abs(chef.y-pickUpPointPosition().dsty)<3  && orders.includes(onHand)){
        delivered.push(onHand);
        onHand='';
        const justDelivered=delivered[delivered.length-1];
        orders.splice(orders.indexOf(justDelivered),1);
        score+=15;
        turnOver.innerHTML=score;
        prepFood=[];
        dishDelivered= document.createElement('img')
        dishDelivered.className='dishDelivered'
        //remove order from the orders when it is the right order
        if (justDelivered==='maki'){
            document.querySelector('.orderMaki').remove();
            dishDelivered.src='images/maki-dish.png'
        }
        if (justDelivered==='kappamaki'){
            document.querySelector('.orderKappa').remove()
            dishDelivered.src='images/kappamaki-dish.png'
        }
        if (justDelivered==='sashimi'){
            document.querySelector('.orderSashimi').remove()
            dishDelivered.src='images/sashimi-dish.png'
        }
        pickUpPoint.appendChild(dishDelivered);//remove the delivered dish from the pickUp point after 1s 
        setTimeout(() => {
            document.querySelector('.dishDelivered').remove()
        }, 1000);
        congrats();
        console.log(congrats());
        playCashSound();
    }  
    if (orders.includes(onHand)===false && preparedDish!=='' && onHand!==''){
        instructions.innerHTML='This dish was not ordered. It needs to go to the bin 🗑 Make sure to clear the table by using the bin';
        if (onHand='' && prepFood===[]){
            instructions.innerHTML='Welcome to Neko Sushi! We have the best sushi in town';
        }
    }
}