function StackDataStructure() {
    this.stackControl = []
    this.MAX_SIZE = 3

    this.isEmpty = function() {
        if (this.stackControl.length == 0) {
            return true
        } else {
            return false
        }
    }
    this.canPush = function() {
        if (this.stackControl.length + 1 > this.MAX_SIZE) {
            return false;
        } else {
            return true;
        }
    }
    this.push = function(elements) {
        if (this.stackControl.length == this.MAX_SIZE) {
            return "Stack Overflow"
        } else {
            this.stackControl.push(elements)
            return this.stackControl
        }
    };

    this.pop = function() {
        if (this.stackControl.length == 0) {
            return "Stack Underflow";
        } else {
            return this.stackControl.pop()
        }
    };
};