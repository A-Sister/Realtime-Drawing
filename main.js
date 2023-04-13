noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(630, 150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized!");
}

function draw() {
    background("#94666b");
    fill("#F3F0EC");
    stroke("#F3F0EC");
    square(noseX,noseY,difference);
    document.getElementById("width_height").innerHTML = "Width and Height of the Square will be "+difference+"px";
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX - " + noseX + " noseY - " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX - " +leftWristX+ " rightWristX - "+rightWristX);
        difference = floor(leftWristX - rightWristX);
    }
}

