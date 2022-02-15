function calculateMaxwell() {
  
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var blue = document.getElementById("blue");


  var pho = red * [1/(red + green + blue)];
  var gamma = green * [1/(red + green + blue)];
  var beta = blue * [1/(red + green + blue)];

  var luminance = Math.max(red, green, blue);


  document.getElementById("phoOutput") = pho;
  document.getElementById("gammaOutput") = gamma;
  document.getElementById("betaOutput") = beta;
  document.getElementById("luminanceOutput") = luminance;
  
  

  
  output = "ρɣβL(" + pho + ", " + gamma + ", " + beta + ", " + luminance + ")";
  
  document.getElementById("output") = output;
  
  return;
  
}



/*


TODO - Convert ρɣβL back to RGB (I accidentally started on the wrong section.)


var pho = document.getElementById("pho");
var gamma = document.getElementById("gamma");
var beta = document.getElementById("beta");
var L = document.getElementById("luminance");


var R = L/Math.max(pho, gamma, beta);

alert(R);*/