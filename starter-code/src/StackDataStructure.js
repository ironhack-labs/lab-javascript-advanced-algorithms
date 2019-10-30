class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 8;
    };
    isEmpty() {
        if (this.stackControl.length === 0) {
            return true;
        } else {
            return false;
        }

    };
    canPush() {
        if (this.stackControl.length === this.MAX_SIZE) {
            ;console.log("over")
            return false;
        } else return true;
    };
    push(val) {
        this.stackControl.push(val);
        if (this.stackControl.length > this.MAX_SIZE) {
        
            return "Stack Overflow";
        }
        return this.stackControl;

    };
    pop(val) {
        if (this.stackControl.length === 0) {
            return 'Stack Underflow';
        } else
            return this.stackControl.pop(val)

    };

}

