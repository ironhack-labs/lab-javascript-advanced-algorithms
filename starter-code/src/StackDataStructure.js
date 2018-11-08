function StackDataStructure() {
    this.stackControl = []
    this.MAX_SIZE = 100
    this.MIN_SIZE = 0
    this.isEmpty = () => {
        if (this.stackControl.length > 0) return false
        return true
    }
    this.canPush = () => {
        if (this.stackControl.length === this.MAX_SIZE) return false
        return true
    }
    this.push = (element) => {
        if (!this.canPush()) {
            return 'Stack Overflow'
        }
        this.stackControl.push(element)
        return this.stackControl
    }
    this.pop = () => {
        var lastElement = this.stackControl.length - 1
        if (this.stackControl.length === this.MIN_SIZE) {
            return 'Stack Underflow'
        }
        return this.stackControl[lastElement]
    }
}
