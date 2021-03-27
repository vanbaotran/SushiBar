const menu =['maki','kappamaki','sashimi'];
const ingredients = ['seaweed','cucumber','rice','salmon','dish'];
const orders=[];
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const W = ctx.canvas.width;
console.log(W);
const H = ctx.canvas.height;


//display orders: pick 20 random orders, 3 at a time, when there are less than 3 orders, push 1
let countOrders = 0;
        for (i=0;i<3;i++){
            let random = Math.floor(Math.random()*menu.length);
            if (orders.length<3){
                orders.push(menu[random]);
                countOrders++;
            }    
        }
        console.log(orders,countOrders);
// when the order is served, remove that order from array Orders and add another one 






//the class Chef (x,y,w,h), drawChef(), moveTo(position), pickIng(position), drop(position)
class Chef{
    constructor(){
        const img = document.createElement('img');    
        const pickSalmon = document.createElement('img');
        const pickCucumber = document.createElement('img');
        const pickSeaweed = document.createElement('img');
        const pickRice = document.createElement('img');
        const pickSashimiDish = document.createElement('img');
        const pickMakiDish = document.createElement('img');
        const pickKappaDish = document.createElement('img');
        const pickDish = document.createElement('img');
        this.pickSalmon=pickSalmon;
        this.pickCucumber=pickCucumber;
        this.pickDish=pickDish;
        this.pickSeaweed=pickSeaweed;
        this.pickMakiDish=pickMakiDish;
        this.pickKappaDish=pickKappaDish;
        this.pickSashimiDish=pickSashimiDish;
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
        pickRice.onload=()=>{
            this.pickRice=pickRice;
        }
        pickDish.onload=()=>{
            this.pickDish=pickDish;
        }
        pickDish.src="images/chefwDish.png"
        pickRice.src="images/chefwRice.png"
        pickSalmon.src="images/chefwSalmon.png"
        pickSeaweed.src="images/chefwSeaweed.png"
        pickCucumber.src="images/chefwCucumber.png"
        pickMakiDish.src="images/chefwMakiDish.png"
        pickKappaDish.src="images/chefwKappaDish.png"
        pickSashimiDish.src="images/chefwSashimiDish.png"
    }
    update(){
        this.x+=this.speedX;
        console.log(this.x)
        this.y+=this.speedY;
    }
    draw(){
        if (!this.img) return
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h); 
    }
    //these methods will help move around (avoid obstacles)
    bottom(){
        return this.y+this.h;
    }
    top(){
        return this.y
    }
    left(){
        return this.x;
    }
    right(){
        return this.x+this.h;
    }
    //change into image of the Chef with the item
    pickItem(item){    
        switch(item){
            case 'dish'://changer de position en calculant distance
                ctx.clearRect(this.x,this.y,this.w,this.y)
                ctx.drawImage(this.pickDish,dishIng.getBoundingClientRect().x-this.w-120,dishIng.getBoundingClientRect().y-this.h-40,this.w,this.h)
                break;
            case 'salmon':
                ctx.drawImage(this.pickSalmon,600,500,this.w,this.h)
                break;
            case 'rice':
                this.pickRice.draw();
                break;
            case 'seaweed':
                this.pickSeaweed.draw();
                break;
            case 'cucumber':
                this.pickCucumber.draw();
                break;
            case 'makiDish':
                this.pickMakiDish.draw();
                break;
            case 'kappaDish':
                this.pickKappaDish.draw();
                break;
            case 'sashimiDish':
                this.pickSashimiDish.draw();
                break; 
        }
    }
}


//DOM - Ingredients: click on ingredient to move the Chef and pick up item;
const dishIng = document.querySelector('.ing .dish');
const salmonIng = document.querySelector('.ing .salmon');
const riceIng = document.querySelector('.ing .rice');
const seaweedIng = document.querySelector('.ing .seaweed');
const cucumberIng = document.querySelector('.ing .cucumber');
const trashCanIng = document.querySelector('.ing .trashCan');

// dishIng.onclick=function(){
//     chef.moveTo(dishIng.getBoundingClientRect().x,dishIng.getBoundingClientRect().y);
//     chef.pickItem('dish');
// }

const chef = new Chef ();
//click on Start Game => button disappears and appears the Chef, Timer starts
document.querySelector('button').onclick=function(){
    document.querySelector('button').remove();
}

//move to destinations 
function moveTo (event){
    console.log('running');
    // for (let i=0;i<500;i++){ 
        //chef.update();
        if (chef.x<900){
            chef.speedX+=1;
            chef.update()
        } 
    // }
    // var max=500;
    // let i=0;
    // for (i; i<max;i++){
    //     chef.update(); 
    //     if (chef.x<500){ 
    //         chef.speedX=1;
    //     } else {
    //         chef.speedX=0;
    //     }
    // }       
}

//apply on everywhere clicked
var dsts = document.querySelectorAll('.dst');
dsts.forEach(dst => dst.addEventListener('click',moveTo));

function animLoop(){
    draw()
    requestAnimationFrame(animLoop)
}
animLoop();
function draw(){
    //function executee toutes les 16 miliseconds
    ctx.clearRect(0,0,1100,700);
    chef.update();
    chef.draw();
}