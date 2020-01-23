class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 8
    }
    isEmpty() {
        // this.stackControl.length === 0 ? true : false
        if (this.stackControl.length != 0)
            return false
        else
            return true
    }
    canPush() {
        // this.stackControl.length !== this.MAX_SIZE ? true : false
        if (this.stackControl.length === this.MAX_SIZE)
            return false
        else
            return true

    }

    push(elm) {
        this.stackControl.push(elm)
        // this.stackControl.length > this.MAX_SIZE ? "Stack Overflow" : this.stackControl
        if (this.stackControl.length > this.MAX_SIZE) {
            return "Stack Overflow"

        } else {

            return this.stackControl
        }
    }
    pop() {
        // this.stackControl.length === 0 ? 'Stack Underflow' : this.stackControl.pop()
        if (this.stackControl.length < 1)
            return 'Stack Underflow'
        else
            return this.stackControl.pop()
    }

}