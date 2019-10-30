class StackDataStructure {
    constructor(){
        this.stackControl = [];
        this.MAX_SIZE = 9;
    }

    isEmpty(){
        if (this.stackControl == ''){return true}
        return false;
}

canPush(){
if (this.stackControl.length == this.MAX_SIZE){return false}
return true;
}

push(argPushed){
    if (this.stackControl.length == this.MAX_SIZE){
        return "Stack Overflow";
    }
    else {this.stackControl.push(argPushed)
    return this.stackControl;}
}

pop(argPoped){
    if(this.stackControl.length == 0){
        return "Stack Underflow";
    }else{
    return this.stackControl.pop();
    }
}




}

// function StackDataStructure () {
// }
