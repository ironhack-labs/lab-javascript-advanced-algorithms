function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 5;
    this.isEmpty = function () {
        if (this.stackControl.length === 0) {
            return true;
        }
        return false;
    };
    this.canPush = function () {
        if (this.stackControl.length === this.MAX_SIZE) {
            return false;
        }
        return true;
    };
    this.push = function (element) {
        if (this.stackControl.length === this.MAX_SIZE) {
            return "Stack Overflow";
        } else {
            this.stackControl.push(element);
            return this.stackControl;
        }
        
        
    };
    this.pop = function () {
        if (this.stackControl.length === 0) {
            return "Stack Underflow";
        } else {
             return this.stackControl[this.stackControl.length-1];
        }
       
    };
}

