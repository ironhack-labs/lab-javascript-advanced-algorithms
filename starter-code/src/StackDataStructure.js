function StackDataStructure () {
    this.stackControl=[];
    this.MAX_SIZE=7;
}

StackDataStructure.prototype.isEmpty = function(){           return this.stackControl.length>0?false:true
}    

StackDataStructure.prototype.canPush =function(){
    return  this.isEmpty() || this.stackControl.length<this.MAX_SIZE}

StackDataStructure.prototype.push = function(item) {
    if (this.canPush()){
        this.stackControl.push(item);
        return this.stackControl
    }
        return 'Stack Overflow'
}   
StackDataStructure.prototype.pop =function(){
    if (!this.isEmpty()){
        this.stackControl.pop();
    } else { 'Stack Underflow'}
}

