function StackDataStructure() {
    this.array = [];
}

StackDataStructure.prototype.pushOnArray = function (data) {
    var arrayRef = this.array;
    if (arrayRef.length < 10) {
        arrayRef.push(data);
        return arrayRef;
    } console.log("Stackoverflow. Remove data to continue")

}

StackDataStructure.prototype.removeFromArray = function (data) {
    var arrayRef = this.array;
    if (arrayRef.length > 0) {
        arrayRef.pop(data);
        return arrayRef;
    } else console.log("Stackunderflow. You cannot remove data")

}

var newData = new StackDataStructure();

newData.pushOnArray(1)


console.log(newData.array)

 