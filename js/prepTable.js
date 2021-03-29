let prepFood=[];
let makiDish=['seaweed','rice','salmon'];
let kappaDish=['seaweed','rice','cucumber'];
let sashimiDish=['salmon','rice']
function addIngredient(){
    if (onHand.length>0){ //add ingredients to the prepTable
        prepFood.push(onHand);
        onHand='';
        let ingImage = document.createElement('img');
        switch(prepFood[0]){
            case 'rice':
            ingImage.src='images/ingRice.png';
            break;
            case 'salmon':
            ingImage.src='images/ingSalmon.png';
            break;
            case 'seaweed':
            ingImage.src='images/ingSeaweed.png';
            break;
            case 'cucumber':
            ingImage.src='images/ingCucumber.png';
            break;
        }
        document.querySelector('.prepTable').appendChild(ingImage);
        
    }   
    
}
function clearTheTable(){
    prepFood=[];
    
}
// function rollIt(){
//     if (makiDish.every(ing=>prepTable.includes(ing)===true){ //img.chefwMakiDish
         
//     }
    
// }
