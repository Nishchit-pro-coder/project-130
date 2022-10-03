song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";

function preload() 
{
    song1 = loadSound("doraemone.mp3");
    song2 = loadSound("Harry-Potter-Theme.mp3");
    song3 = loadSound("Home-Free-Sea-Shanty-Medley.mp3");
    song4 = loadSound("Axel F Mp3 By and Crazy Frog.mp3")
    song5 = loadSound("Imagine Dragons - Believer  (Pendona.com).mp3")
}

function setup() 
{
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function modelLoaded() 
{
    console.log('posenet is inetialized');
}

function draw() 
{
    image(video, 0, 0, 600, 550);

    fill("#FF0000");
    stroke("#FF0000")
}

function stopall() 
{
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
}

function playDoraemon() 
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function playHarryPotter() 
{
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}

function playSeaShanty() 
{
    song3.play();
    song3.setVolume(1);
    song3.rate(1);
}

function playCrazyFrog() 
{
    song4.play();
    song4.setVolume(1);
    song4.rate(1);
}

function playBeliever() 
{
    song5.play();
    song5.setVolume(1);
    song5.rate(1);
}