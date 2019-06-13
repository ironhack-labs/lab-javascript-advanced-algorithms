document.addEventListener("DOMContentLoaded", function(events){

  var stack = new StackDataStructure();

  var textInput = document.getElementById('inputValue2');
  var addButton = document.getElementById('addButton');
  var takeButton = document.getElementById('takeButton');


  //capturar los elementos de cada celda
  var elementsCelda = document.getElementsByClassName('items');

  //creación de var para saber la posición hasta que se llemne
  var elementPosNow = elementsCelda-length - 1;

  //Evento añadir elementos
  //var + evento + funtion

  
  addButton.onclick = () =>{
    stackControl.push(textInput.value)      //o stackControl.push
    
    //elementsCelda[elementPosNow].innerHTML = textInput.value
    
  
  }
  


}