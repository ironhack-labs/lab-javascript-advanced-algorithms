function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 7;
}

StackDataStructure.prototype.isEmpty = function () {
        return this.stackControl.length === 0;
}

StackDataStructure.prototype.canPush = function () {
    console.log('pode');
    if (this.stackControl.length !== this.MAX_SIZE) {
        return true;
    }
    return false;
}

StackDataStructure.prototype.push = function (item) {
    if (this.stackControl.length < this.MAX_SIZE) {
        this.stackControl.push(item);
        return this.stackControl;
    } else {
        return 'Stack Overflow';
    }
}

StackDataStructure.prototype.pop = function () {
    if (this.isEmpty()) {
        return 'Stack Underflow';
    } else {
        return this.stackControl.pop();
    }
}