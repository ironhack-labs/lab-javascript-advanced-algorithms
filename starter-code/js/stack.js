size = prompt("the default length is 8.\n if you want to change it, write the new length")
console.log(parseInt(size))
size = (parseInt(size)!=NaN)?parseInt(size):8;
console.log(size)
var stack = new StackDataStructure(size)
var $stack = document.getElementById('stack')
var $stackAdd = document.getElementById("stack-add")
var $stackTake = document.getElementById("stack-take")
var $stackInput = document.getElementById("stack-input")
var $elStackTake = document.getElementById("el-stack-take")
var $stackElements;

for (var i = -1; i <= stack.MAX_SIZE; i++) {
  $stack.appendChild(document.createElement('li'))
}

$stackElements = $stack.getElementsByTagName('li')

$stackTake.onclick = function () {
  var i = 0;
  var element = stack.pop()
  if (element != "Stack Underflow") {
    // ocultamos el mensaje Stack Overflow
    $stackElements[0].innerHTML = ""
    $stackElements[0].className = ""
    //vaciamos el ultimo elemento añadido
    i = stack.MAX_SIZE - stack.stackControl.length
    $stackElements[i].innerHTML = ""
    $stackElements[i].className = ""
    //Mostramos el elemento eliminado
    $elStackTake.innerHTML = element
  } else {
    // "Stack Underflow"
    $stackElements[stack.MAX_SIZE + 1].innerHTML = "Stack Underflow"
    $stackElements[stack.MAX_SIZE + 1].className = "underflow"
  }
}
$stackAdd.onclick = function () {
  var i = 0;
  $stackInput.focus()
  if ($stackInput.value == "") {
    alert("no puede añadir un elemento vacio")

    return
  }
  if (stack.push($stackInput.value) != "Stack Overflow") {
    // Dejamos de ver el ultimo elmento eliminado
    $elStackTake.innerHTML = ""
    // Quitamos el mensaje Stack underflow
    $stackElements[stack.MAX_SIZE + 1].innerHTML = ""
    $stackElements[stack.MAX_SIZE + 1].className = ""
    // Añadimos el valor del nuevo elemento
    i = stack.MAX_SIZE - stack.stackControl.length + 1
    $stackElements[i].innerHTML = $stackInput.value;
    $stackElements[i].className = "lleno"
    // Vaciamos el input
    $stackInput.value = ""
  } else {
    // Stack Overflow
    $stackElements[0].innerHTML = "Stack Overflow"
    $stackElements[0].className = "overflow"
  }
}