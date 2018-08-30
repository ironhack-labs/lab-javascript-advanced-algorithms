let stack = new StackDataStructure();

document.getElementById("add-element").addEventListener("click", function (){
    document.getElementById("alert-underflow").classList.add("underflow");
    document.getElementById("alert-underflow").classList.remove("underflow-show");
    if (stack.push(document.getElementById("input").value) === "Stack Overflow"){
        document.getElementById("alert-overflow").classList.remove("overflow");
        document.getElementById("alert-overflow").classList.add("overflow-show");

    } else {
        for (let i = 0; i < stack.stackControl.length; i++) {
            if (i === 0) {
                document.getElementById("s"+i).innerHTML = stack.stackControl[0];
                document.getElementById("s"+i).classList.add("btn-primary");
                document.getElementById("s"+i).classList.remove("btn-secondary");
            } else if (i > 0) {
                document.getElementById("s"+i).innerHTML = stack.stackControl[i];
                document.getElementById("s"+i).classList.add("btn-primary");
                document.getElementById("s"+i).classList.remove("btn-secondary");
            }   
        }  
    }    
})

document.getElementById("rem-element").addEventListener("click", function () {

    let ispop = stack.pop();
    document.getElementById("s"+stack.stackControl.length).innerHTML ="a";
    document.getElementById("s"+stack.stackControl.length).classList.remove("btn-primary");
    document.getElementById("s"+stack.stackControl.length).classList.add("btn-secondary");
    document.getElementById("alert-overflow").classList.remove("overflow-show");
    document.getElementById("alert-overflow").classList.add("overflow");
    if (ispop === "Stack Underflow") {
        document.getElementById("alert-underflow").classList.remove("underflow");
        document.getElementById("alert-underflow").classList.add("underflow-show");
    } else {
        for (let i = stack.stackControl.length; i > 0; i--) {
            document.getElementById("s"+(i-1)).innerHTML = stack.stackControl[(i-1)];
        }    
    }
   
})

