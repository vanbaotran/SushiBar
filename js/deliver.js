let score = 0;
function deliver(dish){
    delivered.push(dish);
    chef.update();
    chef.draw();
    //thay đổi hình chef 
    for (let i=0;i<delivered.length;i++){
        score = i*15;
    }
    let turnOver = document.querySelector('.turnOver');
    turnOver.innerHTML=score;
}
document.querySelector('.pickUpPoint').addEventListener('click',deliver);
    