function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function(){
 return (this.stackControl.length === 0) ? true : false
}
StackDataStructure.prototype.canPush = function(){
 return (this.stackControl.length < this.MAX_SIZE) ? true : false 
}
StackDataStructure.prototype.push = function(textAsk){
    if (this.canPush()){
        this.stackControl.push(textAsk);
        return this.stackControl
    } else return 'Stack Overflow'
}
StackDataStructure.prototype.pop = function(){
    if (this.isEmpty()) return 'Stack Underflow'
    else {
        return this.stackControl.pop();
    }

}

