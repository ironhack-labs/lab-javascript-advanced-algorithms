class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 10
    }

    isEmpty() {
        return this.stackControl.length === 0

    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    }
    push(err) {
        if (this.canPush()) {
            this.stackControl.push(err);
            return this.stackControl;
        } else {
            return 'Stack Overflow';
        }
    }
    pop() {
        if (this.isEmpty()) {
            return 'Stack Underflow'
        } else {
            return this.stackControl.pop()
        }
    }
}
