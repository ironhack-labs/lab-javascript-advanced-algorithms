function StackDataStructure () {
    this.stackControl = [],
    this.MAX_SIZE = 9
}

StackDataStructure.prototype.push = function(element) {
    if(this.canPush()) {
        this.stackControl.push(element);
        return this.stackControl;
    }
    return "Stack Overflow";
}

StackDataStructure.prototype.pop = function() {
    if(this.isEmpty()) {
        return "Stack Underflow";
    }
    return this.stackControl.pop();
}

StackDataStructure.prototype.canPush = function() {
    if(this.stackControl.length < this.MAX_SIZE) {
        return true;
    }
    return false;
}

StackDataStructure.prototype.isEmpty = function() {
    if(this.stackControl.length === 0) {
        return true;
    }
    return false;
    
}