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


//display orders: pick 20 random orders, 3 at a time, when there are less than 3 orders, push 1

// when the order is served, remove that order from array Orders and add another one 


//the class Chef (x,y,w,h), drawChef(), moveTo(position), pickIng(position), drop(position)
class Chef{
    constructor(){
        const img = document.createElement('img');    
        this.speedX=0;
        this.speedY=0;
        img.onload = () => {
            this.img = img
            const imgRatio = img.naturalWidth/img.naturalHeight;
            this.w = 300;
            this.h = 300/imgRatio;
            this.x = W/2-this.w/2;
            this.y = H/2 - this.h/2;
        } 
        img.src="images/chef.png"
        
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
    draw(){
        if (!this.img) return
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h); 
    }
    deliver(dish){
        this.update()
        this.draw(this.img,this.x,this.y,this.w,this.h);
        delivered.push(dish);
    }
}


//DOM - Ingredients: click on ingredient to move the Chef and pick up item;

const chef = new Chef ();

let myInterval;
function moveTo (event){
      clearInterval(myInterval);
      myInterval = setInterval(() => {
        chef.update();
        if (chef.x < event.target.getBoundingClientRect().x - 250) {
          chef.speedX = 3;
        } else {
          chef.speedX = 0;
        }
        if (
          Math.abs(Math.floor(chef.y - event.target.getBoundingClientRect().y))>10 &&
          chef.x >= event.target.getBoundingClientRect().x - 250
        ) {
          chef.speedY = (Math.floor(chef.y) > Math.floor(event.target.getBoundingClientRect().y)) ? -1 : 1;
          console.log('di doc',chef.speedY)
          console.log('vi tri chef', chef.y, 'vi tri click', event.target.getBoundingClientRect().y);
          console.log(Math.abs(Math.floor(chef.y - event.target.getBoundingClientRect().y)) > 0)
        } else {
          chef.speedY = 0;
        }
        // if (chef.x > event.target.getBoundingClientRect().x + 100) {
        //     chef.speedX = -3;
        // } else {
        // chef.speedX = 0;
        // }
        // if (
        // Math.abs(Math.floor(chef.y - event.target.getBoundingClientRect().y))>10 &&
        // chef.x <= event.target.getBoundingClientRect().x+100
        // ) {
        // chef.speedY = (Math.floor(chef.y) > Math.floor(event.target.getBoundingClientRect().y)) ? -1 : 1;
        // console.log('di doc',chef.speedY)
        // console.log('vi tri chef', chef.y, 'vi tri click', event.target.getBoundingClientRect().y);
        // console.log(Math.abs(Math.floor(chef.y - event.target.getBoundingClientRect().y)) > 0)
        // } else {
        // // chef.speedY = 0;
        // }
    }, 100);
}


//apply on everywhere clicked
var dsts = document.querySelectorAll('.dst');
dsts.forEach(dst => dst.addEventListener('click',moveTo));
document.querySelector('.prepTable').addEventListener('click',addIngredient);
document.querySelector('.prepTable').addEventListener('dblclick',rollIt)
function draw(){
    //function executee toutes les 16 miliseconds
    ctx.clearRect(0,0,1750,900);
    chef.update();
    chef.draw();
    addOrders();
    checkOrders();
    updateHandStatus()

}
document.querySelector('button').onclick=function(){
    document.querySelector('button').remove();
    function animLoop(){
        draw()
        requestAnimationFrame(animLoop)
    }
    animLoop();
}

