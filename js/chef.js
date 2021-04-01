
//the class Chef (x,y,w,h), drawChef(), moveTo(position), pickIng(position), drop(position)
class Chef{
    constructor(){
        const img = document.createElement('img');  
        const pickDish = document.createElement('img');
        const pickSalmon = document.createElement('img');
        const pickCucumber = document.createElement('img');
        const pickSeaweed = document.createElement('img');
        const pickRice = document.createElement('img');
        const pickSashimiDish = document.createElement('img');
        const pickMakiDish = document.createElement('img');
        const pickKappaDish = document.createElement('img');
        pickDish.src="images/chefwDish.png"
        pickRice.src="images/chefwRice.png"
        pickSalmon.src="images/chefwSalmon.png"
        pickSeaweed.src="images/chefwSeaweed.png"
        pickCucumber.src="images/chefwCucumber.png"
        pickMakiDish.src="images/chefwMakiDish.png"
        pickKappaDish.src="images/chefwKappaDish.png"
        pickSashimiDish.src="images/chefwSashimiDish.png"  
        this.speedX=0;
        this.speedY=0;
        this.destX=undefined;
        this.destY=undefined;
        this.pickDish=pickDish;
        this.pickSalmon=pickSalmon;
        this.pickCucumber=pickCucumber;
        this.pickRice=pickRice;
        this.pickSeaweed=pickSeaweed;
        this.pickMakiDish=pickMakiDish;
        this.pickKappaDish=pickKappaDish;
        this.pickSashimiDish=pickSashimiDish;
        img.onload = () => {
            this.img = img
            const imgRatio = img.naturalWidth/img.naturalHeight;
            this.w = 150;
            this.h = 150/imgRatio;
            this.x = W/2-this.w/2;
            this.y = H/2 - this.h/2;
        } 
        
        img.src="images/chefEdited.png"
        
    }
    moveTo(x,y){
        this.destX=x;
        this.destY=y;        
    }
    update(){
        const deltaX = this.destX - this.x;
        const deltaY = this.destY - this.y;
        if (Math.abs(deltaX)>3){
            if (deltaX < 0){
                this.speedX=-5;
            } else {
                this.speedX=5;
            }  
            this.x+=this.speedX;
        } else {
            this.speedX=0;
            if (Math.abs(deltaY)>3){
                if(deltaY<0){
                    this.speedY=-5;
                } else {
                    this.speedY=5;
                }
                this.y+=this.speedY; 
            } else {
                this.speedY=0   
            }
        }
    }
    draw(){
        if (!this.img) return
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h); 
    }
    pickItem(item){
        
        switch(item){
            case 'dish':
            if (!this.pickDish) return
            ctx.drawImage(this.pickDish,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'salmon':
            if (!this.pickSalmon) return
            ctx.drawImage(this.pickSalmon,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'seaweed':
            if (!this.pickSeaweed) return
            ctx.drawImage(this.pickSeaweed,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'rice':
            if (!this.pickRice) return
            ctx.drawImage(this.pickRice,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'cucumber':
            if (!this.pickCucumber) return
            ctx.drawImage(this.pickCucumber,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'maki':
            if (!this.pickMakiDish) return
            ctx.drawImage(this.pickMakiDish,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'kappamaki':
            if (!this.pickKappaDish) return
            ctx.drawImage(this.pickKappaDish,chef.x,chef.y,chef.w,chef.h);
            break;
            case 'sashimi':
            // if (!this.pickMakiDish) return
            // ctx.drawImage(this.pickMakiDish,chef.x,chef.y,chef.w,chef.h)
            ctx.drawImage(this.pickSashimiDish,chef.x,chef.y,chef.w,chef.h);
            break;
        }
    }
}

