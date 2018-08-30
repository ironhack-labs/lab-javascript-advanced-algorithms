function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
    return this.stackControl.length === 0;
}

StackDataStructure.prototype.canPush = function () {
    return this.stackControl.length < this.MAX_SIZE;
}

StackDataStructure.prototype.push = function (item) {
    if (this.canPush()){
        this.stackControl.push(item);
        this.isEmpty();
        return this.stackControl;
    } else {
        return 'Stack Overflow';
    }    
}

StackDataStructure.prototype.pop = function () {
    if (!this.isEmpty()) {
        lastElement = this.stackControl[this.stackControl.length-1]
        this.stackControl.pop()
        return lastElement;
    } return 'Stack Underflow'
}

