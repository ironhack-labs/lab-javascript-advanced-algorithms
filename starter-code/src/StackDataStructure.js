class StackDataStructure {
    constructor() {
        (this.stackControl = []), (this.MAX_SIZE = 10);
    }
    isEmpty() {
        if (this.stackControl.length > 0) {
            return false
        } else {
            return true
        }
    }

    canPush() {
        if (this.stackControl.length === this.MAX_SIZE) {
            return false
        } else {
            return true
        }
    }
    push(elm) {
        if (this.canPush()) {
            this.stackControl.push(elm)
            return this.stackControl
        } else {
            return `Stack Overflow`
        }
    }
    pop(elm) {
        if (this.isEmpty()) {
            return `Stack Underflow`
        } else {
            return this.stackControl.pop()
        }
    }
}