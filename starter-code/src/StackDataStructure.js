function StackDataStructure () {
    this.stackControl=[];
    this.MAX_SIZE = 2  ;

}

StackDataStructure.prototype.isEmpty= function(){
    return this.stackControl.length == 0
};

StackDataStructure.prototype.canPush = function(){
    return this.stackControl.length < this.MAX_SIZE
};

StackDataStructure.prototype.push = function(number){
    if (this.canPush()){
        this.stackControl.push(number);
        return this.stackControl
    }else {
        this.stackControl.pop();
        return "Stack Overflow"   
    }
};

StackDataStructure.prototype.pop = function(){
    if (this.stackControl.length < this.MAX_SIZE){
        return "Stack Underflow"
    }else {
            return this.stackControl.pop();
    }
};