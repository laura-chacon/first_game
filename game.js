var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
var canvasJet = document.getElementById('canvasJet');
var ctxJet = canvasJet.getContext('2d');

var jet1;
var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var fps = 10;
var drawInterval;

var imgSprite = new Image();
imgSprite.src = 'images/sprite.png';
imgSprite.addEventListener('load',init,false);



function init() {
    drawBg();
    startDrawing();
    jet1 = new Jet();
}


function draw() {
    jet1.draw();
}

function startDrawing() {
    stopDrawing();
    drawInterval = setInterval(draw,fps);
}

function stopDrawing() {
    clearInterval(drawInterval);
}



function Jet() {
    this.srcX = 0;
    this.srcY = 500;
    this.drawX = 220;
    this.drawY = 200;
    this.width = 100;
    this.height = 40;
}


Jet.prototype.draw = function () {
    clearCtxJet();
    ctxJet.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};






function drawBg() {
    var srcX = 0;
    var srcY = 0;
    var drawX = 0;
    var drawY = 0;
    ctxBg.drawImage(imgSprite,srcX,srcY,gameWidth,gameHeight,drawX,drawY,gameWidth,gameHeight);
}



function clearCtxBg() {
    ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

function clearCtxJet() {
    ctxJet.clearRect(0,0,gameWidth,gameHeight);
}
