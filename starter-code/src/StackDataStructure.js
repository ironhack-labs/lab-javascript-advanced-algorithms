//function StackDataStructure () {
//}


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
        if (this.stackControl.length == this.MAX_SIZE) {
            return false
        } else {
            return true
        }
    }
    push(elm) {
        if (!this.canPush()) {
            return 'Stack Overflow'
        } else {
            this.stackControl.push(elm)
            return this.stackControl
        }


    }
    pop() {
        if (this.stackControl.length == 0) {

            return 'Stack Underflow'
        }
        return this.stackControl.pop()
    }
}

const objStacks = new StackDataStructure();