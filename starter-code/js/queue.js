$(document).ready(function() {

    var queue1 = new QueueDataStructure(); 


    $("#addQ").on("click", function(){         
        var inputText = $("#Qtext").val(); 
       
        if(inputText!==""){       
        queue1.addElement(inputText);
       $('#queue').prepend(`<li>${inputText}</li>`)
       $("#Qtext").val('');
        }
        else{ alert("Shake off ur laziness.. enter something!");}
    
    });

    $("#takeQ").on("click", function(){
         $("#queue li:last-Child").remove();
            queue1.removeElement();
        });
    
    })