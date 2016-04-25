document.addEventListener("DOMContentLoaded", function(e){

  var calcDisp = document.querySelector("[data-js='calc-output']");
  var numClick = document.querySelectorAll("[data-js='num-press']");
  var operatorClick = document.querySelectorAll("[data-js='op-press']");
  var completeMath = document.querySelector("[data-js='complete']");
  var showMath = "";
  var clearDisplay = document.querySelector("[data-js='reset-span']")


  // begin functions

  function setCalcDispText(text) {
    calcDisp.textContent += text
  }

// adds  numbers to the "display"

  for (var i = 0; i < numClick.length; i++) {
    numClick[i].addEventListener("click", function(e){
      var value = e.currentTarget.dataset.number;
      setCalcDispText(value);
      showMath += value;
  });
}

//  adds operator to the "display"
for (var i = 0; i < operatorClick.length; i++) {
  operatorClick[i].addEventListener("click", function(e){
    var operator = e.currentTarget.dataset.type;
    setCalcDispText(operator);
    showMath += operator;
});
}


//  evaluates the math that has been entered

  completeMath.addEventListener("click", function(e){
    var total = eval(showMath);
    calcDisp.textContent = total;
  })

// clears display

clearDisplay.addEventListener("click", function (e) {
    calcDisp.innerHTML = "";
    showMath = "";
  });



});
