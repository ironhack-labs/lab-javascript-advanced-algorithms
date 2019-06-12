function StackDataStructure() {
    this.stackControl = []
    this.MAX_SIZE = 8

    this.isEmpty = function () {
        return this.stackControl.length === 0
    }

    this.canPush = function () {
        return this.stackControl.length < this.MAX_SIZE
    }

    this.push = function (item) {
        if (!this.canPush()) {
            return 'Stack Overflow'
        } else {
            this.stackControl.push(item)
            return this.stackControl
        }
    }

    this.pop = function (item) {
        if (this.isEmpty()) {
            return 'Stack Underflow'

        } else {
            return this.stackControl.pop(item)

        }
    }
}   
