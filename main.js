noseY = 0;
noseX = 0;

leftWristX = 0;
rightWristX = 0;
difference = 130;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(900, 140);
    video = createCapture(VIDEO);
    video.size(400, 400);
    posenet = ml5.poseNet(video, modelLoded);
    posenet.on("pose", gotPoses);
}

function modelLoded() {
    console.log("modelLoded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("nosex=", noseX, "nosey=", noseY, "leftWrist=", leftWristX, "rightWrist=", rightWristX, "difference", difference);

    }

}

function draw() {
    background("salmon");
    document.getElementById("hight_width").innerHTML = "width and hight will be" + difference;
    fill("#4520ab");
    stroke("#42cc14");
    square(noseX, noseY, difference);
}