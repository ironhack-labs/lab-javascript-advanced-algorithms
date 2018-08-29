function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 2;
}

StackDataStructure.prototype.isEmpty = function () {
    return this.stackControl.length === 0;
}

StackDataStructure.prototype.canPush = function () {
    return this.stackControl.length < this.MAX_SIZE

}

StackDataStructure.prototype.push = function (e) {
    if (this.canPush()) {
        this.stackControl.push(e);
        return this.stackControl;
    } else {
        return "Stack Overflow";
    }
}

StackDataStructure.prototype.pop = function () {
    if(this.isEmpty()){
        return "Stack Underflow";
    } else {
        return this.stackControl.splice(-1, 1)[0];    
    }
    
}
