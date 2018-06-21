function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function() {
    return this.stackControl.length == 0;
}

StackDataStructure.prototype.canPush = function() {
    return this.stackControl <= this.MAX_SIZE;
}

StackDataStructure.prototype.push = function(e) {
    if (this.stackControl.length >= this.MAX_SIZE) {
        return "Stack Overflow"
    } else { 
        this.stackControl.push(e);
        return this.stackControl;
    }
}

StackDataStructure.prototype.pop = function() {
    if(this.isEmpty()) {
        return "Stack Underflow"
    } else {
        return this.stackControl.pop();
    }
}


