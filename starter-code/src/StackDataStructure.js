class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty() {
        return this.stackControl.length <= 0;
    }

    canPush() {
        return !(this.stackControl.length >= this.MAX_SIZE);
    }

    push(item) {
        if (this.stackControl.length < this.MAX_SIZE) {
            this.stackControl.push(item);
            this.isEmpty();
            return this.stackControl;
        } else {
            return `Stack Overflow`;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return `Stack Underflow`;
        } else {
            return this.stackControl.pop();
        }
    }
}