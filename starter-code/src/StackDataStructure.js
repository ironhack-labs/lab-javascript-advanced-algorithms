function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 20;
    this.isEmpty = function () {
        if (this.stackControl.length === 0) {
            return true;
        } else {
            return false;
        }
    };
    this.canPush = function () {
        if (this.stackControl.length >= this.MAX_SIZE) {
            return false;
        } else {
            return true;
        }
    };
    this.push = function (ele) {
        if (this.stackControl.length === this.MAX_SIZE) {
            return 'Stack Overflow';
        } else {
            this.stackControl.push(ele);
            return this.stackControl;
        }
    };
    this.pop = function () {
        if (this.stackControl.length === 0) {
            return 'Stack Underflow';
        } else {
            var last = this.stackControl.length - 1;
            return this.stackControl.pop(last);
        }
    };
}