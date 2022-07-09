function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nRP2dHU2T/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}