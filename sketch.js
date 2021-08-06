var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImg
var obstacle, obstacleImg_1, obstacleImg_2, obstacleImg_3, obstacleImg_4, obstacleImg_5, obstacleImg_6
var score;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png");
    cloudImg = loadImage("cloud.png");
    obstacleImg_1 = loadImage("obstacle1.png")
    obstacleImg_2 = loadImage("obstacle2.png")
    obstacleImg_3 = loadImage("obstacle3.png")
    obstacleImg_4 = loadImage("obstacle4.png")
    obstacleImg_5 = loadImage("obstacle5.png")
    obstacleImg_6 = loadImage("obstacle6.png")

}
function setup() {
    createCanvas(600, 200);
//create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
//create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    invisibleGround = createSprite(300, 190, 600, 10)
    invisibleGround.visible = false

     var ran = Math.round(random(1, 10));
     console.log(ran);

     score = 0
}
function draw() {
    background(225);

    text("score:  " + score, 500, 50);
    score = score + Math.round(frameCount/60)
//jump when the space button is pressed
    if (keyDown("space") && trex.y>145) {
    trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);

    spawnObstacles();
    spawnClouds();
    drawSprites();
}

function spawnClouds(){
    if (frameCount%60 == 0){
        cloud = createSprite(600, 100, 20, 10);
        cloud.velocityX = -3;
        cloud.addImage(cloudImg);
        cloud.scale = 0.2
        var ran = Math.round(random(10, 80))
        cloud.y = ran
        //console.log(trex.depth, cloud.x)
        cloud.depth = trex.depth
        trex.depth = trex.depth + 1

        cloud.lifetime = 200
    }

}


function spawnObstacles(){
    if (frameCount%60 == 0){
        obstacle = createSprite(600, 165, 20, 10)
        obstacle.velocityX = -3;

        var ran =  Math.round(random(1, 6));
        switch(ran){
            case 1:
                obstacle.addImage(obstacleImg_1);
                break;
            case 2:
                obstacle.addImage(obstacleImg_2);
                break;
            case 3:
                obstacle.addImage(obstacleImg_3);
                    break;
                case 4:
                    obstacle.addImage(obstacleImg_4);
                    break;
                    case 5:
                        obstacle.addImage(obstacleImg_5);
                        break;
                    case 6:
                        obstacle.addImage(obstacleImg_6);
                        break;
            default:break;

        
        }
        obstacle.lifetime = 200

        obstacle.scale = 0.1
        obstacle.scale = 0.1
        obstacle.scale = 0.1
        obstacle.scale = 0.1
        obstacle.scale = 0.1
        obstacle.scale = 0.1
    }




}