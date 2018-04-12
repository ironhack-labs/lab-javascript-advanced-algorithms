function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 10;

    this.isEmpty = function() {
        return (this.stackControl.length === 0);
    };

    this.canPush = function() {
        return (this.stackControl.length + 1 <= this.MAX_SIZE);
    };

    this.push = function(element) {
        if (this.canPush()) {
            this.stackControl.push(element);
            return this.stackControl;
        }
        return 'Stack Overflow';
    };


    this.pop = function() {
        if (this.stackControl.length > 0)
            return this.stackControl.pop();
        return "Stack Underflow";
    };

}