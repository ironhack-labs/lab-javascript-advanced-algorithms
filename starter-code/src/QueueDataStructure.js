class QueueDataStructure {


    constructor() {
        this.queueControl = []
        this.MAX_SIZE = 5
    }

    isEmpty() {
        if (this.queueControl.length == 0) {
            return true
        } else {
            return false
        }
    }

    canEnqueue() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }
    enqueue(add) {

        if (this.canEnqueue()) {
            this.queueControl.unshift(add)
            this.changeBlue()
            return this.queueControl
        } else {
            return "Queue Overflow"
        }


    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue Underflow"
        } else {
            this.changeWhite()
            return this.queueControl.pop()
        }
    }


    changeBlue() {
        let celd5 = document.querySelector(".cinco")
        let celd4 = document.querySelector(".cuatro")
        let celd3 = document.querySelector(".tres")
        let celd2 = document.querySelector(".dos")
        let celd1 = document.querySelector(".uno")


        if (this.queueControl.length == 1) {
            celd1.className = "celd uno botton full"
        } else if (this.queueControl.length == 2) {
            celd2.className = "celd dos botton full"
        } else if (this.queueControl.length == 3) {
            celd3.className = "celd tres botton full"
        } else if (this.queueControl.length == 4) {
            celd4.className = "celd cuatro botton full"
        } else if (this.queueControl.length == 5) {
            celd5.className = "celd cinco botton full"
        }
    }

    changeWhite() {
        let celd5 = document.querySelector(".cinco")
        let celd4 = document.querySelector(".cuatro")
        let celd3 = document.querySelector(".tres")
        let celd2 = document.querySelector(".dos")
        let celd1 = document.querySelector(".uno")


        if (this.queueControl.length == 1) {
            celd5.className = "celd botton uno"
        } else if (this.queueControl.length == 2) {
            celd4.className = "celd botton dos"
        } else if (this.queueControl.length == 3) {
            celd3.className = "celd botton tres"
        } else if (this.queueControl.length == 4) {
            celd2.className = "celd botton cuatro"
        } else if (this.queueControl.length == 5) {
            celd1.className = "celd botton cinco"
        }

    }


}