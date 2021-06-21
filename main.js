function setup(){
    canvas=createCanvas(410,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video,0,0,410,300);
filter(GRAY);
}