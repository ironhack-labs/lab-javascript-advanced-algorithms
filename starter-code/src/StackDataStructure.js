// Stack Data Structure contructor function
function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function() {
    return this.stackControl == false ? true : false;
};

StackDataStructure.prototype.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
};

StackDataStructure.prototype.push = function(element) {
    if (this.stackControl.length < this.MAX_SIZE) {
        this.stackControl.push(element);
        return this.stackControl;
    } else {
        return 'Stack Overflow';
    }
};

StackDataStructure.prototype.pop = function() {
    if (this.stackControl.length > 0) {
        return this.stackControl.pop();
    } else {
        return 'Stack Underflow';
    }
};
