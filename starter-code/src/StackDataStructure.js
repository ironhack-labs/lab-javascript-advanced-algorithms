var Stack = function StackDataStructure() {
    this.stackArray = [];
    this.maxElements = 10;
    this.minElements = 1;
};

Stack.prototype.add = function(input) {
    if (this.canAddMore()) this.stackArray.push(input);
};

Stack.prototype.take = function() {
    if (this.canTake()) this.stackArray.pop();
};

Stack.prototype.canAddMore = function() {
    if (this.stackArray.length < this.maxElements) return true;
    else return false;
};

Stack.prototype.canTake = function() {
    if (this.stackArray.length >= this.minElements) return true;
    else return false;
};
