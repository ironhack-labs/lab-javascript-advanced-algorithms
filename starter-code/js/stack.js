$(function(){

  var item = document.getElementById('addItem');
  var addS = document.getElementById('addS');
  var removeS = document.getElementById('removeS');
  var emptyS = document.getElementById("minStack");
  var fullS = document.getElementById("maxStack");

  
  myOwnStack = new StackDataStructure;
  
  addS.onclick = (function(){
    var element = addItem.value;
    document.getElementById(`s${myOwnStack.stackControl.length + 1}`).innerHTML=`${element}`;
    document.getElementById(`s${myOwnStack.stackControl.length + 1}`).classList.add("fullbox");
    myOwnStack.push(element);
    console.log(myOwnStack.stackControl)
  })


  
  
  })