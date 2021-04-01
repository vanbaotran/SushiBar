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
const sound = new Audio("https://res.cloudinary.com/dtqr57xyj/video/upload/v1615832640/ES_Whip_Whoosh_2_-_SFX_Producer.mp3")
sound.loop = false;
document.body.appendChild(sound);


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
    checkOrders();
    sound.play();
}
document.querySelector('button').onclick=function(){
    document.querySelector('button').remove();
    function animLoop(){
        draw()
        requestAnimationFrame(animLoop)
    }
    animLoop();
}
