function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 3;
    this.isEmpty =
        function() {
            if (this.stackControl.length === 0) {
                return true;
            } else {
                return false;
            }
        } || true;

    this.canPush = function() {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    };

    this.push = function(element) {
        if (this.canPush()) {
            this.stackControl.push(element);
            return this.stackControl;
        } else {
            return "Stack Overflow";
        }
    };

    this.pop = function(element) {
        if (this.stackControl.length > 0) {
            return this.stackControl.pop();
        } else {
            return "Stack Underflow";
        }
    };

    this.isArray = function() {
        if (this.isArray.stackControl) {
            return true;
        } else {
            return false;
        }
    };
}
