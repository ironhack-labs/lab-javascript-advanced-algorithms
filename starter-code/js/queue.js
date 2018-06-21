$(document).ready(function(){

    var stack = new StackDataStructure();
    var queue = new QueueDataStructure();
  
    $('.push').on('click', function () {
    


      
        if($("input:radio[id=radio1]").is(":checked")){

     var valueForm=$("#inputValue").val();
      if(valueForm!="") 
    {
        if (stack.canPush()){
            var ret=stack.push(valueForm);
            $(".message").html("MESSAGE: " + valueForm+" pushed");
            var order=stack.stackControl.length+1;
            $(".mainBoxStack div:nth-child("+ order+")")[0].style.backgroundColor="orange";
            $(".mainBoxStack div:nth-child("+ order+")")[0].innerHTML=valueForm;
        
     }
     else {
        var ret=stack.push(valueForm);

        $(".message").html("MESSAGE: " + ret);
     }
        
    } 
    else $(".message").html("MESSAGE: INTRODUCE VALOR");

       }

    else{

        var valueForm=$("#inputValue").val();
        if(valueForm!="") 
      {
          if (queue.canEnqueue()){
              var ret=queue.enqueue(valueForm);
              $(".message").html("MESSAGE: " + valueForm+" queued");
              var order=queue.queueControl.length+1;
              $(".mainBoxQueue div:nth-child("+ order+")")[0].style.backgroundColor="orange";

              for(var i=0;i<=order-2;i++){
              var p=2+i;
                $(".mainBoxQueue div:nth-child("+p+")")[0].innerHTML=queue.queueControl[i];
              }

       }
       else {
          var ret=queue.enqueue(valueForm);
  
          $(".message").html("MESSAGE: " + ret);
       }
          
      } 
      else $(".message").html("MESSAGE: INTRODUCE VALOR");
      
    }


  });

    
  $('.pop').on('click', function () {
    
    if($("input:radio[id=radio1]").is(":checked")){
    if (!stack.isEmpty()){

        var val=stack.pop();
        $(".message").html("MESSAGE: " + val+" pop");
        var order=stack.stackControl.length+2;
        $(".mainBoxStack div:nth-child("+ order+")")[0].style.backgroundColor="grey";
        $(".mainBoxStack div:nth-child("+ order+")")[0].innerHTML="";

    }
    else{
        var val=stack.pop();
        $(".message").html("MESSAGE: " + val);
    }


    }
    else  {

        if (!queue.isEmpty()){

            var val=queue.dequeue();
            $(".message").html("MESSAGE: " + val + " unqueued");
            var order=queue.queueControl.length+2;

            

                
                $(".mainBoxQueue div:nth-child("+order+")")[0].innerHTML="";
                
               

            $(".mainBoxQueue div:nth-child("+order+")")[0].style.backgroundColor="grey";
            
        }
        else{
            var val=queue.dequeue();
            $(".message").html("MESSAGE: " + val);
        }
    
    





    }


    });





  });

