function preload(){

}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
modal=ml5.poseNet(video,modalLoaded);
modal.on("pose",gotposes);
}
function modalLoaded(){
console.log("modal is fixed");
}
function gotposes(result){
if (result.length>0){
console.log(result);
console.log( "nose x="+ result[0].pose.nose.x);
console.log( "nose y="+ result[0].pose.nose.y);
}
}

function draw(){
image(video,0,0,400,400);
}
function start(){
save("myfilteredimage.png")
}