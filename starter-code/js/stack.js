 $(document).ready(function(){

var stack = new StackDataStructure ();

     $('.btn-push').click(function(e){
        var value = $(".input").val()
         if (stack.canPush()){
            stack.stackControl.push(value)
            $('.grey').last().addClass('active').removeClass("grey").html("<p>" + value + "</p>")
         } else {
            $('.top').addClass('red').removeClass("active").html("<p> stack overflow biatch</p>")
         }


     })
     $('.btn-pop').click(function(e){
        var value = $(".input").val()
        
        console.log(stack.stackControl);
        if (stack.canPush()){
            $('.active').first().addClass("grey").removeClass('active').html("<p></p>");
            stack.stackControl.pop(value);
        } else if(stack.isEmpty()){
            $('.bottom').addClass('red').removeClass("grey").html("<p> stack underflow biatch</p>");
        } else {
            $('.top').addClass('grey').removeClass("red").html("<p></p>");
            stack.stackControl.pop(value);
        } 
    
  

        
    })
 })
 

 
 

