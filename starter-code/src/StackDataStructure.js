function StackDataStructure() {
    this.stackControl = []
    this.MAX_SIZE = 8

    this.isEmpty = function () {
        return !Boolean(this.stackControl.length)
    }

    this.canPush = function () {
        return this.stackControl.length !== this.MAX_SIZE
    }

    this.pop = function (element) {
        if (!this.isEmpty()) return this.stackControl.pop()
        else return 'Stack Underflow'
    }

    this.push = function (element) {
        if (this.canPush()) {
            this.stackControl.push(element)
            return this.stackControl
        }
        else return 'Stack Overflow'
    }
}
