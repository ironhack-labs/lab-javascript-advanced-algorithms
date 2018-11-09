$(document).ready(function(){
    stackDataStructure = new StackDataStructure()
    var originalTask = '<li class="list-group-item elem-itm">ITEM 1</li>'
    $(".add-btn").on("click", function(){
        var itm = $(".input-element").val()
        stackDataStructure.stackControl.push(itm)
        $(".elem-itm").each(function(index, element){
            $("this").append(itm)
            console.log(index, element)
        })
 
       
        $(".input-element").val("")
    })
   
   
    })
  

        // stackDataStructure.stackControl.forEach(function(elem){
        //     $(".elem-itm").html(item)
        //     console.log(elem + " this")
        // })
        
        //$(".elem-itm").html(item)


        
       // console.log(stackDataStructure.stackControl)
        
   
    
// });

