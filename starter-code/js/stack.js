
$(document).ready(function () {
    var stack = new StackDataStructure;
   
    
        $('#add').on('click', function () {
            var text = $('#inputText').val();
            if(stack.canPush(text)===true && text!=null){
            stack.push(text);
            $('<li class="item">"text"<li>').insertAfter('#stack');


           }
    
        });
      
        $('#take').on('click', function () {
          stack.pop();
        
    
        });

   
});