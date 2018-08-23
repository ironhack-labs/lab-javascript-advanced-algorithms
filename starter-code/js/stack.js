$(document).ready(function(){
	var stack = new StackDataStructure();
	var elements = $('.stack-element');
	var arrayElemets = [].slice.call(elements);
	stack.MAX_SIZE = arrayElemets.length;	

	$('#add-stack').on('click',function(){		
		if(stack.canPush()){
      $('#stackUnder').css('display','none');
      var data = $('#stackelement').val();
      if(data == "") {
        alert('Ingresa un valor para agregar');
        return;
      }
			var result = stack.push(data);
			if(result != 'Stack Overflow'){
				console.log('Empieza a llenar');
				stack.stackControl.forEach(function(e,i){
          arrayElemets[(stack.MAX_SIZE-1)-i].textContent = e;
          arrayElemets[(stack.MAX_SIZE-1)-i].className = 'stack-element addedelement';
				});
			}		
		}else{
      console.log('Stack Overflow');
      $('#stackOver').css('display','block');
		}	
	});

	$('#delete-stack').on('click',function(){		
		if(!stack.isEmpty()){
      $('#stackOver').css('display','none');
			if(result != 'Stack Overflow'){
				var result = stack.pop();
				console.log('Empieza a vaciar',result);
        arrayElemets[((arrayElemets.length-stack.stackControl.length-1))].textContent = '';
        arrayElemets[((arrayElemets.length-stack.stackControl.length-1))].className = 'stack-element';
			}		
		}else{
      console.log('Stack Underflow');
      $('#stackUnder').css('display','block');
		}	
	});
});