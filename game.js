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