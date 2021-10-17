var bg;
var bird;
var pipes=[];
var sound;

function preload()
{
     bg=loadImage("./Assets/background.jpg");
     sound=loadSound("./Assets/music.mp3");
}


function setup() {
   
   
    var w = window.innerWidth;
var h = window.innerHeight;
  createCanvas(w,h);

   bird=new Bird();
    pipes.push(new Pipe());
}
var isStart=true;
var x;



function draw() {
  
    
if(isStart==true)
{
   
    fill(255);
     x = document.getElementById("abc");
    x.style.display = "block";
    if(sound.isPlaying())
        {
            sound.stop();
        }
    return;
}
x.style.display = "none";
 background(bg);

    
     for(var i=pipes.length-1;i>=0;i--) {
            pipes[i].show();
            pipes[i].update();
            
            if(pipes[i].hits(bird)){
                console.log("HIT");
                isStart=true;
                pipes=[];
                
                setup();
                 
            }
               
            if(pipes[i].offscreen()){
                pipes.splice(i,1);
            }
        }
    
 bird.update();
    bird.show();   
    
    if(frameCount% 80==0){
     pipes.push(new Pipe());   
    }
  
    
   
}
function onbuttonpressed(){
    isStart=false;
    console.log("hello");
    if(sound.isPlaying()==false){
      sound.play();
       getAudioContext().resume();
  }  
}
function keyPressed()
{
 if(key==' '){
    bird.up();
 }   
    
   
}