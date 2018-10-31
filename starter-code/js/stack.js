window.onload = function () {
    var add_btn = document.querySelector('.add');
    var take_btn = document.querySelector('.take');
    var input_box = document.querySelector('#input-text');
    var stackClass = document.querySelector('.stack');
    var stack_value = 0;

    stack = new StackDataStructure();


    add_btn.addEventListener("click", function () {
        stack_value = input_box.value;
        if (stack.canPush()) {
            stack.push(stack_value);
            stack.stackControl.forEach((element, index) => {
                document.querySelector(`#s${index}`).innerHTML = element;
                document.querySelector(`#s${index}`).classList.add("active");
            });
        }else{
            alert("Stack Overflow");
        }

    })


    take_btn.addEventListener("click", function () {
        stack_value = input_box.value;
        if(){

        }else{
            
        }

    })




};


/* // Recorrer lista de div y añadir id stack
document.querySelectorAll('.stack').forEach(function(element) {
    if(element.classList[1] === "initial"){
        console.log(element.classList[1])
       element.innerText = lastStack;
       element.classList.add("active");
       
    }
   }); */