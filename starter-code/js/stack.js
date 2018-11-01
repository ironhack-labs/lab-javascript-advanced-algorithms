

$(function(){


  var stack = new StackDataStructure;



  $(".button1").on('click', function(e){


    stack.canPush();

    var value = $('input').val();
    var stackLength = this.stackControl.length-1;

    for(var i = 0; i > stackLength; i++){
      $(`stack${i}`).html(value);



    }
    var value = 0;
  

    
    
    
   
  })
  
  
  
  $(".stack10").html = ""
  
  
  
  
  
  
  
  
  
  
  $(".button2").on('click', function(e){
    console.log(e.target)
  })














})
