class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
        this.size = 0;
    }

    isEmpty () {
        return (this.size === 0);
    }

    canPush () {
        return (this.size < this.MAX_SIZE);
    }

    push (item) {
        if (this.canPush()) {
            this.size = this.stackControl.push(item);
            return this.stackControl;
        } else {
            return 'Stack Overflow';
        }
    }

    pop () {
        if(!this.isEmpty()){
            this.size -= 1;
            return this.stackControl.pop ();
        } else {
            return 'Stack Underflow';
        }
    }
}
