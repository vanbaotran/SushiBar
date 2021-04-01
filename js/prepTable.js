let prepFood=[];
let makiDish=['dish','seaweed','rice','salmon'];
let kappaDish=['dish','seaweed','rice','cucumber'];
let sashimiDish=['dish','salmon']
let preparedDish='';

function addIngredient(){
    if (onHand.length>0 && ingredients.includes(onHand)){ //add ingredients to the prepTable
        prepFood.push(onHand);
        onHand='';
        let ingImage = document.createElement('img');
        switch(prepFood[prepFood.length-1]){
            case 'dish':
            ingImage.src='images/dish.png';
            break;
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
        middleSection.appendChild(ingImage); 
    }    
}
function clearTheTable(){
    preparedDish=''
    // prepFood=[];
    let allIng= document.querySelectorAll('.prepTable img')
    allIng.forEach(ing=>ing.remove())
}
function rollIt(){
    if (makiDish.every(ing=>prepFood.includes(ing))&& onHand==''){ //img.MakiDish
        clearTheTable();
        const makiDishImg = document.createElement('img');
        makiDishImg.src='images/maki-dish.png'
        middleSection.appendChild(makiDishImg);     
        preparedDish='maki';
        console.log('preparedDish',preparedDish)
        console.log('prepFood',prepFood)
    }
    else if (kappaDish.every(ing=>prepFood.includes(ing))&& onHand==''){ //img.MakiDish
        clearTheTable();
        const kappaDishImg = document.createElement('img');
        kappaDishImg.src='images/kappamaki-dish.png'
        middleSection.appendChild(kappaDishImg);
        preparedDish='kappamaki';
        console.log('preparedDish',preparedDish)
        console.log('prepFood',prepFood)
    } else if (sashimiDish.every(ing=>prepFood.includes(ing)) && onHand==''){ //img.MakiDish
        clearTheTable();
        const sashimiDishImg = document.createElement('img');
        sashimiDishImg.src='images/sashimi-dish.png'
        middleSection.appendChild(sashimiDishImg);
        preparedDish='sashimi';
        console.log('preparedDish',preparedDish)
        console.log('prepFood',prepFood)
    }
    else {
        document.querySelector('.dialogue').innerHTML='Make sure you picked all ingredients, including the dish'
    }
    
}
