class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty = function () {
        // if (this.stackControl.length === 0) return true 
        return this.stackControl.length === 0
    }
    canPush = function () {
        return this.stackControl.length === this.MAX_SIZE ? false : true
        // if (this.stackControl.length === this.MAX_SIZE) {
        //     return false
        // } else {
        //     return true
        // }
    }
    push = function (e) {
        // return this.canPush() ? this.stackControl.push(e) : 'Stack Overflow'
        if (this.canPush()) {
            this.stackControl.push(e)
        } else {
            return 'Stack Overflow'
        }
       return this.stackControl

    }
    pop = function () {
        return this.stackControl.length === 0 ? 'Stack Underflow' : this.stackControl.pop() 
    }

}