class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 10
    }

    isEmpty() {
        if (this.stackControl.length == 0) {
            return true

        } else {
            return false
        }

    }

    canPush() {
        if (this.MAX_SIZE != this.stackControl.length) {
            return true

        } else {
            return false
        }

    }

    push(parameter) {
        if (this.MAX_SIZE == this.stackControl.length) {
            return 'Stack Overflow'
        } else {
            this.stackControl.push(parameter)
            return this.stackControl

        }

    }

    pop() {
        if (this.stackControl.length == 0) {
            return 'Stack Underflow'
        } else {
            return this.stackControl.pop()
        }
    }

}