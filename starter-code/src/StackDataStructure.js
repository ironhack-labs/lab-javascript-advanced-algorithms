function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = function () {
        return (this.stackControl.length === 0) ? true : false;
    }
    this.canPush = function () {
        return (this.stackControl.length < this.MAX_SIZE) ? true : false;
    }
    this.push = function (arg) {
        if (this.canPush()) {
            this.stackControl.push(arg);
            return this.stackControl;
        } else {
            return "Stack Overflow";
        }
    }
    this.pop = function () {
        return (this.isEmpty()) ? 'Stack Underflow' : this.stackControl.pop();
    }
    this.stackControl
}
