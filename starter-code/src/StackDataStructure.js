class StackDataStructure {

    constructor() {
        this.stackControl = []
        this.MAX_SIZE = 5
    }

    isEmpty() {
        if (this.stackControl.length == 0) {
            return true
        } else {
            return false
        }
    }

    canPush() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }
    push(add) {

        if (this.canPush()) {
            this.stackControl.push(add)
            this.changeBlue()
            return this.stackControl
        } else {
            document.querySelector(".overa").className = "celd overa flow"
            document.querySelector(".overa").innerText = "Stack Overflow"
            return "Stack Overflow"
        }


    }
    pop() {

        if (this.isEmpty()) {
            document.querySelector(".undera").className = "celd undera flow"
            document.querySelector(".undera").innerText = "Stack Underflow"
            return "Stack Underflow"
        } else {
            this.changeWhite()
            return this.stackControl.pop()
        }
    }

    changeBlue() {

        let celdA = document.querySelector(".a")
        let celdB = document.querySelector(".b")
        let celdC = document.querySelector(".c")
        let celdD = document.querySelector(".d")
        let celdE = document.querySelector(".e")


        if (this.stackControl.length == 1) {
            celdA.className = "celd a full"
            document.querySelector(".undera").className = "celd undera"
            document.querySelector(".undera").innerText = ""
        } else if (this.stackControl.length == 2) {
            celdB.className = "celd b full"
        } else if (this.stackControl.length == 3) {
            celdC.className = "celd c full"
        } else if (this.stackControl.length == 4) {
            celdD.className = "celd d full"
        } else if (this.stackControl.length == 5) {
            celdE.className = "celd e full"
        }
    }

    changeWhite() {
        let celdA = document.querySelector(".a")
        let celdB = document.querySelector(".b")
        let celdC = document.querySelector(".c")
        let celdD = document.querySelector(".d")
        let celdE = document.querySelector(".e")


        if (this.stackControl.length == 1) {
            celdA.className = "celd a"
        } else if (this.stackControl.length == 2) {
            celdB.className = "celd b"
        } else if (this.stackControl.length == 3) {
            celdC.className = "celd c"
        } else if (this.stackControl.length == 4) {
            celdD.className = "celd d"
        } else if (this.stackControl.length == 5) {
            celdE.className = "celd e"
            document.querySelector(".overa").className = "celd overa"
            document.querySelector(".overa").innerText = ""
            
        }

    }




}