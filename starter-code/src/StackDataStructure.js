function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 3;
  this.isEmpty = function() {
    return this.stackControl.length ? false : true;
  };
  this.canPush = function() {
    return this.stackControl.length >= this.MAX_SIZE ? false : true;
  };
  // WHy cant i execute multiple responses for a single line shorthand??-------
  //var canDrink = (myAge > legalAge) ? true : false;
  //this.push = function (el) { return (this.canPush()) ? ( [el], this.stackControl.push(el)): "Stack Overflow"};
  this.push = function(el) {
    if (this.canPush()) {
      this.stackControl.push(el);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  };

  this.pop = function() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      this.stackControl.pop();
      return this.stackControl[this.stackControl.length - 1];
    }
  };
}
