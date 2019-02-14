
var stack = new StackDataStructure();

document.querySelector(".card-body").onclick = function (e) {
  e.preventDefault();  
  var dato = document.querySelector(".input").value
  stack.push(dato)
console.log(dato)

  document.querySelector(".card-body-1")[8].innerHTML = dato
  

}