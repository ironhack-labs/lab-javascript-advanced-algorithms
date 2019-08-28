
class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 5
    }

    isEmpty() {
        if (this.stackControl.length === 0) {
            return true
        } else {
            return false
        }
    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }

    push(element) {
        if (this.canPush()) {
            this.stackControl.push(element)
            return this.stackControl
        } else {
            return "Stack Overflow"
        }
    }

    pop() {
        if (!this.isEmpty()) {
            return this.stackControl.pop()
        } else {
            return "Stack Underflow"
        }
    }


}