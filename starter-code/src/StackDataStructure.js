function StackDataStructure() {
    this.stackControl = []
    this.MAX_SIZE = 10
};

StackDataStructure.prototype.isEmpty = function () {
    if (this.stackControl.length == 0) {
        return true;
    } else {
        return false;
    }
    // do stuff
};


StackDataStructure.prototype.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
        return true;
    } else {
        return false;
    }
};


StackDataStructure.prototype.push = function (num) {
    if (this.stackControl.length == this.MAX_SIZE) {
        return 'Stack Overflow'
    } else {
        this.stackControl.push(num);
    }
    return this.stackControl
}

StackDataStructure.prototype.pop = function () {
    if (this.isEmpty()){
        return 'Stack Underflow'
    } else {
        return this.stackControl.pop();
    }

}



