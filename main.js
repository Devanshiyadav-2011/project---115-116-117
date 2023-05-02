var DOG = 0;
var cat= 0;
var lion = 0;
var cow = 0;



function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cSaXH-JWS/', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("bt21").innerHTML = 'I can hear -' +
            results[0].label;
        document.getElementById("bt21").style.color = "rgb("
            + r + "," + g + "," + b + ")";
        img = document.getElementById("aliens-01")

        
        if (results[0].label == "Barking") {
         img.src = "dog gif.gif";
          
        }
        if (results[0].label == "meowing") {
          img.src = "cat gif.gif";
        }
        if (results[0].label == "mooing") {
           img.src = "cow gif.gif"
        }

        else {
img.src = "lion gif.gif";
        }

    }
}