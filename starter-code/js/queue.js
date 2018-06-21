var queue = new QueueDataStructure();

$('#add-queue').on('click', function () {
  var valorInput = $("#queue-input").val()
  var elementos = queue.enqueue(valorInput);
  var divElementos = $(".queue-element");
  console.log(divElementos);  
  if(elementos !== 'Queue Overflow'){
    console.log(elementos)
    for(var i = 0; i < elementos.length; i+=1){
      divElementos[i].innerHTML= elementos[i]
    }
  
  }else {
    $(".error-queue").css('display','block');
  }


});