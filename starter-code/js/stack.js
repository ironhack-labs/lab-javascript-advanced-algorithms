//jquery
$(document).ready(function() {
  var stackBlock = new StackDataStructure();
  //me he guiado por los otros ejercicios
  //pero no se si este sea el quue contenga el jquery de los datastructure

     //id="entradaStack" this.value || $this.val
  var entradaStack = $("#entradaStack").val();
   
  //boton de agregar
 var btnAddStack = $("#mandaStack").on("click",function(){
     stackBlock.insertar();
     stackBlock.canPush();
 })
 //boton de remover
  var btnRemoveStack = $("#quitaStack").on("click",function(){
        stackBlock.remover();
  });

  //agregar al bloque
  function agregarBloque() {
    stackBlock.insertar();
    
  }
  //remover
  function removerBloque(stackBlock) {
    stackBlock.remover();
  }
  //validar over
  function validaStackover(stackBlock) {
   stackBlock.canPush();
  }

  //validar under
  function validaUnder(stackBlock) {
    
  }
});
