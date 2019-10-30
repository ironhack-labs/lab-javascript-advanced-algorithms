class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 10
    }
    isEmpty() {
        return this.stackControl.length ? false : true
        // if (!this.stackControl.length) {
        //  return true
        // } else {
        //     return false

    }
    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }
    push(elm) {
        if (this.stackControl.length < this.MAX_SIZE) {
            this.stackControl.push(elm)
            return this.stackControl
        } else if (this.stackControl.length == this.MAX_SIZE) {
            return ("Stack Overflow")
        }
    }
    pop(elm) {

        if (!this.stackControl.length) {
            return ("Stack Underflow")
        } else {
            return this.stackControl.pop(elm)
        }
    }



}
