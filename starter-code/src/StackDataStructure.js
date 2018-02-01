function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = (10);
}; 
StackDataStructure.prototype.isEmpty = function(){
    if (this.stackControl.length === 0){
        return true;
    }
    else{
        return false;
    }
};
StackDataStructure.prototype.canPush = function() {
    if (this.stackControl.MAX_SIZE < 10){
        return true;
    }
    else{
        return false;
    }
};

StackDataStructure.prototype.push = function() {
    if (this.canPush()) {
        this.stackControl.unshift();
        return this.stackControl;
    }else{
        return "Stack Overflow"
    }
}
StackDataStructure.prototype.pop = function() {
    if (this.isEmpty()) {
        return "Stack Underflow"
    }else{
        return this.stackControl.pop;
    }
   
};


 