const menu =['maki','kappamaki','sashimi'];
const ingredients = ['seaweed','cucumber','rice','salmon','dish'];
let onHand='';
let prepTable=[];
let orders=[];
let delivered=[];
let frames = 0;
let time = 6;
let raf;
let gameover;
let youwin;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;
let instructions = document.querySelector('.dialogue .text');
let soundButton = document.querySelector('.on')

//Display Time:
let timer = document.querySelector('.timer');
function displayTime(){ // need to finish at least 8 orders in 5 mins
    if (frames < 15000){
        if (frames%2000===0){
            time++;
            timer.innerHTML=time+'.00 PM'
            if (time>10){
                timer.innerHTML='CLOSED'
            }
        }
    } else {
        timer.innerHTML='CLOSED'
        checkWinner();
    } 
}
//sound settings

function soundSetting(){
    if (soundButton.getAttribute('class')==='on'){
        pauseBackGroundAudio();
        soundButton.setAttribute('class','off');
    } 
    else {
        playbackgroundMusic();
        soundButton.setAttribute('class','on')
    }
}
soundButton.addEventListener('click',soundSetting)

//create a chef
const chef = new Chef ();

//change image when the chef move nearby the ing or the prepTable to show that he is holding something on his hands
function onHandStatus(){
    if (onHand==='dish'){
        chef.pickItem('dish');
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
//game finished
const gameFinished= document.createElement('div');
const resetButton= document.createElement('button');
resetButton.innerHTML='REPLAY'
gameFinished.className='gameFinished'

//check Winner container
let checkWinnerContainer=document.createElement('div');


function checkWinner(){
    canvas.remove();
    if (frames>15000 && turnOver.innerHTML<120){
        gameover=true;
        const gameOverText= document.createElement('p')
        gameOverText.innerHTML=
        `<div>It was a sad day. </div>
        <div>You made $ ${turnOver.innerHTML} today...</div>
        <div>Orders served: ${delivered.length}</div`;
        gameOverText.className='text'
        const gameOverImage = document.createElement('img');
        gameOverImage.src="images/gameOver.png";
        checkWinnerContainer.appendChild(gameOverImage);
        checkWinnerContainer.appendChild(gameOverText);  
        gameFinished.appendChild(checkWinnerContainer);
        document.querySelector('section').appendChild(gameFinished); 
        pauseBackGroundAudio();
        playGameOverSound();
        gameFinished.appendChild(resetButton);
    } 
    if (frames>15000 && turnOver.innerHTML>=120){
        youwin=true;
        const youWinText=document.createElement('p');
        youWinText.innerHTML=
        `<div> Amazing!!! You made $ ${turnOver.innerHTML} today.</div>
        <div>Orders served: ${delivered.length}</div>
        <div> Keep up the good work!</div>`
        youWinText.className='text';
        const youWinImage = document.createElement('img');
        youWinImage.src='images/youwin.png'
        checkWinnerContainer.appendChild(youWinImage);
        checkWinnerContainer.appendChild(youWinText);
        gameFinished.appendChild(checkWinnerContainer);
        document.querySelector('section').appendChild(gameFinished); 
        pauseBackGroundAudio();
        playCashSound();
        playYippy();
        gameFinished.appendChild(resetButton);
    }   
    
}

function reset(){
    playbackgroundMusic();
    instructions.innerHTML='Welcome to Neko Sushi! We have the best sushi in town'
    gameFinished.remove();
    clearTheTable();
    turnOver.innerHTML=0;
    gameover=false;
    youwin=false;
    score=0;
    onHand='';
    prepFood=[];
    delivered=[];
    frames = 0;
    time = 6;
    chef.x = W/2 - chef.w/2;
    chef.y = H/2 - chef.h/2;
    animLoop();
    gameFinished.removeChild(checkWinnerContainer);
    checkWinnerContainer=document.createElement('div');

}
var middleSection = document.querySelector('.prepTable')
var pickUpPoint = document.querySelector('.pickUpPoint');
var dsts = document.querySelectorAll('.dst');
dsts.forEach(dst => dst.addEventListener('click',handleClickRight));
pickUpPoint.addEventListener('click',handleClickLeft);
middleSection.addEventListener('click',handleClickMiddle);
middleSection.addEventListener('dblclick',rollIt);
document.querySelector('.trashCan').addEventListener('dblclick',clearTheTable,);
document.querySelector('.trashCan').addEventListener('dblclick',playTrashSound);
document.querySelector('.dialogue .toClick').addEventListener('click',showInstruction)
resetButton.addEventListener('click',reset);


function draw(){
    //function executee toutes les 16 miliseconds
    document.querySelector('section').appendChild(canvas)
    ctx.clearRect(0,0,1750,900);
    chef.draw();
    chef.update();
    displayTime();
    addOrders();
    onHandStatus();  
    addIngToTable(onHand);
    takeTheDish();
    deliver();
}
function animLoop(){
    frames++;
    draw()
    if (!gameover && !youwin) {
    requestAnimationFrame(animLoop);
    }

}
document.querySelector('.startGame').onclick=function(){
    document.querySelector('.startGame').remove();
    animLoop();
    playbackgroundMusic();
}
