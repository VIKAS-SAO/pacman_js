const canvas=document.getElementById('canvas')
const ctx=canvas.getContext('2d');
canvas.height=400;
canvas.width=480;

 
 
var wallarray=new Array(10)
for(var i=0;i<10;i++){
    wallarray[i]=new Array(12)
}  
for(var i=0;i<10;i++){
    for(var j=0;j<12;j++){
        wallarray[i][j]=0;
     }
}
function wallmaker(x,y){ 
     ctx.fillStyle='black'
    ctx.fillRect(x*40,y*40,40,40);
    wallarray[y][x]=1;
}
function wallremover(x,y){ 
      ctx.clearRect(x*40,y*40,40,40);
    wallarray[y][x]=0;
}
 



class hero{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.direction=null;

    }
     
     draw() {
        ctx.beginPath();
        ctx.arc(this.x*40+20,this.y*40+20,17,0,Math.PI*2,false)
        ctx.strokeStyle='red';
        ctx.fillStyle='red';
        
        ctx.stroke()
        ctx.fill();
        
    }
    update(){ 
        if(this.direction=='left'  && this.x>0 && wallarray[this.y][this.x-1]==0){
            ctx.clearRect(this.x*40,this.y*40,40,40)
            this.x-=1;
            this.draw()
        }
        if(this.direction=='right'  && this.x<11 && wallarray[this.y][this.x+1]==0){
            ctx.clearRect(this.x*40,this.y*40,40,40)
            this.x+=1;
            this.draw()
        }
        if(this.direction=='up'  && this.y>0 && wallarray[this.y-1][this.x]==0){
            ctx.clearRect(this.x*40,this.y*40,40,40)
            this.y-=1;
            this.draw()
        }
        if(this.direction=='down'  && this.y<9 && wallarray[this.y+1][this.x]==0){
            ctx.clearRect(this.x*40,this.y*40,40,40)
            this.y+=1;
            this.draw()
        } 
    }

  

}
 

var hero1=new hero(0,0);
window.addEventListener('keydown',function(e) {
    console.log(e.keyCode)
    if(e.keyCode==37  ){
        hero1.direction='left'  
        hero1.update()
    }
    if(e.keyCode==38  ){
        hero1.direction='up' 
        hero1.update() 
    }
    if(e.keyCode==39  ){
        hero1.direction='right'  
        hero1.update()
    }
    if(e.keyCode==40  ){
        hero1.direction='down'  
        hero1.update()
    } 

    
})



class villain{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.direction='up'; 
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x*40+20,this.y*40+20,17,0,Math.PI*2,false)
        ctx.lineWidth=3;
        ctx.strokeStyle='blue';
        ctx.fillStyle='green';
        
        ctx.stroke()
        ctx.fill();
    }
    update(){ 
                //randomizer
            if(this.direction=='up'){
                var list=[];
                if(this.y-1>=0 &&  wallarray[this.y-1][this.x]==0){list.push([this.x,this.y-1])}
                if(this.x-1>=0 &&  wallarray[this.y][this.x-1]==0){list.push([this.x-1,this.y])}
                if(this.x+1<=11 &&  wallarray[this.y][this.x+1]==0){list.push([this.x+1,this.y])}
                 var r=Math.floor(Math.random()*list.length);
                 if(list[r][0]>this.x){this.direction='right'}
                 if(list[r][0]<this.x){this.direction='left'}
                 ctx.clearRect(this.x*40,this.y*40,40,40); 

                this.x=list[r][0];
                this.y=list[r][1];  
                this.draw()  
                return;
            }
            if(this.direction=='down'){
                var list=[];
                if(this.y+1<=9 &&  wallarray[this.y+1][this.x]==0){list.push([this.x,this.y+1])}
                if(this.x-1>=0 &&  wallarray[this.y][this.x-1]==0){list.push([this.x-1,this.y])}
                if(this.x+1<=11 &&  wallarray[this.y][this.x+1]==0){list.push([this.x+1,this.y])}
                var r=Math.floor(Math.random()*list.length);

                if(list[r][0]>this.x){this.direction='right'}
                if(list[r][0]<this.x){this.direction='left'}
                ctx.clearRect(this.x*40,this.y*40,40,40); 

                this.x=list[r][0];
                this.y=list[r][1]; 
                this.draw(); 
                return; 
            }
            if(this.direction=='left'){
                var list=[];
                if(this.x-1>=0 &&  wallarray[this.y][this.x-1]==0){list.push([this.x-1,this.y])}
                if(this.y-1>=0 &&  wallarray[this.y-1][this.x]==0){list.push([this.x,this.y-1])}
                if(this.y+1<=9 &&  wallarray[this.y+1][this.x]==0){list.push([this.x,this.y+1])}
                var r=Math.floor(Math.random()*list.length);
                if(list[r][1]>this.y){this.direction='down'}
                if(list[r][1]<this.y){this.direction='up'}
                ctx.clearRect(this.x*40,this.y*40,40,40); 

                this.x=list[r][0];
                this.y=list[r][1]; 
                this.draw(); 
                return; 
            }
            if(this.direction=='right'){
                var list=[];
                if(this.x+1<=11 &&  wallarray[this.y][this.x+1]==0){list.push([this.x+1,this.y])}
                if(this.y-1>=0 &&  wallarray[this.y-1][this.x]==0){list.push([this.x,this.y-1])}
                if(this.y+1<=9 &&  wallarray[this.y+1][this.x]==0){list.push([this.x,this.y+1])}
                var r=Math.floor(Math.random()*list.length);
                if(list[r][1]>this.y){this.direction='down'}
                if(list[r][1]<this.y){this.direction='up'}
                ctx.clearRect(this.x*40,this.y*40,40,40); 

                this.x=list[r][0];
                this.y=list[r][1]; 
                this.draw(); 
                return; 
            }

  
    
    }
}


 



 

class food{
    constructor(){ 
        
      


        var  a=Math.floor(Math.random()*12) ;
        var b=Math.floor(Math.random()*10);
         while(wallarray[b][a]!=0){
            a=Math.floor(Math.random()*12);
            b=Math.floor(Math.random()*10); 
            //console.log(a,b)
        } 
        this.x=a;
        this.y=b;

    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x*40+20,this.y*40+20,5,0,Math.PI*2,false)
        ctx.lineWidth=3;
        ctx.strokeStyle='black';
        ctx.fillStyle='yellow'; 
        ctx.stroke()
        ctx.fill();
         
    }
    update(){ 
          this.draw(); 
    }
}



 


 

//on load functoin for the start of the full program /////////////////////////////////////////////////////
   window.addEventListener('load',function(){
    for(var i=1;i<11;i++){
        wallmaker(i,1)
    }
    for(var i=1;i<11;i++){
      wallmaker(i,8)
    }
    for(var i=1;i<9;i++){
      wallmaker(1,i)
    }
    for(var i=1;i<9;i++){
      wallmaker(10,i)
    }
    wallremover(1,2)

    //  villain list
    var villainlist=[]
    for(var i=0;i<4;i++){
        villainlist.push(new villain(5,5))
    }
    // interval for villlan
    setInterval(function(){
        for(var i=0;i<villainlist.length;i++){
            villainlist[i].update()
        } 
    },400)

    // foodlist
     var foodlist=[]; 
    for(var i=0;i<4;i++){
        foodlist.push(new food())
    }

    //interval for food
        setInterval(function(){
            for(var i=0;i<villainlist.length;i++){
                if(villainlist[i].x==hero1.x && villainlist[i].y==hero1.y ){
                    alert('YOU LOST !!')
                    location.reload()
                }
            }
            
            for(var i=0;i<foodlist.length;i++){
                if(hero1.x==foodlist[i].x && hero1.y==foodlist[i].y ){
                    foodlist.splice(i,1)
                    foodlist.push(new food())
                    var score=document.querySelectorAll('h1')[1];
                    var x=parseInt(score.textContent)  ;
                    score.textContent=x+1; 
                    break;
                }
               
            } 
            for(var i=0;i<foodlist.length;i++){
                foodlist[i].update()
            } 
            
        },10)
    

    


  
   
  })