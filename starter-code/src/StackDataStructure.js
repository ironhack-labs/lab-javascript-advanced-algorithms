class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 0
    }


    isEmpty() {
        if (this.stackControl.length === this.MAX_SIZE) {
            return true
        }
        else
            return false
    }
    canPush() {

        if (this.stackControl.length === this.MAX_SIZE) {
            return true
        }
        else
            return flase
    }
    push(elm) {

        this.stackControl.push(elm)
        if (this.stackControl.length > this.MAX_SIZE) {
            return "Stack Overflow"
        }
        else
            return true
    }
    pop() {
        this.stackControl.pop(1)
        if (this.stackControl.length === this.MAX_SIZE) {
            return "Stack Underflow"
        }
        else
            return true
    }
}
