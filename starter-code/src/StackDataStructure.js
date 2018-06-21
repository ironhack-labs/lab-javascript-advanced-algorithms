function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 8 ;
}

StackDataStructure.prototype.isEmpty = function () {
    if (this.stackControl.length === 0) {
        return true;
    }
    return false;
}

StackDataStructure.prototype.canPush = function () {
    if (this.stackControl.length <= this.MAX_SIZE){
        return true;
    }
    return false;
}

StackDataStructure.prototype.push = function (e) {
    this.stackControl.push(e);
    if (this.canPush()){
        return this.stackControl;
    }
    return "Stack Overflow"
}

StackDataStructure.prototype.pop = function () {
    if (this.isEmpty()){
        return "Stack Underflow";
    }
    return this.stackControl.pop();
}