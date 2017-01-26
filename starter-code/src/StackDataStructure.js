function StackDataStructure (stackControl, MAX_SIZE) {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {

    if (this.stackControl === []) {
          return true;
    }

    else if (this.stackControl.push()) {
      return false;
    }
    return true;
};
                                                                    //WE CAN PASS OUR PROTOTYPES TO OTHER PROTOTYPES
                                                                    //I.E. StackDataStructure.prototype.pop = function () {
                                                                    //     if (this.isEmpty()) {
                                                                    //       return "Stack Underflow";
                                                                    //     }
                                                                    //     return this.stackControl.pop();
                                                                    //
                                                                    // };

StackDataStructure.prototype.push = function (element) {

  if (this.stackControl.length === this.MAX_SIZE) {
    return "Stack Overflow";
  }

    this.stackControl.push(element);
    return this.stackControl;

};

StackDataStructure.prototype.pop = function () {
    if (this.stackControl.length === 0) {
      return "Stack Underflow";
    }
    return this.stackControl.pop();

};

StackDataStructure.prototype.canPush = function (element) {
    if (this.stackControl.length === this.MAX_SIZE) {
      return false;
    }

    return true;
};




  // expect(stack.isEmpty()).toBe(false);



//
// function Animal (name, owner) {
//   this.name = name;
//   this.owner = owner;
// }
//
// var myAnimal   = new Animal("Arya", "Josephine");
// var yourAnimal = new Animal("Max",  "Owen");
//
// myAnimal.showOwnerName = function(){
//   return "My owner is " + this.owner;
// };










// element.canPush(19);
// Should add the indicated element to the stack"






// StackDataStructure.prototype.push = function () {
//     return this.stackControl.push([]);
// };
