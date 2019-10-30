class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 6;
    }

    isEmpty() {
        if (this.stackControl.length >= 1) {
            return false
        }
        return true
    }
    canPush() {
        if (this.stackControl.length === this.MAX_SIZE) { return false }
        return true
    }

    push(element) {
        if (this.stackControl.length === this.MAX_SIZE) {
            return 'Stack Overflow'
        }
        this.stackControl.push(element)
        return this.stackControl
    }

    pop() {
        if (this.stackControl.length <= 0) {
            return 'Stack Underflow'
        }
        return this.stackControl.pop()
         
    }
}

