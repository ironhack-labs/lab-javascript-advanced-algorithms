class QueueDataStructure {


    constructor() {
        this.queueControl = new Array;
        this.MAX_SIZE = 10;


    }


    isEmpty() {


        if (this.queueControl.length > 0) {

            return false;

        } else return true;


    }

    canEnqueue() {

        if (this.queueControl.length < this.MAX_SIZE) {

            return true

        } else return false;


    }

    enqueue(arg) {

        if (this.canEnqueue()) {
            //console.log(arg)
            this.queueControl.unshift(arg)
            return this.queueControl
        } else if (this.queueControl.length == this.MAX_SIZE) {
            return ('Queue Overflow')

        }

    }

    dequeue() {

        if (this.isEmpty()) {
            return ('Queue Underflow');

        } else return this.queueControl.pop();

    }














}