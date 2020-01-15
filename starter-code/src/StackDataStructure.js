function StackDataStructure() {

    this.stackControl =[],
    this.MAX_SIZE = 7;
       
}

StackDataStructure.prototype.isEmpty = function() {
    return this.stackControl.length==0 ? true : false
}


StackDataStructure.prototype.canPush = function(){
    return (this.stackControl.length < this.MAX_SIZE)
}

StackDataStructure.prototype.push = function(elem){
    if (this.canPush()) {
        this.stackControl.push(elem)
        return this.stackControl
    }
    else {
        return "Stack Overflow"
    }

}

StackDataStructure.prototype.pop = function(){
    return this.isEmpty() ? 'Stack Underflow' : this.stackControl.pop();
}