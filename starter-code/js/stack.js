stack = new StackDataStructure();


$('#add').on('click', function () {
  stack.push($(".input").val())
  console.log(stack.stackControl)
   $(".columna .añadir:last").text($(".input").val())
   $(".columna .añadir:last").removeClass("añadir").addClass("color")
   if(!stack.isEmpty()){
    $("#under").removeClass("visible").addClass("ocultar")
   }
   if(!stack.canPush()){
    $("#over").removeClass("ocultar").addClass("visible")
   }
 })
 
 $('#take').on('click',function(){
  stack.pop($(".input").val())
  console.log(stack.stackControl)
    $(".color:first").text("")
    $(".color:first").removeClass("color").addClass("añadir")
    if(stack.isEmpty()){
      
      $("#under").removeClass("ocultar").addClass("visible")
    }else{
      console.log("no puedo mas")
      $("#over").removeClass("visible").addClass("ocultar")
    }
 })

