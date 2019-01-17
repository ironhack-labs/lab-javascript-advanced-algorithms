var stack = new StackDataStructure()
stack.MAX_SIZE = 7

var stackDiv = document.getElementById("containerLifo")

var newElement = document.createElement("div")
newElement.setAttribute("class", "element")

for(var i = 0; i < stack.MAX_SIZE; i++){
  stackDiv.innerHTML+= newElement.outerHTML
}

