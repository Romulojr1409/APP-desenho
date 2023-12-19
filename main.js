
function setup() {
    canvas =createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    
}

function preload()  {
    classifier = ml5.imageClassifier('DoodleNet')
}

function limpar() {
    background("white");
}
 function classifyCanvas() {
    classifier.classify(canvas,gotResult);
 }
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    var result = results[0].label;
    document.getElementById('label').innerHTML
    ='Nome:'+ result.replace('_','');

    document.getElementById('precisão').innerHTML='precisão;'+
    Math.round(results[0].confidence * 100) +'%';
}
function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line (pmouseX, pmouseY, mouseX,mouseY);
    }
}