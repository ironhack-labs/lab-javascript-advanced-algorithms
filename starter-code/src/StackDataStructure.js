class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 10
    }

    isEmpty() {
        return (this.stackControl.length == 0) ? true : false
    }

    canPush() {
        return this.MAX_SIZE != this.stackControl.length ? true : false
    }

    push(val) {
        if (this.canPush()) {
            this.stackControl.push(val)
            return this.stackControl
        } else {
            return "Stack Overflow"
        }
    }

    pop() {
        console.log(this.stackControl)
        console.log(this.isEmpty())
        return this.isEmpty() ? "Stack Underflow" : this.stackControl.pop()
    }
}