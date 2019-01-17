function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 5;
}

StackDataStructure.prototype.isEmpty = function(){
    return this.stackControl.length === 0
}

StackDataStructure.prototype.canPush = function(){
    return this.stackControl.length < this.MAX_SIZE;
}

StackDataStructure.prototype.push = function(element){
    if(this.canPush()){
        this.stackControl.push(element);
    }else{
        return "Stack Overflow"
    }
    if(this.stackControl === this.MAX_SIZE){
        return "Stack Overflow"
    }
   
    return this.stackControl;
}

StackDataStructure.prototype.pop = function(){
    if(this.isEmpty()){
        return "Stack Underflow"
    }
    return this.stackControl.pop()
}
