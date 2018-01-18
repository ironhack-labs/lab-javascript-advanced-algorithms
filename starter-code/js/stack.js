$(document).ready(function(){
 var soler = new StackDataStructure ();

    $(".btn-stack").on("click",function(){
      if(soler.canPush()){
        var value =$("input").val();
        soler.stackControl.push(value);
        console.log(soler.stackControl.length)
        $(".gray").last().removeClass("gray").addClass("blue").html('<p class="p"> ' + value + "</p>");
        }else{
        $(".gray").last().removeClass("gray").addClass("red").html('<p class="p">STACK OVERFLOW </p>');

        };
        });
    $(".btn-quers").on("click",function(){
        var value =$("input").val();
        soler.stackControl.pop(value);
        console.log(soler.stackControl.length);
        if(soler.stackControl.length==soler.MAX_SIZE-1){
         $(".red").last().addClass("grey").removeClass("red").html('<p class="p"> ' - value -"</p>"); 
        }else{
        $(".blue").first().removeClass("blue").addClass("gray").html('<p class=p> </p>');
        
    }});








});

