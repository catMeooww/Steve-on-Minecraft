canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

widthRover= 50;
heightRover= 50;
roverImage = "Player.png";

backgroundImage = "grass.gif";

arvoreImage = "Arvore_Minecraft.png";

villageImage = "Minecraft_Village.png";

roverX = 10;
roverY = 10;

function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImage;

    arvoreImgTag = new Image();
    arvoreImgTag.onload = uploadTree;
    arvoreImgTag.src = arvoreImage;

    vilaImgTag = new Image();
    vilaImgTag.onload = uploadVillage;
    vilaImgTag.src = villageImage;
}
function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverImgTag,roverX,roverY,widthRover,heightRover);
}
function uploadTree(){
    ctx.drawImage(arvoreImgTag,100,150,100,100);
}
function uploadVillage(){
    ctx.drawImage(vilaImgTag,300,200,300,300);
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    //pegando o valor da tecla pressionada e inserindo em keyPressed
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //controles
    if(keyPressed==40){
        down();
    }
    if(keyPressed==38){
        up();
    }
    if(keyPressed==39){
        right();
    }
    if(keyPressed==37){
        left();
    }
}
function down(){
    if(roverY <= 450){
        roverY = roverY + 10;
        uploadBackground();
        uploadTree();
        uploadVillage();
        uploadRover();
    }
}
function up(){
    if(roverY >= 10){
        roverY = roverY - 10;
        uploadBackground();
        uploadTree();
        uploadVillage();
        uploadRover();
    }
}
function right(){
    if(roverX <= 650){
        roverX = roverX + 10;
        uploadBackground();
        uploadTree();
        uploadVillage();
        uploadRover();
    }
}
function left(){
    if(roverX >= 10){
        roverX = roverX - 10;
        uploadBackground();
        uploadTree();
        uploadVillage();
        uploadRover();
    }
}