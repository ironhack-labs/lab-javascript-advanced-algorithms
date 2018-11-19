$(document).ready(function(){
  var html="";
  var queueObj=new QueueDataStructure();

  $("#queue").click(function(){
      if(!$(this).hasClass("active")){
        $(this).addClass("active");
        $("#stack").removeClass("active");
      }
      $("#tipo").empty();
      queueObj.clear();
      creaQueue();
      $("#tipo").html(html);
  });

  $(".btn-success").click(function(){
    if($("#queue").hasClass("active")){
      if(queueObj.canEnqueue()){
        queueObj.enqueue($(".form-control").val());
        for(let i=0;i<($("#queue>div.fondoQ").length);i++){
          if(i<queueObj.queueControl.length){
            var dato=$("#queue>div.fondoQ>p")[($("#queue>div.fondoQ").length-1) - i];
            dato.innerText=queueObj.queueControl[(queueObj.queueControl.length-1)-i];
            dato.className="dato-informadoQ";
            $(".form-control").val("");
          }
        }
        $("#under-queue>p:first-child").removeClass("overflow");
        $("#under-queue>p:first-child").parent().removeClass("fondo-under");
        $("#under-queue>p:first-child").text("");
      }
      else{
        $("#top-queue>p:first-child").text("Queue Overflow");
        $("#top-queue>p:first-child").addClass("overflow");
        $("#top-queue>p:first-child").parent().addClass("fondo-top");
      }
    }
  });

  $(".btn-danger").click(function(){
    if($("#queue").hasClass("active")){
      if(!queueObj.isEmpty()){
        queueObj.dequeue();
        var dato=$("#queue>div.fondoQ>p.dato-informadoQ").first();
        dato.text("");
        dato.removeClass("dato-informadoQ");
        for(let i=0;i<($("#queue>div.fondoQ").length);i++){
          if(i<queueObj.queueControl.length){
            var dato=$("#queue>div.fondoQ>p")[($("#queue>div.fondoQ").length-1) - i];
            dato.innerText=queueObj.queueControl[(queueObj.queueControl.length-1)-i];
            dato.className="dato-informadoQ";
          }
        }
        $("#top-queue>p:first-child").removeClass("overflow");
        $("#top-queue>p:first-child").parent().removeClass("fondo-top");
        $("#top-queue>p:first-child").text("");
      }
      else{
        $("#under-queue>p:first-child").text("Queue Underflow");
        $("#under-queue>p:first-child").addClass("overflow");
        $("#under-queue>p:first-child").parent().addClass("fondo-under");
      }
    }
  });

  function creaQueue(){
    html="";
    html+=' <div id="queue">'
    html+='   <div id="top-queue">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div class="fondoQ">'
    html+='     <p></p>'
    html+='   </div>'
    html+='   <div id="under-queue">'
    html+='     <p></p>'
    html+='   </div>'
    html+=' </div>'
  }
});
