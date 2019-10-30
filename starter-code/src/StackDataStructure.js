class StackDataStructure {
    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 10
    }
    isEmpty() {
        return (this.stackControl.length == 0)
    }
    canPush() {
        return (this.stackControl.length < this.MAX_SIZE)
    }
    push(arg) {
        if (this.canPush()) {
            this.stackControl.push(arg)
            return (this.stackControl)
        }else{
            return ("Stack Overflow")
        }
    }
    pop() {
         if (this.stackControl.length) {
             return (this.stackControl.pop())
         } else {
             return ("Stack Underflow")
         }
    }

}