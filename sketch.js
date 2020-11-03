var player1_moving_r,player1_moving_l
var player1_shoot_r,player1_shoot_l
var player1_jump_r;
var player1_sit_r

var player1_still;

var player_wo_gun_moving_right
var player_wo_gun_moving_left


var soldier

var bgImg;

var house1,house2,house3

var house

var button1_img
var button2_img
var button3_img

var collect_img, collect1;

var inside1_img,inside2_img,inside3_img
var flag1 =0, flag2 = 0, flag3 = 0;


var weapon1,weapon2,weapon3;
var open_img


function preload(){
  

      //player_wo_gun
      player_wo_gun_moving_right=loadAnimation("assets/images/without gun/right/a.png","assets/images/without gun/right/b.png",
      "assets/images/without gun/right/c.png",
      "assets/images/without gun/right/e.png","assets/images/without gun/right/f.png",
      "assets/images/without gun/right/g.png","assets/images/without gun/right/h.png")
      player_wo_gun_moving_left=loadAnimation("assets/images/without gun/left/a.png","assets/images/without gun/left/b.png",
      "assets/images/without gun/left/c.png",
      "assets/images/without gun/left/e.png","assets/images/without gun/left/f.png",
      "assets/images/without gun/left/g.png","assets/images/without gun/left/h.png")

      player_wo_gun_still=loadAnimation("assets/images/without gun/right/a.png","assets/images/without gun/right/e.png")

      bgImg=loadImage("assets/images/bg/img.png")

      house1_img=loadImage("assets/images/house/h1.png")
      house2_img=loadImage("assets/images/house/h2.png")
      house3_img=loadImage("assets/images/house/h3.png")

      button1_img=loadImage("assets/images/button.png");
      button2_img=loadImage("assets/images/button.png");
      button3_img=loadImage("assets/images/button.png");

       //inside
       inside1_img=loadImage("assets/images/inside/ins1.png")
       inside2_img=loadImage("assets/images/inside/ins2.png")
       inside3_img=loadImage("assets/images/inside/ins3.png")

      //weapon
      weapon1_img=loadImage("assets/images/weapon/w1.png")
      weapon2_img=loadImage("assets/images/weapon/w2.png")
      weapon3_img=loadImage("assets/images/weapon/w3.png")

      collect_img=loadImage("assets/images/collect.png")
      
     
   
    
}
function setup(){
    createCanvas(displayWidth,displayHeight)

    

   house1=createSprite(3500,550,20,20)
          house1.addImage("h1",house1_img)
          house1.scale=3;
          door1 = createSprite(house1.x-50,600,100,200)   
          door1.addImage("1",button1_img)
          door1.scale=0.1
          collect1 = createSprite(house1.x-50,550);
          collect1.visible=false;
          
 
 house2=createSprite(7500,550,20,20)
          house2.addImage("h2",house2_img)
          house2.scale=2;   
          door2 = createSprite(house2.x,600,100,200)   
          door2.addImage("1",button2_img)
          door2.scale=0.1
          collect2 = createSprite(house2.x-50,550);
          collect2.visible=false;

     
  house3=createSprite(10500,560,20,20)
          house3.addImage("h3",house3_img)
          house3.scale=2 
          door3 = createSprite(house3.x,600,100,200)   
          door3.addImage("1",button3_img)
          door3.scale=0.1
          collect3 = createSprite(house3.x-50,550);
          collect3.visible=false;

    

    soldier = createSprite(200,650,20,20);
    soldier.addAnimation("still",player_wo_gun_still)
    soldier.addAnimation("playerstill",player_wo_gun_moving_right)
    soldier.addAnimation("playeranimation",player_wo_gun_moving_left)
    soldier.scale=2.5

    weapon1 = createSprite(3500,700,20,20);
    weapon1.visible = false;
    weapon1.depth=soldier.depth-1

  weapon2 = createSprite(8000,700,20,20);
    weapon2.visible = false;
    weapon2.depth=soldier.depth-1;
 
    weapon3 = createSprite(10600,700,20,20);
    weapon3.visible = false;
    weapon3.depth=soldier.depth-1;
}

function draw(){
  
    camera.position.x=soldier.x
    background(180)
    image(bgImg, 0,0,width*10,height );
    
    if(keyIsDown(RIGHT_ARROW)){
            soldier.x+=10
            soldier.changeAnimation("playerstill",player_wo_gun_moving_right)
    }
    else  if(keyIsDown(LEFT_ARROW)){
            soldier.x-=10
        soldier.changeAnimation("playeranimation",player_wo_gun_moving_left)
    }
    else{
        soldier.changeAnimation("still",player_wo_gun_still)
    }

        //first house
    if(mousePressedOver(door1)){
            flag1=1
    }
    if(flag1===1){//&&soldier.x<4000){
        image(inside1_img,2500,0,width,height);
        house1.destroy();
        door1.destroy();
        weapon1.visible = true;
        weapon1.addImage(weapon1_img);

        if(soldier.isTouching(weapon1)){
            collect1.visible = true;
            collect1.addImage("collect",collect_img);
            if(mousePressedOver(collect1)){
                weapon1.destroy();
                collect1.visible = false;
                flag1 = 0;
            }
        }

    }   

    //2nd house
 
    if(mousePressedOver(door2)){
        flag2=1;
    }
    if(flag2 ===1){
        image(inside2_img, 7500,0,width,height);
        house2.destroy();
        door2.destroy();
        weapon2.visible = true;
        weapon2.addImage(weapon2_img);
        if(soldier.isTouching(weapon2)){
            collect2.visible  =true;
            collect2.addImage("collect1", collect_img);
            if(mousePressedOver(collect2)){
                weapon2.destroy();
                collect2.visible = false;
                flag2 = 0;
            }
        }
    }

    if(mousePressedOver(door3)){
        flag3=1;
    }
    if(flag3===1){
        image(inside3_img, 10500,0,width,height);
        house3.destroy();
        door3.destroy();
        weapon3.visible = true;
        weapon3.addImage(weapon3_img);
        if(soldier.isTouching(weapon3)){
            collect3.visible = true;
            collect3.addImage("collect3",collect_img);
            if(mousePressedOver(collect3)){
                weapon3.destroy();
                collect3.visible = false;
                flag3=0;
            }
        }
    }
    drawSprites();

}

