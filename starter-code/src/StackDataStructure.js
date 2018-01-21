function StackDataStructure (max) {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function (){
    return this.stackControl.length === 0;
}

StackDataStructure.prototype.canPush = function(){
    return this.stackControl.length < this.MAX_SIZE;
}

StackDataStructure.prototype.push = function(el){
    if(this.canPush()){
        this.stackControl.push(el);
        return this.stackControl;
    }
    else {
        return 'Stack Overflow';
    }    
}

StackDataStructure.prototype.pop = function(){
    if(this.isEmpty()){
        return 'Stack Underflow';
    }
    else {
        return this.stackControl.pop();  
    }      
}

var stack = new StackDataStructure();
stack.push(1);
