function StackDataStructure(amount) {
    this.amount = amount
    this.elements = []

    this.add = function (el) {

        if (this.elements.length === amount) {

            alert("Stack Overflow!")
            return false
        } else {
            this.elements.push(el)
            return true
        }
    }

    this.take = function () {

        if (this.elements.length === 0) {

            alert("Stack Underflow!")
        } else this.elements.pop()

    }

}
