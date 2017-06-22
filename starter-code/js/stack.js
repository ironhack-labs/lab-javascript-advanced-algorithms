$(document).ready(function() {
      var stack;
      stack = new StackDataStructure();
      id = stack.MAX_SIZE;

      $(".add-stack").click(function() {
        
          //stack.push(id);
          $("div.row-stack:nth-child(" + id +")").css("background-color","blue");
          id--;
          console.log(stack.push(id));
      });

});
