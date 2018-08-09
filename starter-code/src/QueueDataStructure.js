function QueueDataStructure (amount) {

    this.amount = amount
    this.elements = []

    this.add = function(el){

        if (this.elements.length === amount){

            console.log("Queue Overflow!")
            return false
        } else {this.elements.unshift(el)
        return true
        }
    }

    this.take = function(){

        if (this.elements.length === 0){

            console.log("Queue Underflow!")
        } else this.elements.pop()

    }

}
