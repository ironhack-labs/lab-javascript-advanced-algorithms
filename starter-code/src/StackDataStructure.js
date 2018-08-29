function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 9;
}

StackDataStructure.prototype.isEmpty = function () {
    if (this.stackControl.length === 0) {
        return true;
    } else {
        return false;
    }
}

StackDataStructure.prototype.canPush = function () {
    if ((this.isEmpty()) || this.stackControl.length < this.MAX_SIZE) {
        return true;
    } else if (this.stackControl.length === this.MAX_SIZE) {
        return false;
    }
}

StackDataStructure.prototype.push = function (e) {
    
    if (this.stackControl.length >= this.MAX_SIZE) {
        return 'Stack Overflow';
    } else {
        this.stackControl.push(e);
    }
    return this.stackControl;
}

StackDataStructure.prototype.pop = function () {
    if (this.isEmpty()) {
        return 'Stack Underflow';
    } else {
        return this.stackControl.pop();
    }
}