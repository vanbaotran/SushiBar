//adding sounds
const backgroundSound = new Audio ('sounds/backgroundmusic.mp3')
const pickUpSound = new Audio("https://res.cloudinary.com/dtqr57xyj/video/upload/v1615832640/ES_Whip_Whoosh_2_-_SFX_Producer.mp3")
const droppingSound = new Audio("sounds/dropping.mp3")
const rollingSound = new Audio('sounds/rolling.mp3')
const cashSound = new Audio('sounds/cashregisterSound.mp3')
const uhohSound = new Audio('sounds/uh_oh_sound_effect_4607156905252394837.mp3')
const trashSound = new Audio('sounds/trashsound.mp3')
const gameOverSound = new Audio('sounds/gameOverSound.mp3')
const youWinSound = new Audio('sounds/yippy.mp3')
backgroundSound.loop=true;
uhohSound.loop=false;
rollingSound.loop = false;
droppingSound.loop = false;
pickUpSound.loop = false;
cashSound.loop = false;
trashSound.loop=false;
gameOverSound.loop=false;
youWinSound.loop=false;
document.body.appendChild(rollingSound, droppingSound, pickUpSound,cashSound,uhohSound,backgroundSound,trashSound);

function playPickUpSound(){
    pickUpSound.play();
}
function playDroppingSound(){
    droppingSound.play();
}
function playRollingSound(){
    rollingSound.play();
}
function playCashSound(){
    cashSound.play();
}
function playbackgroundMusic(){
    backgroundSound.play()
}
function playUhOhsound(){
    uhohSound.play();
}
function playTrashSound(){
    trashSound.play();
}
function playGameOverSound(){
    gameOverSound.play();
}
function playYippy(){
    youWinSound.play()
}
function pauseBackGroundAudio(){
    backgroundSound.pause();
}