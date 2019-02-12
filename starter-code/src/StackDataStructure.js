function StackDataStructure(){
    this.stackControl = [];
    this.MAX_SIZE=10;
    this.top = 0;
}


StackDataStructure.prototype.isEmpty = function(){
    if(this.stackControl.length == 0){
	return true
    }
    return false
}




StackDataStructure.prototype.canPush = function(){
    if(this.stackControl.length < this.MAX_SIZE){
	return true
    }
    return false
}

StackDataStructure.prototype.push = function(element){
    if(this.canPush())
    {
	this.stackControl[this.top++] = element
	return this.stackControl

    }
    return "Stack Overflow"
    
}


StackDataStructure.prototype.pop = function(element){
    if(this.isEmpty()) return 'Stack Underflow';
    let last = this.stackControl.length - 1
    return    this.stackControl[last]
}








