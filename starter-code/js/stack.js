$(document).ready(function() {

    var stack1 = new StackDataStructure(); 


    $("#add").on("click", function(){         
        var inputText = $('input').val(); 
        if(inputText!==""){       
        stack1.addElement(inputText);
       $('#stack').prepend(`<li>${inputText}</li>`)
       $("input").val('');
        }
        else{ alert("Shake off ur laziness.. enter something!");}
    
    });

    $("#take").on("click", function(){
         $("#stack li:first-child").remove();
            stack1.removeElement();
        });
    
    })




