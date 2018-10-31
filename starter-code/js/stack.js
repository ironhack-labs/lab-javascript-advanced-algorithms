
window.onload = function() {
    var add_btn = document.querySelector('.add');
    var take_btn = document.querySelector('.take');
    var input_box = document.querySelector('#input-text');
    var stackClass = document.querySelector('.stack');
    var stack_value = 0;

    stack = new StackDataStructure();


    add_btn.addEventListener("click",function(){
        stack_value = input_box.value;
        stack.push(stack_value);    
        var lastStack = stack.stackControl[stack.stackControl.length-1];
        // Recorrer lista de div y añadir id stack
        // index -> #s(index)
      
        document.querySelectorAll('.stack').forEach(function(element) {
         if(element.classList[1] === "initial"){
             console.log(element.classList[1])
            element.innerText = lastStack;
            element.classList.add("active");
            
         }
        });
        

    })
    take_btn.addEventListener("click",function(){
     
    })


   

};

