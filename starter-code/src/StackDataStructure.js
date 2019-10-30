class StackDataStructure {
    constructor(){
        this.stackControl = []
        this.MAX_SIZE = 10
    }

    isEmpty() {
        return this.stackControl.length === 0
    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }


    push(elm) {
        if (this.canPush()) {
        this.stackControl.push(elm)
        return this.stackControl
        } else {
            return 'Stack Overflow'
        }
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack Underflow'
        } else {    
        return this.stackControl.pop()
        }
    }



}

// const stackDataStructure = new StackDataStructure

/* 
We should also be careful with Stack Overflow (yes, like the website), and Stack Underflow:

Stack Overflow occurs when we try to add an element into an stack that is already full.
Stack Underflow occurs when we try to get an element from an empty stack.
So we will also need to have two methods, one to check if we can add new elements to the stack (to avoid the stack overflow), and another one to check if we can take an element from the stack (to avoid the stack underflow).

If you satisfy the set of tests, you will get a solution with all the necessary implementations :)
*/