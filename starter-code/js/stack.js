//jquery
$(document).ready(function() {
  var stackBlock = new StackDataStructure();
  //me he guiado por los otros ejercicios
  //pero no se si este sea el quue contenga el jquery de los datastructure

  //id="entradaStack" this.value || $this.val
  var entradaStack = $("#entradaStack").val();

  //boton de agregar
  var btnAddStack = $("#mandaStack").on("click", function () {
      
      if(entradaStack !=""){
        var bloque = stackBlock.push(entradaStack);
        if(bloque === "Stack Overflow"){
            $('#stackOF').show();
            console.log(bloque);
        }else{$('#stackUF').hide();}
        
      }
  });
  //boton de remover
  var btnRemoveStack = $("#quitaStack").on("click", function () {
    stackBlock.pop();
  });

  //agregar al bloque
  function agregarBloque() {
    stackBlock.push();
    agregarElemento();

  }
  //remover
  function removerBloque(stackBlock) {
    stackBlock.pop();
  }
  //validar over
  function validaStackover(stackBlock) {
   if(stackBlock.canPush()){
     $('OverFlow').hide();
   }else{$('OverFlow').show();}
  }

  //validar under
  function validaUnder(stackBlock) {
    if(stackBlock.isEmpty()<0){
      $('UnderFlow').show();
    }else{$('UnderFlow').hide();}
  }


});
