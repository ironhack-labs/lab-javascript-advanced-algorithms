$(document).ready(function(){

  let stackSample = new StackDataStructure
  console.log(stackSample.MAX_SIZE);

  var formattedTask = ("<div id='stackOver' class='btn btn-danger btn-lg btn-block' style='display:none' disabled>&nbsp</div>");
  $(".stack").append(formattedTask);

  for(var i = stackSample.MAX_SIZE -1; i >= 0 ; i--)
  {
    console.log(i);
    var formattedTask = ("<div id=stack"+ i +" class='btn btn-default btn-lg btn-block' disabled>&nbsp</div>");
    $(".stack").append(formattedTask);
  }

  var formattedTask = ("<div id='stackUnder' class='btn btn-danger btn-lg btn-block' style='display:none' disabled>&nbsp</div>");
  $(".stack").append(formattedTask);

  $("#btnAdd").on("click", function() {
    var newTask = $("#inputText").val();
    $("#inputText").val("");
    $("#qty").text("");

    let buttonID = "#stack";

    let arrayStack = stackSample.push(newTask);

    if(arrayStack != "Stack Overflow")
    {
      for(var i = 0; i < arrayStack.length ; i++)
      {
        //console.log(buttonID);
        let btnID = buttonID + i;

        $(btnID).removeClass("btn-default");
        $(btnID).addClass("btn-primary");
        $(btnID).text(arrayStack[i]);
      } 
    }
    else
    {
      // var formattedTask = ("<div class='btn btn-danger btn-lg btn-block' disabled>"+arrayStack+"</div>");
      // $(".stack").append(formattedTask);
      $("#stackOver").css("display","block");
      $("#stackOver").text(arrayStack);
      $("#btnAdd").attr("disabled",true);
      $("#btnTake").attr("disabled",true);
    }
  });

  $("#btnTake").on("click", function() {
    let buttonID = "#stack";
    $("#inputText").val("");

    let arrayStack = stackSample.pop();

    if(arrayStack != "Stack Underflow")
    {
      
      let btnID = buttonID + (stackSample.stackControl.length);

      $(btnID).removeClass("btn-primary");
      $(btnID).addClass("btn-default");
      $(btnID).text("\u00a0");

      $("#qty").text(arrayStack);
    }
    else
    {
      // var formattedTask = ("<div class='btn btn-danger btn-lg btn-block' disabled>"+arrayStack+"</div>");
      // $(".stack").append(formattedTask);
      $("#stackUnder").css("display","block");
      $("#stackUnder").text(arrayStack);
      $("#btnAdd").attr("disabled",true);
      $("#btnTake").attr("disabled",true);
    }
  });
});