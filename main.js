function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=  createCapture(VIDEO);
    video.hide();

    tint_color = " ";
}

function draw(){
    image(video, 0, 0, 640, 480,);
    circle(10, 10, 100);
    circle(610, 470, 100);
    circle(630, 25, 100);
    circle(10, 470, 100);
}







function take_snapshot(){
    save('Myframedpicture.png');
}

