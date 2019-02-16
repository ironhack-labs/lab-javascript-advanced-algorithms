var stack = new StackDataStructure();

stack.stackControl = [];
stack.MAX_SIZE = 8;
var newitem = document.createElement("div");
var input = document.getElementById("typefield").value;


// Add 

document.getElementById("addbtn").addEventListener("click", function() {

  if (stack.canPush()) {
    var newitem = document.createElement("div");
    var input = document.getElementById("typefield").value;
    newitem.innerHTML = input;
    document.getElementById("elements").prepend(newitem);
    stack.stackControl.unshift(newitem.innerHTML);
    console.log(stack.stackControl);

  } else {
    var alertOver = document.createElement("div");
    alertOver.innerHTML = "Stack overflow";
    document.getElementById("elements").prepend(alertOver);
  }      
});

// Delete

document.getElementById("takebtn").addEventListener("click", function() {
  if (stack.isEmpty()) {
    var alertUnder = document.createElement("div");
    alertUnder.innerHTML = "Stack underflow";
    document.getElementById("elements").appendChild(alertUnder);  
  }

  else {
    var lastitem = document.getElementById("elements").firstElementChild;
    document.getElementById("elements").removeChild(lastitem);
    stack.stackControl.shift(newitem.innerHTML);
    console.log(stack.stackControl);
  }
});
