//LIFO
function StackDataStructure(max) {
    this.stackControl = [];
    this.MAX_SIZE = max ? max : 5;

    this.isEmpty = function () { return this.stackControl.length ? false : true; }

    this.canPush = function () { return this.stackControl.length < this.MAX_SIZE; }

    this.push = function (element) {

        if (this.canPush()) {
            this.stackControl.push(element);
            return this.stackControl;
        }
        else {
            return "Stack Overflow";
        }
    }

    this.pop = function () {

        return this.isEmpty() ? "Stack Underflow" : this.stackControl.pop();
    }

}
