function StackDataStructure() {
    this.MAX_SIZE = 4
    this.stackControl = []
    this.isEmpty = function () {
        if (this.stackControl.length === 0) return true;
        return false;
    }
    this.canPush = function () {
        if (this.stackControl.length >= this.MAX_SIZE) {return false};
        return true;
    }
    this.push = function (value) {
        if (this.stackControl.length >= this.MAX_SIZE) {return "Stack Overflow"};
        this.stackControl.push(value);
        return this.stackControl;
    }
    this.stack = function () { }
    this.pop = function () {
        if (this.stackControl.length === 0) {return "Stack Underflow"}; 
        return this.stackControl.pop()
     }
}