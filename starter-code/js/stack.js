$( document ).ready(function() {
    stack = new StackDataStructure();

    stack.MAX_SIZE= 5;

    var counter = document.getElementById("input").value;
    console.log(counter);



    $(".add").on('click', function(e){

      if($("ul li:nth-child(2)").hasClass("blue")){
        var fifth = $("ul li:nth-child(1)").val();

        $("ul li:nth-child(1)").removeClass("grey");
        $("ul li:nth-child(1)").addClass("blue");
        if(stack.stackControl.length==4){
        stack.push(fifth);
        console.log(stack.stackControl);
      }
    }

      if($("ul li:nth-child(3)").hasClass("blue")){
        var fourth = $("ul li:nth-child(2)").val();

        $("ul li:nth-child(2)").removeClass("grey");
        $("ul li:nth-child(2)").addClass("blue");
        if(stack.stackControl.length==3){
        stack.push(fourth);
        console.log(stack.stackControl);
      }
    }


      if($("ul li:nth-child(4)").hasClass("blue")){
        var third = $("ul li:nth-child(3)").val();

        $("ul li:nth-child(3)").removeClass("grey");
        $("ul li:nth-child(3)").addClass("blue");
        if(stack.stackControl.length==2){
        stack.push(third);
        console.log(stack.stackControl);
      }
    }


      if($("ul li:nth-child(5)").hasClass("blue")){
        var second = $("ul li:nth-child(4)").val();
        console.log(second);

        $("ul li:nth-child(4)").removeClass("grey");
        $("ul li:nth-child(4)").addClass("blue");
        if(stack.stackControl.length==1){
        stack.push(second);
        console.log(stack.stackControl);
      }
      }

        var first = $("ul li:nth-child(5)").val();


        $("ul li:nth-child(5)").removeClass("grey");
        $("ul li:nth-child(5)").addClass("blue");
        if(stack.stackControl.length==0){
        stack.push(first);
        console.log(stack.stackControl);
      }


    });



    $(".take").on('click', function(e){

      if($("ul li:nth-child(4)").hasClass("grey")){
        var fifth = $("ul li:nth-child(1)").val();

        $("ul li:nth-child(5)").removeClass("blue");
        $("ul li:nth-child(5)").addClass("grey");
        if(stack.stackControl.length==1){
        stack.pop(stack.stackControl[0]);
        console.log(stack.stackControl);
      }
    }

      if($("ul li:nth-child(3)").hasClass("grey")){
        var fourth = $("ul li:nth-child(2)").val();

        $("ul li:nth-child(4)").removeClass("blue");
        $("ul li:nth-child(4)").addClass("grey");
        if(stack.stackControl.length==2){
        stack.pop(stack.stackControl[1]);
        console.log(stack.stackControl);
      }
    }


      if($("ul li:nth-child(2)").hasClass("grey")){
        var third = $("ul li:nth-child(3)").val();

        $("ul li:nth-child(3)").removeClass("blue");
        $("ul li:nth-child(3)").addClass("grey");
        if(stack.stackControl.length==3){
        stack.pop(stack.stackControl[2]);
        console.log(stack.stackControl);
      }
    }


      if($("ul li:nth-child(1)").hasClass("grey")){
        var second = $("ul li:nth-child(2)").val();
        console.log(second);

        $("ul li:nth-child(2)").removeClass("blue");
        $("ul li:nth-child(2)").addClass("grey");
        if(stack.stackControl.length==4){
        stack.pop(stack.stackControl[3]);
        console.log(stack.stackControl);
      }
      }


        $("ul li:nth-child(1)").removeClass("blue");
        $("ul li:nth-child(1)").addClass("grey");
        if(stack.stackControl.length==5){
        stack.pop(stack.stackControl[4]);
        console.log(stack.stackControl);
      }

    });

});
