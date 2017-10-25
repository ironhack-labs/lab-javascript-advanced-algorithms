

function StackDataStructure () {
 this.stackControl = [];
 this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
return this.stackControl.length <= 0;
};

StackDataStructure.prototype.canPush = function () {
return this.stackControl.length < this.MAX_SIZE;
};

var e = [19, 88];

StackDataStructure.prototype.push = function (e) {
if (this.canPush()) {
  this.stackControl.push(e);
  return this.stackControl;
} else {
return "Stack Overflow";
}
};

StackDataStructure.prototype.pop = function (e) {
if (this.isEmpty()) {
return 'Stack Underflow';
} else {
return this.stackControl.pop(e);
}
};
