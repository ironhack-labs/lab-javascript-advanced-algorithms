//LIFO
function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 2;

    this.isEmpty = function () { return this.stackControl.length ? false : true; }

    this.canPush = function () { return this.stackControl.length < this.MAX_SIZE; }

    this.push = function (element) {

        if (this.stackControl.length < this.MAX_SIZE) {
            this.stackControl.push(element);
            return this.stackControl;
        }
        else {
            return "Stack Overflow";
        }
    }

    this.pop = function () { }

}
