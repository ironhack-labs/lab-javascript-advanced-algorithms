function StackDataStructure () {
    this.stackControl = []
    this.MAX_SIZE = 8
}


StackDataStructure.prototype.isEmpty = function (){
    return this.stackControl.length===0
}

StackDataStructure.prototype.canPush = function(){
    return this.stackControl.length!==this.MAX_SIZE
}

StackDataStructure.prototype.push = function(element){
    if(this.canPush()){
        this.stackControl.push(element)
        return this.stackControl
    } else {return "Stack Overflow"}
}

StackDataStructure.prototype.pop = function(){
    if (this.isEmpty()){
        return "Stack Underflow"
    } else { return this.stackControl.pop()}
   
}