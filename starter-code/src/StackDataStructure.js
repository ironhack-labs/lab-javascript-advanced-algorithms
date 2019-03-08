function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 5;
}

StackDataStructure.prototype.isEmpty = function() {
    if (this.stackControl.length == 0) {
        return true;
    } else { return false }
}

StackDataStructure.prototype.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
        return true;
    }
    return false;
    
}

StackDataStructure.prototype.push = function (el) {
    if (this.canPush() == true) {
    this.stackControl.push(el);
    return this.stackControl;
    }
    return "Stack Overflow";
}

StackDataStructure.prototype.pop = function (el) {
    if (this.isEmpty() == false) {
    return this.stackControl.pop(el);
    } 
    return 'Stack Underflow'
}
