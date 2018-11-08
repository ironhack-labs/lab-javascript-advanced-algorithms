var queue = new QueueDataStructure()

function addQueue(){
  var input_queue = document.getElementById("input-queue").value
  
  if (input_queue != ''){
    document.getElementById('q-underflow').classList.add('invisible')
    if(queue.canEnqueue()){
      queue.enqueue(input_queue)
      console.log(queue.queueControl)

      for(var i=1;i<queue.queueControl.length+1;i++){
        console.log('q_'+i)
        var box = document.getElementById('q_'+i)
        box.innerText = queue.queueControl[i-1]
        box.classList.add('active')
      }
      document.getElementById("input-queue").value = ""
    }else{
      document.getElementById('q-overflow').classList.remove('invisible')
    }
  
  } else{
    alert("El campo no puede estar vacío")
  }
  }
  
  function takeQueue(){
    if(!queue.isEmpty()){
      document.getElementById('q-overflow').classList.add('invisible')
      queue.dequeue()
      for(var i=1;i<queue.queueControl.length+1;i++){
        console.log('q_'+i)
        var box = document.getElementById('q_'+i)
        box.innerText = queue.queueControl[i-1]
      }
      for (var i=queue.queueControl.length+1;i<=8;i++){
        var box = document.getElementById('q_'+i)
        box.innerText = ""
        box.classList.remove('active')
      }

    }else{
      document.getElementById('q-underflow').classList.remove('invisible')
    }
    }