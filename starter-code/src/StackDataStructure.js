function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 10;

}


StackDataStructure.prototype.isEmpty = function () {
    if (this.stackControl.length > 0) {
        return false;
    } else {
        return true;
    }
}
StackDataStructure.prototype.canPush = function () {

    if (this.stackControl.length >= this.MAX_SIZE) {
        return false

    }
    return true;
}
StackDataStructure.prototype.push = function (element) {
    this.stackControl.push(element);
    if (this.stackControl.length === this.MAX_SIZE) {
        return "Stack Overflow"

    }
    return this.stackControl;


}
StackDataStructure.prototype.pop = function () {
    if (this.stackControl.length === 0) {
        return "Stack Underflow"
    } else {
        this.stackControl.pop();
    }
    return this.stackControl[this.stackControl.length - 1];
}