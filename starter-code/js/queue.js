$(document).ready(function(){
	var queue = new QueueDataStructure();
	var elements = $('.queue-element');
	var arrayElemets = [].slice.call(elements);
	queue.MAX_SIZE = arrayElemets.length;	

	$('#add-queue').on('click',function(){		
		if(queue.canEnqueue()){
      $('#queueUnder').css('display','none');
      var data = $('#queue-input').val();
      if(data == "") {
        alert('Ingresa un valor para agregar');
        return;
      }
			var result = queue.enqueue(data);
			if(result != 'Queue Overflow'){
				console.log('Empieza a llenar');
				queue.queueControl.forEach(function(e,i){
          arrayElemets[i].textContent = e;
          arrayElemets[i].className = 'queue-element addedelement';
				});
			}		
		}else{
      console.log('queue Overflow');
      $('#queueOver').css('display','block');
		}	
	});

	$('#delete-queue').on('click',function(){		
		if(!queue.isEmpty()){
      $('#queueOver').css('display','none');
			if(result != 'Queue Overflow'){
				var result = queue.dequeue();
				console.log('Empieza a vaciar',result);
        arrayElemets[((queue.queueControl.length))].textContent = '';
        arrayElemets[((queue.queueControl.length))].className = 'queue-element';
			}		
		}else{
      console.log('queue Underflow');
      $('#queueUnder').css('display','block');
		}	
	});
});