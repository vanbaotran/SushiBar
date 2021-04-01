const menu =['maki','kappamaki','sashimi'];
const ingredients = ['seaweed','cucumber','rice','salmon','dish'];
let onHand='';
let prepTable=[];
let orders=[];
let delivered=[];
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

//the class Chef (x,y,w,h), drawChef(), moveTo(position), pickIng(position), drop(position)
class Chef{
    constructor(){
        const img = document.createElement('img');  
        const pickDish = document.createElement('img');
        const pickSalmon = document.createElement('img');
        const pickCucumber = document.createElement('img');
        const pickSeaweed = document.createElement('img');
        const pickRice = document.createElement('img');
        const pickSashimiDish = document.createElement('img');
        const pickMakiDish = document.createElement('img');
        const pickKappaDish = document.createElement('img');
        pickDish.src="images/chefwDish.png"
        pickRice.src="images/chefwRice.png"
        pickSalmon.src="images/chefwSalmon.png"
        pickSeaweed.src="images/chefwSeaweed.png"
        pickCucumber.src="images/chefwCucumber.png"
        pickMakiDish.src="images/chefwMakiDish.png"
        pickKappaDish.src="images/chefwKappaDish.png"
        pickSashimiDish.src="images/chefwSashimiDish.png"  
        this.speedX=0;
        this.speedY=0;
        this.destX=undefined;
        this.destY=undefined;
        this.pickDish=pickDish;
        this.pickSalmon=pickSalmon;
        this.pickCucumber=pickCucumber;
        this.pickRice=pickRice;
        this.pickSeaweed=pickSeaweed;
        this.pickMakiDish=pickMakiDish;
        this.pickKappaDish=pickKappaDish;
        this.pickSashimiDish=pickSashimiDish;
        img.onload = () => {
            this.img = img
            const imgRatio = img.naturalWidth/img.naturalHeight;
            this.w = 150;
            this.h = 150/imgRatio;
            this.x = W/2-this.w/2;
            this.y = H/2 - this.h/2;
        } 
        
        img.src="images/chefEdited.png"
        
    }
    moveTo(x,y){
        this.destX=x;
        this.destY=y;        
    }
    update(){
        const deltaX = this.destX - this.x;
        const deltaY = this.destY - this.y;
        if (Math.abs(deltaX)>3){
            if (deltaX < 0){
                this.speedX=-5;
            } else {
                this.speedX=5;
            }  
            this.x+=this.speedX;
        } else {
            this.speedX=0;
            if (Math.abs(deltaY)>3){
                if(deltaY<0){
                    this.speedY=-5;
                } else {
                    this.speedY=5;
                }
                this.y+=this.speedY; 
            } else {
                this.speedY=0   
            }
        }
    }
    draw(){
        if (!this.img) return
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h); 
    }
    pickItem(item){
        
        switch(item){
            case 'dish':
            if (!this.pickDish) return
            ctx.drawImage(this.pickDish,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'salmon':
            if (!this.pickSalmon) return
            ctx.drawImage(this.pickSalmon,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'seaweed':
            if (!this.pickSeaweed) return
            ctx.drawImage(this.pickSeaweed,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'rice':
            if (!this.pickRice) return
            ctx.drawImage(this.pickRice,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'cucumber':
            if (!this.pickCucumber) return
            ctx.drawImage(this.pickCucumber,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'maki':
            if (!this.pickMakiDish) return
            ctx.drawImage(this.pickMakiDish,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'kappamaki':
            if (!this.pickKappaDish) return
            ctx.drawImage(this.pickKappaDish,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'sashimi':
            // if (!this.pickMakiDish) return
            // ctx.drawImage(this.pickMakiDish,chef.x,chef.y,chef.w,chef.h)
            ctx.drawImage(this.pickSashimiDish,chef.x,chef.y,chef.w,chef.h);
            break;
        }
    }
    deliver(){
        checkOrders();
    }
}


//DOM - Ingredients: click on ingredient to move the Chef and pick up item;
var dish = document.querySelector('.dst.dish');
var salmon = document.querySelector('.dst.salmon');
var rice = document.querySelector('.dst.rice');
var seaweed = document.querySelector('.dst.seaweed');
var cucumber = document.querySelector('.dst.cucumber');
var trashCan = document.querySelector('.dst.trashCan');
const chef = new Chef ();
//define position for each destination
function ingPosition(item){
    var posXDst= item.getBoundingClientRect().x;
    var posYDst = item.getBoundingClientRect().y; 
    var dstHeight = item.getBoundingClientRect().height;     
    const dstx = posXDst - chef.w - 150;
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
    var dstHeight =  pickUpPoint.getBoundingClientRect().height;  
    var dstWidth =  pickUpPoint.getBoundingClientRect().width;  
    const dstx = posXDst + dstWidth - 150;
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
function handleClickLeft(event){
    var posXDst= event.target.getBoundingClientRect().x;
    var posYDst = event.target.getBoundingClientRect().y; 
    var dstHeight = event.target.getBoundingClientRect().height;  
    var dstWidth = event.target.getBoundingClientRect().width;  
    const dstx = posXDst + dstWidth - 150;
    const dsty = posYDst + dstHeight/2 - chef.h/2;
    chef.moveTo(dstx,dsty);
    chef.deliver();
}
//move to the ingredients
function handleClickRight (event){
    var posXDst= event.target.getBoundingClientRect().x;
    var posYDst = event.target.getBoundingClientRect().y; 
    var dstHeight = event.target.getBoundingClientRect().height;   
    const dstx = posXDst - chef.w - 150;
    const dsty = posYDst + dstHeight/2 - chef.h/2;
    chef.moveTo(dstx,dsty);
}   
    
//change image when the chef move nearby the ing or the prepTable to show that he is holding something on his hands
function onHandStatus(){
    if (onHand==='dish'){
        chef.pickItem('dish')
    };
    if (onHand==='salmon'){
        chef.pickItem('salmon')
    }
    if (onHand==='rice'){
        chef.pickItem('rice')
    }
    if (onHand==='cucumber'){
        chef.pickItem('cucumber')
    }
    if (onHand===''){
        chef.pickItem('trashCan')
    }
    if (onHand==='seaweed'){
        chef.pickItem('seaweed')
    }
    if (onHand==='maki'){
        chef.pickItem('maki');
        clearTheTable();
    }
    if (onHand==='kappamaki'){
        chef.pickItem('kappamaki');
        clearTheTable();
    }
    if (onHand==='sashimi'){
        chef.pickItem('sashimi');
        clearTheTable();
    }
}
//pick ing and add into the Table 
function addIngToTable(ing){
    if (Math.abs(chef.x-tablePosition().dstx)<1 && Math.abs(chef.y-tablePosition().dsty)<3  && onHand===ing){
        addIngredient();
    }     
}
// const sound = new Audio("https://res.cloudinary.com/dtqr57xyj/video/upload/v1615832640/ES_Whip_Whoosh_2_-_SFX_Producer.mp3")
// sound.loop = false;
// document.body.appendChild(sound);


var middleSection = document.querySelector('.prepTable')
var pickUpPoint = document.querySelector('.pickUpPoint');
var dsts = document.querySelectorAll('.dst');
dsts.forEach(dst => dst.addEventListener('click',handleClickRight));
pickUpPoint.addEventListener('click',handleClickLeft);
middleSection.addEventListener('click',handleClickMiddle);
middleSection.addEventListener('dblclick',rollIt);
document.querySelector('.trashCan').addEventListener('dblclick',clearTheTable);

function draw(){
    //function executee toutes les 16 miliseconds
    ctx.clearRect(0,0,1750,900);
    chef.update();
    chef.draw();
    addOrders();
    onHandStatus();  
    addIngToTable(onHand);
    takeTheDish();
}
document.querySelector('button').onclick=function(){
    document.querySelector('button').remove();
    function animLoop(){
        draw()
        requestAnimationFrame(animLoop)
    }
    animLoop();
}
