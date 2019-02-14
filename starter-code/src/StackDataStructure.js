function StackDataStructure() {
    this.stackControl = []
    this.MAX_SIZE = 8
    this.isEmpty = function() {
        return (this.stackControl.length === 0)
    }
    this.canPush = function() {
        return (this.MAX_SIZE !== this.stackControl.length)
    }
    this.push = function(arg) {
        if (this.MAX_SIZE === this.stackControl.length) {
            return 'Stack Overflow'
        } else {
            this.stackControl.push(arg)
            return [arg]
        }
    }
    this.pop = function() {
        if (this.stackControl.length === 0) {
            return 'Stack Underflow'
        } else {
            return this.stackControl.pop()
        }
    }
}