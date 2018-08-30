function init() {

  var myStack = new StackDataStructure();
  

  $("#add-stack").click(function(){ //adds the input to the last div
    var input = $("#input-stack").prop("value");

    if (input==="") {
      return
    }
  
    if(myStack.canPush()){
      myStack.push(input);
      $(".underflow").css("display", "none");
      for (let i = 7; i >= 0; i--){
        $($(".cell")[7-i]).text(myStack.stackControl[i]);
      }
    //$("#input-stack").val(""); esto reinicia el input en cada ADD. Lo comento por la salud mental del TA

    } else {
      $(".overflow").css("display", "block");
    }  
  })

  //-----------------------------------------------------------------

  $("#take-stack").click(function(){ //removes last element
  
    if(!myStack.isEmpty()){

      let divs = $(".cell");
      myStack.stackControl.pop();
      $(".overflow").css("display", "none");
      
      for (let i = 7; i >= 0; i--){
        if(myStack.stackControl[i] == undefined) {
          $(divs[7-i]).text("");
        } else {
          $(divs[7-i]).text(myStack.stackControl[i]);        
        }
      }
    
    }else {
      $(".underflow").css("display", "block");

    }
  });
   
}

$(document).ready(init());