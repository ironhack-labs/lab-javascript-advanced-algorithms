function StackDataStructure () {

    this.MAX_SIZE = 20;
    this.stackControl = [];
    this.isEmpty = function() {
        return this.stackControl.length == 0;
    }
    this.canPush = function() {
        return this.stackControl.length < this.MAX_SIZE;
    }
    this.push = function(element) {
        if (!this.canPush()) {
            return 'Stack Overflow';
        }
        this.stackControl.push(element);
        return this.stackControl;
    }
    this.pop = function() {
        if (this.isEmpty()) {
            return 'Stack Underflow';
        }
        return this.stackControl.pop();
    }
}
