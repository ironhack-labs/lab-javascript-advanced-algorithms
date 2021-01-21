class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }

    canPush() {
        return (this.stackControl.length < this.MAX_SIZE)
    }

    display() {
        // ... your code goes here
    }

    isEmpty() {
        return (this.stackControl.length === 0)
    }

    push(item) {
        if (!this.canPush()) {
            return 'Stack Overflow'
        }
        // this.stackControl[this.stackControl.length] = item
        this.stackControl.push(item)
        return this.stackControl
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack Underflow'
        }
        return this.stackControl.pop()
    }
}