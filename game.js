document.getElementById('inner').innerHTML = '<button id="drawSquareBtn" type="button">Draw Square</button><button id="clearCanvasBtn" type="button">Clear Canvas</button><canvas id="canvasBg" width="800px" height="500px" style="display:block;background:#ffffff;margin:100px auto 0px;"></canvas>';
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
var clearCanvasBtn = document.getElementById('clearCanvasBtn');
clearCanvasBtn.addEventListener('click',clearCanvas,false);

var drawSquareBtn = document.getElementById('drawSquareBtn');
drawSquareBtn.addEventListener('click',drawSquare,false);


function drawSquare() {
    ctxBg.fillStyle = '#505050';
    ctxBg.fillRect(20,100,600,600);
}




function clearCanvas() {
    ctxBg.clearRect(0,0,800,500);
}