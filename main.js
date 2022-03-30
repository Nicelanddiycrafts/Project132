video="";
stat="";    
song="";
objectDetector="";
objects = [];

function preload(){
    song = loadSound("g.mp3");
}

function setup(){
canvas = createCanvas(380,380);
canvas.center();

video = createCapture(VIDEO);
video.hide();

objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: baby dectecting";
}

function modelLoaded(){
    console.log('Model is loaded');
    stat = true;
    
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    objects=results;
    console.log(objects);
}
}
function draw(){
image(video,0,0,380,380);

if(stat!=""){
    objectDetector.detect(video, gotResult);
for(var i=0;i<objects.length; i++){
document.getElementById('status').innerHTML = "Status: baby dectected";

if(object.length == 0){
    objectDetector.detect(video, gotResult);
for(var i=0;i<objects.length; i++){
document.getElementById('status').innerHTML = "Status: baby missing";
song.play();


}
}
fill('red');

stroke('red');
percent = floor(objects[i].confidence * 100);

text(objects[i].label+ " "+ percent+ " % ", objects[i].x +15 , objects[i].y +15);
noFill();
stroke('red');
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
document.getElementById('num').innerHTML = objects.length;

}
}
}  