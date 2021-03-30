function addOrders(){
    const ord = document.createElement('img');
    let random = Math.floor(Math.random()*menu.length);
    if (orders.length<3){
        if (menu[random]==='maki'){
            ord.className='orderMaki'
            ord.src='images/order_maki.png'
        }
        if (menu[random]==='kappamaki'){
            ord.className='orderKappa'
            ord.src='images/order_kappa.png'
        }
        if (menu[random]==='sashimi'){
            ord.className='orderSashimi'
            ord.src='images/order_sashimi.png'
        }
        orders.push(menu[random]);
        document.querySelector('.orders').appendChild(ord);
    }

}
function checkOrders(){
    for (let i=0; i<orders.length;i++){
        if (delivered[delivered.length-1]===orders[i]){
            orders.splice(i,1);
            if (delivered[delivered.length-1]==='maki'){
                document.querySelector('.orderMaki').remove()
            }
            if (delivered[delivered.length-1]==='kappamaki'){
                document.querySelector('.orderKappa').remove()
            }
            if (delivered[delivered.length-1]==='sashimi'){
                document.querySelector('.orderSashimi').remove()
            }
        }
    }
}