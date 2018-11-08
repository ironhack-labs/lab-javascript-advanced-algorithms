class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10;
    }

    isEmpty() {
        if (this.stackControl.length !== 0) {
            return false;
        } else {
            return true;
        }
    }

        canPush() {
        if(this.stackControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    }

    push(element) {
        if(this.stackControl.length < this.MAX_SIZE) {
            this.stackControl.push(element);
            return this.stackControl;
        } else {
            return 'Stack Overflow';
        }
    }

    pop(){
        if (this.stackControl.length !== 0) {
          return this.stackControl.pop();
        } else {
          return 'Stack Underflow'
        }
      }

   






}