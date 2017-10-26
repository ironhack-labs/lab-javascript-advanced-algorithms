$(function() {
    var stack = new StackDataStructure();


    $('#stack .add').click(function() {
        if(stack.canPush()) {
          stack.push($('#stack input').val() || 'Element');
          updateStackView();
          $("#stack .underflow").addClass("hidden");
        } else {
          $('#stack .overflow').removeClass('hidden');
        }
    });
    $('#stack .remove').click(function() {
        if(!stack.isEmpty()) {
          $("#stack .overflow").addClass("hidden");
          stack.pop();
          updateStackView();
        } else {
          $('#stack .underflow').removeClass('hidden');
        }
    });

    function updateStackView(){
      for(var i = 0; i < stack.stackControl.length; i++){
        var selector = "#stack-elements div:nth-child("+(stack.MAX_SIZE - i)+")";
        $(selector).html(stack.stackControl[i]);
        $(selector).addClass("filled");
      };
      //CONTINUE THE ITERATION FOR THE REST OF ITEMS
      for(var i; i < stack.MAX_SIZE; i++){
        var selector = "#stack-elements div:nth-child("+(stack.MAX_SIZE - i)+")";
        $(selector).html("");
        $(selector).removeClass("filled");
      }
    }
});
