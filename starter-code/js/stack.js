window.onload = function () {
    myapp();
    myapp_queue();
};

function myapp(){
    var add_btn = document.querySelector('.add');
    var take_btn = document.querySelector('.take');
    var input_box = document.querySelector('#input-text');
    var stack_overflow = document.querySelector('.stack-overflow');
    var stack_underflow = document.querySelector('.stack-underflow');
    // Hide elements from the DOM 
    stack_overflow.style.display = "none";
    stack_underflow.style.display = "none";
    var stack_value = 0;

    // Create new object stack
    stack = new StackDataStructure();

    // Control event listeners for add and take buttons in the stack
    add_btn.addEventListener("click", function () {
        stack_underflow.style.display = "none";
        stack_value = input_box.value;
        if (stack.canPush()) {
            stack.push(stack_value);
            stack.stackControl.forEach((element, index) => {
                document.querySelector(`#s${index}`).innerHTML = element;
                document.querySelector(`#s${index}`).classList.add("active");
            });
        } else {
            stack_overflow.style.display = "block";
        }
    })

    take_btn.addEventListener("click", function () {
        stack_overflow.style.display = "none";
        stack_value = input_box.value;
        if (!stack.isEmpty()) {
            stack.pop();
            var arr = stack.stackControl.slice().reverse()
            document.querySelector(`#s${arr.length}`).innerHTML = "";
            document.querySelector(`#s${arr.length}`).classList.remove("active");
        } else {
            stack_underflow.style.display = "block";
        }

    })
}
