function StackDataStructure () {
    this.stackControl = []
    this.MAX_SIZE = 8
}
StackDataStructure.prototype.isEmpty = function () {
    return this.stackControl.length == 0 ? true : false
}
StackDataStructure.prototype.canPush = function () {
    return this.stackControl.length == this.MAX_SIZE ? false : true
}
StackDataStructure.prototype.push = function (arg) {
    if(!this.canPush()) {
    return "Stack Overflow"
    }
    this.stackControl.push(arg)
    return this.stackControl
}
StackDataStructure.prototype.pop = function (arg) {
    return (this.stackControl.length == 0) ? "Stack Underflow" : this.stackControl.pop()
}
