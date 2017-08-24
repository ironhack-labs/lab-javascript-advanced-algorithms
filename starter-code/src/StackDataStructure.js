function StackDataStructure (maxItems = 10) {
    var that = this;
    this.stackControl = [];
    this.MAX_SIZE = maxItems;
    this.isEmpty = function () {
        return that.stackControl.length === 0;
    }
    this.canPush = function () {
        return that.stackControl.length < that.MAX_SIZE;
    }
    this.push = function(element) {
        if (that.canPush()) {
        that.stackControl.push(element);
        return that.stackControl;
        } else {
        return "Stack Overflow";
        }  
    };
    this.pop = function(element) {
        if (!that.isEmpty()) {
            return that.stackControl.pop(element);
        } else {
            return "Stack Underflow";
        }

    };
}


