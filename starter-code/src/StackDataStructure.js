
class StackDataStructure {
    constructor() {
        this.stackControl = []; //properties
        this.MAX_SIZE = 12;
    }
    //actions

    isEmpty() {
        if (this.stackControl.length === 0) {
            return true
        } else {
            return false;
        }
    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    }

    push(element) {
        this.stackControl.push(element); 

        if (this.stackControl.length > this.MAX_SIZE) {
            return 'Stack Overflow'
        }
        return this.stackControl;
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack Underflow'
        } else {
            return this.stackControl.pop();
        }
    }
}


