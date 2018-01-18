function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 5;

}
StackDataStructure.prototype.isEmpty = function () {
    return this.stackControl.length == 0

}
StackDataStructure.prototype.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
        return true;
    } else {
        return false;
    }
}
StackDataStructure.prototype.push = function (value) {
    this.stackControl.push(value);
    if (this.stackControl.length > this.MAX_SIZE) {
        return 'Stack Overflow';
    } else {
        return this.stackControl;
    }

}
StackDataStructure.prototype.pop = function () {
    if (this.stackControl.length == 0) {
        return 'Stack Underflow'
    }
    return this.stackControl.pop();
}