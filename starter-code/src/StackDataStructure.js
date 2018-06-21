var StackDataStructure = function() {
    this.stack = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.canPush = function () {
    var _this = this;
    if (_this.stack.length === _this.MAX_SIZE) {
        return false;
    } else {
        return true;
    }
}

StackDataStructure.prototype.push = function(input) {
    var _this = this;
    if (_this.canPush()) {
        _this.stack.push(input);
        return _this.stack;
    } else {
        return 'Stack Overflow';
    }
    
}

StackDataStructure.prototype.isEmpty = function() {
    var _this = this;
    if (_this.stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

StackDataStructure.prototype.pop = function() {
    var _this = this;
    if (!_this.isEmpty()){
    _this.stack.pop();
} else {
    return 'Stack Underflow';
}
}

