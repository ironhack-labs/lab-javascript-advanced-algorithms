$(function() {
  var qitem = document.getElementById("qitem");
  var qadd = document.getElementById("qadd");
  var qremove = document.getElementById("qremove");
  var qempty = document.getElementById("qunder");
  var qfull = document.getElementById("qover");

  myQueue = new QueueDataStructure();


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

  // AUN NO FUNCIONA CORRECTAMENTE

  qremove.onclick = function() {
    if (myQueue.queueControl.length === 0) {
      qempty.classList.remove("hide");
    } else {
      newdiv = document.createElement('div');
      currentdiv = document.getElementById('q8')
      console.log(newdiv);
      parent= document.getElementById('qcontent');
      console.log(parent)
      document.getElementById(`qcontent`).removeChild(document.getElementById('q1'));
      document.body.insertBefore(newdiv,currentdiv);

      document.getElementById(`q${myQueue.queueControl.length}`).classList.remove("fullbox");
      myQueue.dequeue();
      if (myQueue.queueControl.length != myQueue.MAX_SIZE) {
        qfull.classList.add("hide");
      }
    }
    
  };
});