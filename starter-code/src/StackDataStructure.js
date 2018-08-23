class StackDataStructure {
    constructor(size) {
        this.stackControl = [];
        this.MAX_SIZE = size;
    }


    isEmpty() {
        return this.stackControl.length === 0 ? true : false;
    }

    canPush() {
        return this.stackControl.length < this.MAX_SIZE ? true : false;
    }

    push(el) {

        if(this.stackControl[this.MAX_SIZE - 1] !== undefined) {
            return 'Stack Overflow';
        } else {
            this.stackControl.push(el);
            return this.stackControl;
        }
    }



    pop() {
        if(this.stackControl.length === 0) {
            return 'Stack Underflow';
        }

        return this.stackControl.pop();
    }
}
