class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 8
    }

    isEmpty() {
        if (this.stackControl.length == 0) { return true }
        else { return false }
    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) { return true }
        else { return false }

    }

    push(x) {
        if (this.stackControl.length == this.MAX_SIZE) {
            return 'Stack Overflow'
        }
        this.stackControl.push(x)
        return this.stackControl
    }

    pop(x) {
        if (this.stackControl.length == 0) {
            return 'Stack Underflow'
        }
        return this.stackControl.pop(x)

    }
}