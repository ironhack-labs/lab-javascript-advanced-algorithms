$(function() {
  var qitem = document.getElementById("qitem");
  var qadd = document.getElementById("qadd");
  var qremove = document.getElementById("qremove");
  var qempty = document.getElementById("qunder");
  var qfull = document.getElementById("qover");

  myQueue = new QueueDataStructure();

// FALTA ADAPTAR LA LÓGICA VISUAL A LA ENTRADA Y SALIDA DE LA COLA
// MOVER LOS ELEMENTOS DENTRO DE LOS DIV A MEDIDA QUE ENTRE O SALE UNO

  qadd.onclick = function() {
    var element = qitem.value;
    if (element !== "") {
      if (myQueue.queueControl.length == myQueue.MAX_SIZE) {
        qfull.classList.remove("hide");
      } else {
        document.getElementById(`q${myQueue.queueControl.length + 1}`).innerHTML = `${element}`;
        document.getElementById(`q${myQueue.queueControl.length + 1}`).classList.add("fullbox");
        myQueue.enqueue(element);

        if (myQueue.queueControl.length != 0) {
          qempty.classList.add("hide");
        }
      }
    }
  };

  qremove.onclick = function() {
    if (myQueue.queueControl.length === 0) {
      qempty.classList.remove("hide");
    } else {
      
      document.getElementById(`q${myQueue.queueControl.length}`).textContent = "";
      
      document.getElementById(`q${myQueue.queueControl.length}`).classList.remove("fullbox");
      myQueue.dequeue();
      if (myQueue.queueControl.length != myQueue.MAX_SIZE) {
        qfull.classList.add("hide");
      }
    }
    
  };
});