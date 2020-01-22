class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 8;
    }
    isEmpty() {
        if (this.stackControl.length === undefined || this.stackControl.length === 0) {
            return true;
        }
        return false;
    }
    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true;
        }
        return false;
    }
    push(stack) {
        if (this.canPush(stack) === true) {
            this.stackControl.push(stack)
            return this.stackControl
        }
        return 'Stack Overflow'
    }
    pop(stack) {
        if (this.isEmpty(stack) === true) {
            return 'Stack Underflow'
        }
        return this.stackControl.pop(stack)
    }
}