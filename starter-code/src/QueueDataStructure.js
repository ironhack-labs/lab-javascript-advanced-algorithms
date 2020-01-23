class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty(){
        if (this.queueControl.length === 0){
            return true
        } else {
            return false
        }
    }

    canPush(){
        if (this.MAX_SIZE === this.queueControl.length){
            return false
        } else {
            return true
        }
    }

    push(elem){
        if (this.queueControl.length === this.MAX_SIZE){
            return `Queue Overflow`
        } else {
            this.queueControl.push(elem)
        } return this.queueControl
    }

    pop(elem){
        if (this.queueControl.length === 0){
            return `Queue Underflow`
        } else {
            return this.queueControl.pop(elem)
        }
    }


}
