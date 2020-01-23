class StackDataStructure {

    constructor() {
        this.stackControl = new Array;
        this.MAX_SIZE = 10;


    }


    isEmpty() {


        if (this.stackControl.length > 0) {

            return false;

        } else return true;


    }

    canPush() {

        if (this.stackControl.length < this.MAX_SIZE) {

            return true

        } else return false;


    }

    push(arg) {

        if (this.canPush(arg)) {
            //console.log(arg)
            this.stackControl.push(arg)
            return this.stackControl
        } else if (this.stackControl.length == this.MAX_SIZE) {
            return ('Stack Overflow')

        }

    }

    pop() {

        if (this.isEmpty()) {
            return ('Stack Underflow');

        } else return this.stackControl.pop;

    }




}