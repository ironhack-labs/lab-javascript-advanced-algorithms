class StackDataStructure {

    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 10

    }

    isEmpty() {
        return this.stackControl.length ? false : true
    }

    canPush() {
        return this.stackControl.length < this.MAX_SIZE ? true : false
    }

    push(elm) {
        if (!this.canPush()) return "Stack Overflow"
        this.stackControl.push(elm)
        return this.stackControl
    }

    pop() {
        if (this.isEmpty()) return "Stack Underflow"
        return this.stackControl.pop()
    }



}