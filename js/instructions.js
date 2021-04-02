let intro =
        ['Rice to meet you! Follow our recipes on the board', 
        'Click on each ingredient and drop it on the table', 
        'Double-click on the table to roll the sushi',
        'Go on the trash bin to clear your hand, double click to clear the table',
        "The client are hangry, don't miss out on the tip",
        'At least 8 orders should be served by the end of the day']


function showInstruction(){
    let random=Math.floor(Math.random()*intro.length);
    instructions.innerHTML=intro[random];           
}
let cheerUp=[
    'You are soy awesome!',
    'Nice! Just roll with it',
    "Thanks! It is delicious",
    'Cheers! Have a nice day'
]
function congrats(){
    let random=Math.floor(Math.random()*cheerUp.length);
    instructions.innerHTML=cheerUp[random];
}