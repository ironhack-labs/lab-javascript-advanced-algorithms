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
    $('.btn-primary').prop('disabled', true);
  } else if (this.stackControl.length === 0) {
    $('#underflow').show();
    $('.btn-danger').prop('disabled', true);
  } else {
    $('#overflow').hide();
    $('.btn-primary').prop('disabled', false);
    $('#underflow').hide();
    $('.btn-danger').prop('disabled', false);
  }
};

StackDataStructure.prototype.updateStackPush = function (stack) {
  $(stack).not('.stack-blue').last().text(this.stackControl[this.stackControl.length - 1]);
  $(stack).not('.stack-blue').last().addClass('stack-blue');
};

StackDataStructure.prototype.updateStackPop = function () {
  $('.stack-blue').first().html('<span></span>');
  $('.stack-blue').first().removeClass('stack-blue');
};
