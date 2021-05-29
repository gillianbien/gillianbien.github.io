 //funtions for input and output
 function doInputOutput(){
    let t= parseFloat(document.getElementById('inputTemp').value);
    let s= parseFloat(document.getElementById('inputWind').value);
    let answer=windChill(t, s);
    document.getElementById('outputspan').innerHTML="Answer: " + answer;
 }
 //function for the formula
 function windChill(tempF, speed){
     let f=(35.74 + (0.6215 * tempF)-(35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16)));
     return f;

 }