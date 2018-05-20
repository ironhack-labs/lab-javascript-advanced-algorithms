function StackDataStructure() {
    this.stackControl = [];
    this.max_size = 10;
}

StackDataStructure.prototype.isEmpty = function(){
    return this.stackControl.length === 0 ? true : false;
}

StackDataStructure.prototype.canPush = function(){
    return this.stackControl.length === this.max_size ? false : true; 
}

StackDataStructure.prototype.push = function(item){
    if(this.canPush()){
        this.stackControl.push(item)
    }else{
        return  'Stack Overflow';
    }
    return this.stackControl;
}
StackDataStructure.prototype.pop = function(){
    var lastItem;
    if(this.isEmpty()){
        return  'Stack Underflow';
    }else{
        lastItem = this.stackControl.pop();
    }
    return lastItem;
}