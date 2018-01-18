function StackDataStructure (stack) {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
    return this.stackControl == 0;
}

StackDataStructure.prototype.canPush = function(a){
    if (this.stackControl.length >= this.MAX_SIZE){
        return false;
    }
    else {
        this.stackControl.push(a)
        return true;
    }
}

StackDataStructure.prototype.push = function(a){
    if(this.stackControl.length >= this.MAX_SIZE ){
        return 'Stack Overflow';
    }else{
        this.stackControl.push(a);
        return this.stackControl;
    }
}

StackDataStructure.prototype.pop = function(){
    if( this.stackControl.length <= 0){
        return "Stack Underflow"
    } else {
        return this.stackControl.pop()
    }
}
