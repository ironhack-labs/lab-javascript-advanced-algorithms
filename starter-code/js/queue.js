var queue = new QueueDataStructure();

queue.queueControl = [];
queue.MAX_SIZE = 8;


// Add 

document.getElementById("addbtn1").addEventListener("click", function() {

  if (queue.canEnqueue()) {
    var newitem1 = document.createElement("div");
    var input1 = document.getElementById("typefield1").value;
    newitem1.innerHTML = input1;
    document.getElementById("elements1").appendChild(newitem1);
    queue.queueControl.push(newitem1.innerHTML);
    console.log(queue.queueControl);

  } else {
    var alertOver1 = document.createElement("div");
    alertOver1.innerHTML = "Stack overflow";
    document.getElementById("elements1").appendChild(alertOver1);
  }      
});

// Delete

document.getElementById("takebtn1").addEventListener("click", function() {
  if (queue.isEmpty()) {
    var alertUnder1 = document.createElement("div");
    alertUnder1.innerHTML = "Stack underflow";
    document.getElementById("elements1").appendChild(alertUnder1);  
  }

  else {
    var lastitem1 = document.getElementById("elements1").firstElementChild;
    document.getElementById("elements1").removeChild(lastitem1);
    queue.queueControl.shift(lastitem1.innerHTML);
    console.log(queue.queueControl);
  }
});
