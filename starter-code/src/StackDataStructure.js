function StackDataStructure() {
    this.stack = [];
    this.size = 10;
}

StackDataStructure.prototype.isEmpty = function() {
    if ((this.stack.length == 0)) {
        return true;
    }
};

StackDataStructure.prototype.canPush = function() {
    if (stack.length < this.size) {
        return true;
    }
};

StackDataStructure.prototype.push = function(e) {
    if (this.canPush()) {
        this.stack.push(e);
    }
};

StackDataStructure.prototype.pop = function () {
    if (!this.isEmpty()) {
        this.stack.pop();
    }
}

var myStack = new StackDataStructure();