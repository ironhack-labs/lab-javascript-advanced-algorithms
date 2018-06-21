function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 15;
}
StackDataStructure.prototype.isEmpty = function () {
    return this.stackControl.length === 0;

}
StackDataStructure.prototype.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
        return true;
    } else {
        return false;
    }
}
StackDataStructure.prototype.push = function (a) {
    this.stackControl.push(a);
    if(!this.canPush()){
        return "Stack Overflow";
    }else{
        return this.stackControl;
    }
}
StackDataStructure.prototype.pop = function () {
    var pop = this.stackControl.pop();
    if (this.isEmpty()) {
        return "Stack Underflow";

    } else {
        return pop;
    }
}
