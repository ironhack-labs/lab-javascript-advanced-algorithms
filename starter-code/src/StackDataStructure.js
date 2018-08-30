function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 8
    this.isEmpty = function () {
        if (this.stackControl.length === 0) {
            return true
        } else {
            return false
        }
    }
    this.canPush = function () {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true
        } else {
            return false
        }
    }
    this.push = function (n) {
        if (this.canPush() === true) {
            (this.stackControl).push(n)
            return this.stackControl
        } else return "Stack Overflow"
    }
    this.pop = function () {
        if (this.isEmpty() === false) {
            var taken = (this.stackControl).pop()
            return taken
        } else {
            return "Stack Underflow"
        }
    }
}

var stackAdd = document.getElementById("stack-add");
var stackTake = document.getElementById("stack-take");
var queueAdd = document.getElementById("queue-add");
var queueTake = document.getElementById("queue-take");
var stack = document.getElementById("stack");
var queue = document.getElementById("queue");



stackAdd.addEventListener("click", function () {
    var stack = StackDataStructure()
    
    return stackControl
});
stackTake.addEventListener("click", function () {

    return
});
queueAdd.addEventListener("click", function () {

    return
});
queueTake.addEventListener("click", function () {

    return
});