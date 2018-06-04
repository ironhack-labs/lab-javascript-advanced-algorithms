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
    $('#stack-overflow').show();
    $('#stack-btn-primary').prop('disabled', true);
  } else if (this.stackControl.length === 0) {
    $('#stack-underflow').show();
    $('#stack-btn-danger').prop('disabled', true);
  } else {
    $('#stack-overflow').hide();
    $('#stack-btn-primary').prop('disabled', false);
    $('#stack-underflow').hide();
    $('#stack-btn-danger').prop('disabled', false);
  }
};

StackDataStructure.prototype.updateStackPush = function (stack) {
  $(stack).not('.blue').last().text(this.stackControl[this.stackControl.length - 1])
    .addClass('blue');
};

StackDataStructure.prototype.updateStackPop = function () {
  $('.stack .blue').first().html('<span></span>').removeClass('blue');
};
