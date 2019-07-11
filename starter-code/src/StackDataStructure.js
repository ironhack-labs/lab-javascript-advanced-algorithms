class StackDataStructure {
    constructor(){
        this.stackControl = []
        this.MAX_SIZE = 7
    }
isEmpty(){
    if (this.stackControl.length == 0){
        return true
    }
    else {
        return false
    }
}
canPush(){
    if (this.stackControl.length < this.MAX_SIZE){
        return true
    }
    else{
        return false
    }
}
push(x){
    if (this.canPush()){
        this.stackControl.push(x)
        return this.stackControl
    }
    else {
        return ("Stack Overflow")
    }
}
pop(){
    if(this.stackControl.length != 0){
        console.log(this.stackControl.length)
        this.stackControl.pop()
        return this.stackControl[this.stackControl.length-1]
    }
    else {
        return ("Stack Underflow")
    }
}
}
let stack = new StackDataStructure()
document.getElementsByClassName("add")[0].onclick = function() {
    if (stack.canPush()){
        document.getElementsByClassName("box")[7-stack.stackControl.length].innerHTML = document.getElementsByTagName("input")[0].value
        stack.push(document.getElementsByTagName("input")[0].value)
        console.log(stack.stackControl)

    }
    else{
        document.getElementsByClassName("box")[0].innerHTML = "Stack Overflow"
        console.log(stack.stackControl)

    }
}
document.getElementsByClassName("remove")[0].onclick = function() {
    if (!stack.isEmpty()){
        console.log(stack.stackControl.length)
        document.getElementsByClassName("box")[8-stack.stackControl.length].innerHTML = ""
        stack.stackControl.pop()
        console.log(stack.stackControl)
    }
    else{
        document.getElementsByClassName("box")[stack.MAX_SIZE].innerHTML = "Stack Underflow"
        console.log(stack.stackControl)

    }
}
