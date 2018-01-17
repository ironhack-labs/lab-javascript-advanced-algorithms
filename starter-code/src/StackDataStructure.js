function StackDataStructure () {
    this.stackControl = [];
    this. MAX_SIZE = 10;
}
StackDataStructure.prototype.isEmpty = function(){
    return this.stackControl.length === 0;
}

StackDataStructure.prototype.canPush = function(){
    return (this.stackControl.length < this.MAX_SIZE);
}

StackDataStructure.prototype.push = function(e){
    if(this.canPush()){
        this.stackControl.push(e);
        return this.stackControl;
    }
    return 'Stack Overflow';
    
}

StackDataStructure.prototype.pop = function() {
    if (this.isEmpty()) {
        return this.stackControl.pop();
    } 
    return 'Stack Underflow';
}

