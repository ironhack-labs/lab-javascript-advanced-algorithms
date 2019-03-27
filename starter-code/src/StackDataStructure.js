class StackDataStructure {
    stackControl = [];
    MAX_SIZE = 10;

    isEmpty(params) {
        if (this.stackControl.length > 0) {
            return false
        } else {
            return true
        }

    }


    canPush(params) {
        if (this.stackControl.length >= this.MAX_SIZE) {
            return false
        } else {
            return true
        }
    }



    push(params) {
        if (this.stackControl.canPush()) {
            return "Stack Overflow"
        } else {
            this.stackControl.push(params)
            return this.stackControl
        }

    }

    pop(params) {


    }

}