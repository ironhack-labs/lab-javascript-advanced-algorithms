$(document).ready(function(){
  var html="";
  var stackObj=new StackDataStructure();

  $("#stack").click(function(){
      if(!$(this).hasClass("active")){
        $(this).addClass("active");
        $("#queue").removeClass("active");
      }
      $("#tipo").empty();
      stackObj.clear();
      creaStack();
      $("#tipo").html(html);
  });

  $(".btn-success").click(function(){
    if($("#stack").hasClass("active")){
      if(stackObj.canPush()){
        stackObj.push($(".form-control").val());
        for(let i=0;i<($("#stack>div.fondo").length);i++){
          if(i<stackObj.stackControl.length){
            var dato=$("#stack>div.fondo>p")[($("#stack>div.fondo").length-1) - i];
            dato.innerText=stackObj.stackControl[i];
            dato.className="dato-informado";
            $(".form-control").val("");
          }
        }
        $("#under-stack>p:first-child").removeClass("overflow");
        $("#under-stack>p:first-child").parent().removeClass("fondo-under");
        $("#under-stack>p:first-child").text("");
      }
      else{
        $("#top-stack>p:first-child").text("Stack Overflow");
        $("#top-stack>p:first-child").addClass("overflow");
        $("#top-stack>p:first-child").parent().addClass("fondo-top");
      }
    }
  });

  $(".btn-danger").click(function(){
    if($("#stack").hasClass("active")){
      if(!stackObj.isEmpty()){
        stackObj.pop();
        var dato=$("#stack>div.fondo>p")[($("#stack>div.fondo").length-1)-(stackObj.stackControl.length)];
        dato.innerText="";
        dato.className="";
        $("#top-stack>p:first-child").removeClass("overflow");
        $("#top-stack>p:first-child").parent().removeClass("fondo-top");
        $("#top-stack>p:first-child").text("");
      }
      else{
        $("#under-stack>p:first-child").text("Stack Underflow");
        $("#under-stack>p:first-child").addClass("overflow");
        $("#under-stack>p:first-child").parent().addClass("fondo-under");
      }
    }
  });

  function creaStack(){
    html="";
    html+=' <div id="stack">';
    html+='  <div id="top-stack">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div class="fondo">';
    html+='    <p></p>';
    html+='  </div>';
    html+='  <div id="under-stack">';
    html+='    <p></p>';
    html+='  </div>';
    html+=' </div>';
  }
});
