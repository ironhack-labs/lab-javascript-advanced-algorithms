
function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 5;
}
StackDataStructure.prototype.isEmpty = function(){
    if (this.stackControl.length === 0){
        return true;
    }else{
        return false;
    }

}

StackDataStructure.prototype.canPush = function(){
    if (this.stackControl.length < this.MAX_SIZE){
        return true;
    }else{
        return false;
    }
}

StackDataStructure.prototype.push = function(input){
    if (this.canPush()){
        this.stackControl.push(input);
        return this.stackControl;
    }else{
    return "Stack Overflow";
    }
}

StackDataStructure.prototype.pop = function(){
    if(this.isEmpty()){
        return 'Stack Underflow';
    }
    return this.stackControl.pop()
    

}