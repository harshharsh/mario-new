////////////////////FINAL PROJECT - INTERACTIVE PROGRAMMING 
///CREATED BY FATHIMATHUL HARSHIMA P T

////P5.PLAY LIBRARY MUST BE ENABLED FOR THIS PROGRAM TO RUN
////P5.SOUND LIBRARY MUST BE ENABLED FOR THIS PROGRAM TO RUN

///////////////////////////////////////////global
//game control
var stage = 0; //keeps track of which function to run
// 0 = splash
// 1 = level 1
// 2 = win screen
// 3 = lose screen
// 4 = level 2

//player
var p1X = 400; //p1 for player 1
var p1Y = 375;
var pWidth = 50;
var pHeight = 100;
var pSpeed = 6;
//walking code
var step = 0;
var lookingRight = true;
var lookingLeft = false;

//boxes (platforms) ---- FOR LEVEL 1
var b1X = 200; //b1 for box 1
var b1Y = 300;
var b2X = 600; 
var b2Y = 300;
var b3X = 500;
var b3Y = 150;
var bWidth = 200;
var bHeight = 40;

//BOXES FOR LEVEL 2
var b4X = 200;
var b4Y = 320;
var b5X = 400;
var b5Y = 290;
var b6X = 200;
var b6Y = 120;
var b7X = 600;
var b7Y = 150;

///wall barriers to stop jumping through platforms
var w1Y = b1Y+20; //w1 for wall under box 1
var w2Y = b2Y+20;
var w3Y = b3Y+20;
var w4Y = b4Y+20;
var w5Y = b5Y+20;
var w6Y = b6Y+20;
var w7Y = b7Y+20;
var wHeight = 20;


//coins ----- FOR LEVEL 1
var c1X = 600; //c1 for coin 1
var c1Y = 410;
var c2X = 600;
var c2Y = 250;
var c3X = 500;
var c3Y = 100;
var c4X = 200;
var c4Y = 250;
var cWidth = 30;
var cHeight = 30;

//COINS FOR LEVEL 2
var c5X = 200;
var c5Y = 280;
var c6X = 380;
var c6Y = 250;
var c7X = 420;
var c7Y = 250;
var c8X = 180;
var c8Y = 80;
var c9X = 220;
var c9Y = 80;
var c10X = 600;
var c10Y = 110;


//goomba --- FOR LEVEL 1
var g1X = 200; //g1 for goomba 1
var g1Y = 400;
var g2X = 550;
var g2Y = 100;
var gWidth = 50;
var gHeight = 70;

//moving goombas
var g1Position = 200; //center positions
var g2Position = 550;
var gSpeed = 2; //how fast goombas move
var g1Direction = 1; //1 moves right and -1 move left
var g1Distance = 50; //how far can goombas go
var g2Direction = 1; //1 moves right and -1 move left
var g2Distance = 50; //how far can goombas go

//GOOOMBAS FOR LEVEL 2
var g3X = 600;
var g3Y = 400;
var g3Position = 600;
var g3Direction = 1; //1 moves right and -1 move left
var g3Distance = 100; //how far can goombas go
var g4X = 200;
var g4Y = 270;
var g4Position = 200;
var g4Direction = -1; //1 moves right and -1 move left
var g4Distance = 50; //how far can goombas go
var g5X = 600;
var g5Y = 100;
var g5Position = 600;
var g5Direction = 1; //1 moves right and -1 move left
var g5Distance = 50; //how far can goombas go
var g6X = 200;
var g6Y = 70;
var g6Position = 200;
var g6Direction = -1; //1 moves right and -1 move left
var g6Distance = 50; //how far can goombas go

//powerup
var u1X = 120; //u1 for powerup 1
var u1Y = 260; 
var uWidth = 40;
var uHeight = 40;
var up = false; //does mario have the power up?
var up2 = false; //should the power up be active based on the timer?
var powerTime;
var powerLimit = 5;//how long can you have the limit for

//counters ---- FOR LEVEL 1
var score = 0;
var lives = 2;
var totalTime; //totat time of program running
var splashTime; //amount of time on splashscreen only
var gameTime; //amount of time in game only
var timeLimit = 20; //how much time do you have to succeed?

//counters ---- FOR LEVEL 2
var score2 = 0;
var lives2 = 3;
var gameTime2; //amount of time in level 2
var timeLimit2 = 35; //how much time do you have to succeed in level 2?


//gravity
var jump = false; //are we jumping?
var direction = 1; //the force of gravity in the y direction
var velocity = 2; //the speed of player
var jumpPower = 15; //the energy or strength of player
var fallingSpeed = 4; //equal to velocity
var minHeight = 395; //height of ground
var maxHeight = 50; //height of sky
var jumpCounter = 0; //keeps track of how much we are jumping

//multimedia
//for player
var mario;
var marioLeft1;
var marioLeft2;
var marioRight1;
var marioRight2;
var marioJump;
var marioStill;
//for appearance of world
var platform;
var landscape; //cant use the word background because it already exist
var marioFont;
//for objects or things
var coin;
var coinSound;
var goomba;
var powerup;
//for sounds
var jumpSound;
var lifeSound;
var winSound;
var loseSound;
var themeSong;


///////////////////////////////////////////setup
function setup() {
	//i did not use the tutorials but instead copied the code
	createCanvas(800, 500);
	rectMode(CENTER);
	textAlign(CENTER);
	imageMode(CENTER);
	
	//theme background music
	//themeSong.play();


}//close setup

///////////////////////////////////////////preload
function preload(){
	mario = loadImage('images/8bit_Mario.png');
	marioLeft1 = loadImage('images/mario_left1.png');
	marioLeft2 = loadImage('images/mario_left2.png');
	marioRight1 = loadImage('images/mario_right1.png');
	marioRight2 = loadImage('images/mario_right2.png');
	marioJump = loadImage('images/mario_jump.png');
	marioStill = loadImage('images/mario_still.png');
	platform = loadImage('images/mario_bricks.jpeg');
	landscape = loadImage('images/supermario_background.jpg');
	jumpSound = loadSound('sound/Mario-jump-sound.mp3');
	marioFont = loadFont('smbfont.ttf');
	coin = loadImage('images/mario_coin.png');
	coinSound = loadSound('sound/coin_sound.m4a');
	goomba = loadImage('images/mario_goomba.png');
	lifeSound = loadSound('sound/mario_life.m4a');
	winSound = loadSound('sound/mario_win_sound.m4a');
	loseSound = loadSound('sound/mario_gameover_sound.m4a');
	powerup = loadImage('images/mario_powerup.png');
	themeSong = loadSound('sound/8-bit_Mario_Theme.mp3');
	
}//close preload

///////////////////////////////////////////draw
function draw() {
//call functions
	keyPressed();
	keyTyped();
	gravity();
	totalTime = millis(); //start timer
	
	if(stage == 0){
		splash();
	}//close = 0
	
	if(stage == 1){
		level1();
		
	}//close = 1
	
	if(stage == 2){
		winScreen();
	}//close = 2
	
	if(stage == 3){
		loseScreen();
	}//close = 3
	
	
	
	if(mouseIsPressed == true && stage != 4){
		stage = 1;
	}//click starts game

}//close draw

///////////////////////////////////////////splash
function splash(){
	
	//timer stuff
	splashTime = totalTime;//begin splashscreen timer
	
	//appearance of game
	background(150, 230, 240); //sky blue
	image(landscape, width/2, height/2, width, height);
	
	
	//title
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(100);
	text('MARIO REMASTERED', width/2, 120);
	textSize(40);
	text('BY: ANSH SOLANKI', width/2, 180);
	
	//instructions
	text('HOW TO PLAY:', width/2, 270);
	text('USE ARROW KEYS TO MOVE LEFT AND RIGHT PRESS A TO JUMP', width/2, 330);
	text('WATCH OUT FOR GOOMBAS', width/2, 380);
	text('OBTAIN ALL COINS BEFORE TIME RUNS OUT', width/2, 430);
	
	text('CLICK THE SCREEN TO START', width/2, 490);
	
}//close splash


///////////////////////////////////////////level1
function level1(){ // changed function name since we will be adding many levels to it
//appearance of game
	background(150, 230, 240); //sky blue
	image(landscape, width/2, height/2, width, height);
//window frame
	noFill();
	stroke(0);
	strokeWeight(15);
	rect(width/2, height/2, width, height);

	//draw player
	stroke(0);
	strokeWeight(5);
	fill(150, 0, 170);//purple
	//rect(p1X, p1Y, pWidth, pHeight);
	//image(mario, p1X, p1Y, pWidth, pHeight);
	player1();//draw player function

//draw box
	stroke(0);
	strokeWeight(5);
	fill(255, 120, 0);//orange
	//rect(b1X, b1Y, bWidth, bHeight);
	image(platform,b1X, b1Y, bWidth, bHeight);
	image(platform,b2X, b2Y, bWidth, bHeight);
	image(platform,b3X, b3Y, bWidth, bHeight);

	

//collisions with boxes
	//box 1
	if(p1X >= b1X-bWidth/2 && p1X <= b1X+bWidth/2 && p1Y+pHeight/2 >= b1Y-bHeight/2 && p1Y-pHeight/2 <= b1Y+bHeight/2 && jump == false){
		p1Y = b1Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box
	//wall barrier under box
	if(p1X >= b1X-bWidth/2 && p1X <= b1X+bWidth/2 && p1Y+pHeight/2 >= w1Y-wHeight/2 && p1Y-pHeight/2 <= w1Y+wHeight/2){
		//hit barrier so fall
		jumpCounter = jumpPower; //mario has no more jump energy
		velocity = fallingSpeed; //make mario fall
	}//close hit wall

			
	//box 2
	if(p1X >= b2X-bWidth/2 && p1X <= b2X+bWidth/2 && p1Y+pHeight/2 >= b2Y-bHeight/2 && p1Y-pHeight/2 <= b2Y+bHeight/2 && jump == false){
		p1Y = b2Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box
		//wall barrier under box
	if(p1X >= b2X-bWidth/2 && p1X <= b2X+bWidth/2 && p1Y+pHeight/2 >= w2Y-wHeight/2 && p1Y-pHeight/2 <= w2Y+wHeight/2){
		//hit barrier so fall
		jumpCounter = jumpPower; //mario has no more jump energy
		velocity = fallingSpeed; //make mario fall
	}//close hit wall
	
	
	//box 3
	if(p1X >= b3X-bWidth/2 && p1X <= b3X+bWidth/2 && p1Y+pHeight/2 >= b3Y-bHeight/2 && p1Y-pHeight/2 <= b3Y+bHeight/2 && jump == false){
		p1Y = b3Y-55;//dont fall and rest on top of platform
		velocity = 0; //no speed becuase we arent falling
		jumpCounter = 0;//allows us to jump again
	}//close if on box
		//wall barrier under box
	if(p1X >= b3X-bWidth/2 && p1X <= b3X+bWidth/2 && p1Y+pHeight/2 >= w3Y-wHeight/2 && p1Y-pHeight/2 <= w3Y+wHeight/2){
		//hit barrier so fall
		jumpCounter = jumpPower; //mario has no more jump energy
		velocity = fallingSpeed; //make mario fall
	}//close hit wall
	
	
//coins
	//coin 1
	image(coin, c1X, c1Y, cWidth, cHeight);
	if(p1X >= c1X-cWidth/2 && p1X <= c1X+cWidth/2 && p1Y >= c1Y-cHeight/2 && p1Y <= c1Y+cHeight/2){
		//mario hits coin
		score = score+1;//get point
		c1X = -1000; //move coin off screen
		coinSound.play();
	}//close hit coin
	
		//coin 2
	image(coin, c2X, c2Y, cWidth, cHeight);
	if(p1X >= c2X-cWidth/2 && p1X <= c2X+cWidth/2 && p1Y >= c2Y-cHeight/2 && p1Y <= c2Y+cHeight/2){
		//mario hits coin
		score = score+1;//get point
		c2X = -1000; //move coin off screen
		coinSound.play();
	}//close hit coin
	
		//coin 3
	image(coin, c3X, c3Y, cWidth, cHeight);
	if(p1X >= c3X-cWidth/2 && p1X <= c3X+cWidth/2 && p1Y >= c3Y-cHeight/2 && p1Y <= c3Y+cHeight/2){
		//mario hits coin
		score = score+1;//get point
		c3X = -1000; //move coin off screen
		coinSound.play();
	}//close hit coin
	
			//coin 4
	image(coin, c4X, c4Y, cWidth, cHeight);
	if(p1X >= c4X-cWidth/2 && p1X <= c4X+cWidth/2 && p1Y >= c4Y-cHeight/2 && p1Y <= c4Y+cHeight/2){
		//mario hits coin
		score = score+1;//get point
		c4X = -1000; //move coin off screen
		coinSound.play();
	}//close hit coin
	
//goombas
	//goomba 1
	image(goomba, g1X, g1Y, gWidth, gHeight);
	if(p1X >= g1X-gWidth/2 && p1X <= g1X+gWidth/2 && p1Y >= g1Y-gHeight/2 && p1Y <= g1Y+gHeight/2){
		
		if(up == false){ //mario does not have power up
			//hitting goomba
			lives = lives-1; //lose life
			lifeSound.play();
			p1X = 400;//put mario back at start position
			p1Y = 375;
		}//close up false
		
		if(up == true){ //mario has power up
			coinSound.play();
			g1X = -100000; //goomba go away
		}//close up true
		
	}//close hit goomba
	
	//goomba 2
	image(goomba, g2X, g2Y, gWidth, gHeight);
	if(p1X >= g2X-gWidth/2 && p1X <= g2X+gWidth/2 && p1Y >= g2Y-gHeight/2 && p1Y <= g2Y+gHeight/2){
		
		if(up == false){//no powerup
			//hitting goomba
			lives = lives-1; //lose life
			lifeSound.play();
			p1X = 400;//put mario back at start position
			p1Y = 375;
		}//close nopower up
		
		if(up == true){
			coinSound.play();
			g2X = -100000; //goomba go away
		}//close up true
		
	}//close hit goomba
	
//moving goombas
	//goomba 1
	g1X = g1X + (gSpeed*g1Direction);
	if(g1X >= g1Position+g1Distance || g1X <= g1Position-g1Distance){
		//exceed distance allowance
		g1Direction = g1Direction*-1;//change direction
	}//close g1
	
	//goomba 2
	g2X = g2X + (gSpeed*g2Direction);
	if(g2X >= g2Position+g2Distance || g2X <= g2Position-g2Distance){
		//exceed distance allowance
		g2Direction = g2Direction*-1;//change direction
	}//close g2
	
		

	
//scoreboard
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('POINTS:', 50, 50);
	text(score, 100, 50); 
	
//lives
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('LIVES:', 150, 50);
	text(lives, 200, 50); 
	
	
//timer
	splashTime = splashTime; //stop counting time on splash
	gameTime = int((totalTime-splashTime)/1000); //convert to seconds and integer
	
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(30);
	text('TIME REMAINING:', 600, 50);
	text(timeLimit-gameTime, 700, 50); //display countdown timer
	

//code to trigger win or lose screens
	if(score >= 4){//4 to win because there are 4 coins
		winSound.play();
		p1X = 400; //set mario to start position for level 2
		p1Y = 400;
		pSpeed = 4; //set mario speed back to normal
		stage = 2; //trigger level 2
	}//close you win
	
	if(lives <= 0){//no more lives so lose
		loseSound.play();
		stage = 3;
	}//close lose because no lives
		
	if(gameTime >= timeLimit){//out of time
		loseSound.play();
		stage = 3;
	}//close lose because no time
	
	
//power up
	image(powerup, u1X, u1Y, uWidth, uHeight);
	if(p1X >= u1X-uWidth/2 && p1X <= u1X+uWidth/2 && p1Y>= u1Y-uHeight/2 && p1Y <= u1Y+uHeight/2){
		//hit powerup
		up2 = true; //mario has powerup
		powerTime = gameTime;//start powerup Timer
		coinSound.play();
	}//close got powerup
	
	
	//power up limit
	if(up2 == true){
		if(gameTime <= powerTime+powerLimit){//have not run out of power time yet
				up = true; //mario has powerup
				pWidth = 70; //mario grows
				pHeight = 120;
				pSpeed = 8; //mario can move faster
				u1X = -1000; //move powerup off screen
			}//close we have time
			else{
				up = false;//no power up
				pWidth = 50; //shrink
				pHeight = 100;
				pSpeed = 4; //slow down
			}//close out of time
	}//close got power up limit
	
}//close level1




///////////////////////////////////////////winScreen
function winScreen(){
	image(landscape, width/2, height/2, width, height);
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(200);
	text('YOU WIN', width/2, height/2);

}//close you win function


///////////////////////////////////////////loseScreen
function loseScreen(){
	image(landscape, width/2, height/2, width, height);
	textFont(marioFont);
	fill(255);
	stroke(0);
	strokeWeight(10);
	textSize(200);
	text('YOU LOSE', width/2, height/2);
	
}//close you lose function

///////////////////////////////////////////gravity
function gravity(){

	if(p1Y >= minHeight && jump == false){
		//STOP FALLING ON THE GROUND
		p1Y = p1Y; //dont fall
		jumpCounter = 0;//reset jump counter when landing
	}//close on ground
	else{
		p1Y = p1Y + (direction*velocity); //the code that makes gravity work
	}//else fall
	
	
	if(jump == true){
		if(p1Y <= maxHeight || jumpCounter >= jumpPower){
			if(p1Y >= minHeight){
				p1Y = minHeight;
			}//close at min already
			else{
				velocity = fallingSpeed; //fall at maximums
			}//close else not at min
		}//close at max
		else{
			jumpSound.play();
			velocity = -jumpPower; //jumping
			jumpCounter = jumpCounter+1;//add to jump counter
		}//close else not at max
	}//close jump
	else{
		velocity = fallingSpeed;
	}//close not jumping
	
	
////horizontal barriers (left and right walls)
	if(p1X+pWidth/2 >= width){ //exceed right wall of screen
		p1X = p1X-5;
	}//close at width
	
	if(p1X-pWidth/2 <= 0){ //exceed left wall of screen
		p1X = p1X+5;
	}//close at 0
	
	
}//close gravity


///////////////////////////////////////////player1
function player1(){
	image(mario, p1X, p1Y, pWidth, pHeight);//original still image of mario for p1

	
	
}//close player1



///////////////////////////////////////////keypressed
function keyPressed(){
	if(keyDown('LEFT_ARROW')){
		p1X = p1X-pSpeed; //move left
		lookingLeft = true;
	}//close left
	else{
		lookingLeft = false;
	}//close else not left
	
	if(keyDown('RIGHT_ARROW')){
		p1X = p1X+pSpeed; //move right
		lookingRight = true;
	}//close right
	else{
		lookingRight = false;
	}
	
}//close keypressed

///////////////////////////////////////////keytyped
function keyTyped(){
	if(keyDown('a')){
		jump = true; //jump
	}//a pressed
	else{
		jump = false; //dont jump
	}//close not a
	
}//close keytyped









