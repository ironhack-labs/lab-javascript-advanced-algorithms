function StackDataStructure() {
    this.MAX_SIZE = 10
    this.stackControl = []
    this.isEmpty = function() {
        return (this.stackControl.length == 0)
    }
    this.canPush = function() {
        if (this.stackControl.length == this.MAX_SIZE) {
            return false
        } else {
            return true
        }

    }
    this.push = function(newItem) {
        if (this.stackControl.length == this.MAX_SIZE) {
            return 'Stack Overflow'
        } else {
            this.stackControl.push(newItem)
            return this.stackControl
        }
    }
    this.pop = function() {
        if (this.stackControl.length == 0) {
            return 'Stack Underflow'
        } else {
            return this.stackControl.pop()
        }

    }
}
f