var canvas= new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
blockWidth=30;
blockHeight=30;
var playerObject="";
var BlockObject="";
function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject= Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });
}
function NewImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        BlockObject.scaleToWidth(blockWidth);
        BlockObject.scaleToHeight(blockHeight);
        BlockObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(BlockObject);
    });
}
window.addEventListener("keydown", Mykeydown);
function Mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey== true && keypressed== "80"){
        blockWidth= blockWidth+ 10;
        blockHeight= blockHeight+ 10;
        document.getElementById("Largura").innerHTML=blockWidth;
        document.getElementById("Altura").innerHTML=blockHeight;
    }
    if(e.shiftKey== true && keypressed== "77"){
        blockWidth= blockWidth- 10;
        blockHeight= blockHeight- 10;
        document.getElementById("Largura").innerHTML=blockWidth;
        document.getElementById("Altura").innerHTML=blockHeight;
    }
    if(keypressed="38"){
        up();
        console.log("cima");
    }
    if(keypressed="40"){
        down();
        console.log("baixo");
    }
    if(keypressed="37"){
        left();
        console.log("esquerda");
    }
    if(keypressed="39"){
        right();
        console.log("direita");
    }
    if(keypressed="87"){
        NewImage("wall.jpg");
        console.log("w");
    }
    if(keypressed="71"){
        NewImage("ground.png");
        console.log("g");
    }
    if(keypressed="76"){
        NewImage("light_green.png");
        console.log("l");
    }
    if(keypressed="84"){
        NewImage("trunk.jpg");
        console.log("t");
    }
    if(keypressed="82"){
        NewImage("roof.jpg");
        console.log("r");
    }
    if(keypressed="89"){
        NewImage("yellow_wall.png");
        console.log("y");
    }
    if(keypressed="68"){
        NewImage("dark_green.png");
        console.log("d");
    }
    if(keypressed="85"){
        NewImage("unique.png");
        console.log("u");
    }
    if(keypressed="67"){
        NewImage("cloud.jpg");
        console.log("c");
    }
    if(keypressed="66"){
        NewImage("borracha.png");
        console.log("b");
    }
}
function up()
{
    if(playerY>=0)
    {
        playerY=playerY-blockHeight;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down()
{
    if(playerY<=600)
    {
        playerY=playerY-blockHeight;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left()
{
    if(playerX>0)
    {
        playerX=playerX-blockWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right()
{
    if(playerX=0)
    {
        playerX=playerX-blockWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}



