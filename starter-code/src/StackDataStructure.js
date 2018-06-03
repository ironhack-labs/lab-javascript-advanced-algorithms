function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 5;
}

StackDataStructure.prototype.isEmpty = function () {
  if (this.stackControl.length === 0) { return true; }
  return false;
};

StackDataStructure.prototype.canPush = function () {
  if (this.stackControl.length < this.MAX_SIZE) { return true; }
  return false;
};

StackDataStructure.prototype.push = function (element) {
  if (this.canPush()) {
    this.stackControl.push(element);
    return this.stackControl;
  }
  return 'Stack Overflow';
};

StackDataStructure.prototype.pop = function () {
  if (!this.isEmpty()) {
    return this.stackControl.pop();
  }
  return 'Stack Underflow';
};

StackDataStructure.prototype.flowControl = function () {
  if (this.stackControl.length === this.MAX_SIZE) {
    $('#overflow').show();
    $('btn-primary').prop('disabled', true);
  } else { $('overflow').hide(); }
  if (this.stackControl.length === 0) {
    $('#underflow').show();
    $('btn-danger').prop('disabled', true);
  } else { $('#underflow').hide(); }
};

StackDataStructure.prototype.updateStack = function (stack) {
  for (i = 0; i < this.stackControl.length; i++) {
    if (this.stackControl[i]) {
      $(stack[i]).text(this.stackControl[i]);
      $(stack[i]).addClass('stack-blue');
    }
  }
};
