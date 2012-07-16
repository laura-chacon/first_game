document.getElementById('inner').innerHTML='<button id="clearCanvasBtn" type="button">Clear cancas</button><canvas id="canvasBg" width="800px" height="500px"style="display:block;background:#ffffff; margin:100px auto 0px;"> </canvas>';
var canvasBg = document.getElementById('canvasBg');
var ctxBg= canvasBg.getContext('2d');
var clearCanvasBtn = document.getElementById('clearCanvasBtn');
clearCanvasBtb.addEventListner('click');