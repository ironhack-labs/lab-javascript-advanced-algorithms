var elements = document.getElementsByClassName("card-body")

var stack = new StackDataStructure();
  document.querySelector(".btn-primary").onclick = function(e) {
  e.preventDefault();

  var dato
  
  

  toFullStack();

  // document.getElementsByClassName("card-body")[6].innerHTML = "hola"
  // document.getElementsByClassName("card-body")[6].style.backgroundColor = "lightblue"
}



function toFullStack (){

  dato = document.querySelector("#exampleInputEmail1").value
  stack.push(dato.value)

  for (var i = elements.length - 1; i > 0; i--){
  console.log(elements[i])
 if (!elements[i].style.backgroundColor == "lightblue"){
  elements[i].style.backgroundColor = "lightblue"
  elements[i].innerHTML = dato
  break;}
}
}


function toEmptyStack() {

}
