predicion1="";
predicion2="";
Webcam.set({
    width:350,height:250,image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function painter(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id=face src="''+data_uri+"/>";
    });

}
    console.log('ml5',ml5.version);
    var classifier=ml5.imageClassifier('https://unpkg.com/ml5@0.4.3/dist/ml5.min.json',modelLoaded);
    function modelLoaded(){
console.log('model is loaded');
    }
function speak(){
    var sinth=window.speechSyntisis;
    var speak1="the first prediction is "+prediction1;
    var speak1="the second prediction is "+prediction2;
    var tiger=new SpeechSynthesisUtterance(speak1+speak2);
    sinth.speak(lion);
}