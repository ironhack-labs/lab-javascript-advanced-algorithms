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



    push(param) {
        if (this.canPush()) {
            this.stackControl.push(param)
            return this.stackControl
        } else {
            return "stack Overflow"

        }

    }

    pop(params) {
        if (this.stackControl.length > 0)
            return this.stackControl.pop() {

            } else {


            }



    }

}