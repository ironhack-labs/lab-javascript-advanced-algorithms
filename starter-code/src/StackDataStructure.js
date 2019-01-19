function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 2;
}

StackDataStructure.prototype.isEmpty = function(){
    if(this.stackControl.length === 0){
        return true;
    } return false;
}

StackDataStructure.prototype.canPush = function(){
    if(this.stackControl.length === this.MAX_SIZE){
        return false;
    } return true;
}

StackDataStructure.prototype.push = function(stack){
    
    if(this.stackControl.length === this.MAX_SIZE){
        return 'Stack Overflow';
    } else {
        this.stackControl.push(stack);
        return this.stackControl;
    }
}

StackDataStructure.prototype.pop = function(){
    if(this.stackControl.length < this.MAX_SIZE){
        return 'Stack Underflow';
    } else{
        return this.stackControl.pop();
    }
}
