const pickSalmon = document.createElement('img');
const pickCucumber = document.createElement('img');
const pickSeaweed = document.createElement('img');
const pickRice = document.createElement('img');
const pickSashimiDish = document.createElement('img');
const pickMakiDish = document.createElement('img');
const pickKappaDish = document.createElement('img');
const pickDish = document.createElement('img');
pickDish.src="images/dish.png"
pickRice.src="images/chefwRice.png"
pickSalmon.src="images/chefwSalmon.png"
pickSeaweed.src="images/chefwSeaweed.png"
pickCucumber.src="images/chefwCucumber.png"
pickMakiDish.src="images/chefwMakiDish.png"
pickKappaDish.src="images/chefwKappaDish.png"
pickSashimiDish.src="images/chefwSashimiDish.png"
//pick item when clicked on an ing
document.querySelector('.ing .dish').addEventListener('click',function(){
     onHand+='dish';
})
document.querySelector('.ing .salmon').addEventListener('click',function(){
    onHand+='salmon';
});
document.querySelector('.ing .rice').addEventListener('click',function(){
    onHand+='rice';
});
document.querySelector('.ing .seaweed').addEventListener('click',function(){
    onHand+='seaweed';
});
document.querySelector('.ing .cucumber').addEventListener('click',function(){
    onHand+='cucumber';
});
document.querySelector('.ing .trashCan').addEventListener('click',clearTheTable);


function updateHandStatus(){
    if (onHand.length === 0){
        switch(onHand){
            case 'dish':
            drawImage(pickDish,chef.x,chef.y+20,chef.w,chef.h)
            break;
            case 'salmon':
            drawImage(pickSalmon,chef.x,chef.y,chef.w,chef.h);
            break;
        }
    }
}