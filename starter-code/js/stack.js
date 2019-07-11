stack = new StackDataStructure();
document.getElementById("push_btn").onclick = function() {
    stack.push("something")
    let height = stack.stackControl.length;
    if (height <= 10){
       stack_point = document.getElementById(`s${height}`)     
       stack_point.setAttribute("class","col-6-md fill")
       stack_point.innerHTML = 'Added to Stack!!!!'
    }
    if (stack.canPush() == false)
    {
        stack_overflow = document.getElementById('s11')
        console.log(stack_overflow)
        stack_overflow.innerHTML = 'Stack Overflow !!!'
    }
}
 document.getElementById("pop_btn").onclick = function() {
    stack.pop("something")
    let height = stack.stackControl.length;
    stack_point = document.getElementById(`s${height+1}`)  
    stack_point.innerHTML = ''
  //  console.log(height)
    if (height <= 10){
        
            stack_overflow = document.getElementById('s11')
            console.log(stack_overflow)
            stack_overflow.innerHTML = ''
        
    }

}