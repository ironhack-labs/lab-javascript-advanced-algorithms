class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 10

    }
    isEmpty() {
        return this.stackControl == 0

    }
    canPush() {
        return this.stackControl.length < this.MAX_SIZE

    }
    push(elm) {
        if (this.stackControl.length == this.MAX_SIZE) {
            return `Stack Overflow`
        } else {
            this.stackControl.push(elm)
            return this.stackControl
        }

    }
    pop(elm) {
        if (this.stackControl.length == 0) {
            return `Stack Underflow`
        } else {
            return this.stackControl.pop(elm)
        }
    }
}
const stacks = new StackDataStructure()