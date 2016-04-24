document.addEventListener("DOMContentLoaded", function(e){

  var calcDisp = document.querySelector("[data-js='calc-output']")
  var numClick = document.querySelector("[data-js='num-press']");
  var operatorClick = document.querySelector("[data-js='op-press']")
  var completeMath =
  document.querySelector("[data-js='complete']");
  var showMath = "";
  

  // begin functions

  function setCalcDisp(text) {
    calcDisp.textContent += text
  }

  for (var i = 0; i < numClick.length; i++) {
    numClick[i].addEventListener("click", function(e){
      var value = e.currentTarget.dataset.number;
      setCalcDisptext(value);
      showMath =+ value;

    });
  };




})
