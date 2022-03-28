function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300) ;
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("posenet is loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = " + noseX + "nosey =" + noseY);
    }
}

function draw(){
    image(video,0,0,300,300);
}

function take_snapshot(){
    save('myFilterImage.png');
}