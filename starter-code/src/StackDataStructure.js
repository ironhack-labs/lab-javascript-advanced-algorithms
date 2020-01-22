class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 5
    }

    isEmpty() {
        if (this.stackControl.length <= 0) {
            return true
        }
        return false
    }

    canPush() {
        if (this.MAX_SIZE > this.stackControl.length) {
            return true
        }
        return false
    }

    push(elm) {
        if (this.canPush()) {
            this.stackControl.push(elm)
            return this.stackControl
        } else {
            return "Stack Overflow"
        }
    }

    pop() {
        if (!this.isEmpty()) {
            return this.stackControl.pop()
        }
        return "Stack Underflow"
    }
}