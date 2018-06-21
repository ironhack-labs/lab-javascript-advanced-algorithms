function StackDataStructure () {
 
    this.stackControl = [];
    this.MAX_SIZE = 8;
    
}


StackDataStructure.prototype.isEmpty = function(){
     return this.stackControl.length == 0;
     
};
StackDataStructure.prototype.canPush = function(){
    return this.stackControl.length < this.MAX_SIZE;
};
StackDataStructure.prototype.push = function(element){
    if (this.stackControl.length >= this.MAX_SIZE ){
        return "Stack Overflow";
    } else { 
    this.stackControl.push(element);
    return this.stackControl; }
     
};
StackDataStructure.prototype.pop = function(element){
    var lastElement = this.stackControl[this.stackControl.length -1];
    this.stackControl.pop(element);
    if (this.stackControl.length == 0){
        return "Stack Underflow";
    }
    return lastElement;
};


    
