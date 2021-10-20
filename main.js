function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
canvas.mouseReleased(classifyCanvas);
snyth=window.speechSynthesis;
}

function preload(){
classifier=ml5.imageClassifier('DoodleNet')

}

function clear_canvas(){
    background("white");

}

function draw(){
    strokeWeight(7);
    stroke("purple");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }

}

function classifyCanvas(){
classifier.classify(canvas,got_result);
}

function got_result(error,results){
if(error){
    console.error(error);
}
console.log(results);
document.getElementById("label").innerHTML="It's a "+results[0].label;
document.getElementById("accuracy").innerHTML=" Confidence "+Math.round(results[0].confidence*100)+"%";
say="its a "+results[0].label;
utterthis=new SpeechSynthesisUtterance(say);

snyth.speak(utterthis);
}
















