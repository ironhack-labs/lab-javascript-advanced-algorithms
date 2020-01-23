class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 5

    }
    isEmpty() {
        if (this.stackControl.length == 0) {
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

    push(elem) {
        if (this.canPush()) {
            this.stackControl.push(elem)
            this.convertBlue
            return this.stackControl
        }
        if (this.stackControl > this.MAX_SIZE) {
            return "Stack Overflow"
        }
    }

    pop() {

        if (this.isEmpty()) {
            return "Stack Underflow"
        } else {
            this.convertWhite
            return this.stackControl.pop()
        }
    }
}

