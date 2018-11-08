function StackDataStructure () {
  this.stackControl = []
  this.size = 4
  this.underFlowFlag = false;
  this.isEmpty = function () {
      if (this.stackControl.length === 0) return true;
      return false;
  }
  this.canPush = function () {
      if (this.stackControl.length >= this.size) { return false };
      return true;
  }
  this.push = function (value) {
      if (this.stackControl.length >= this.size) { return "Stack Overflow" };
      this.stackControl.push(value);
      this.underFlowFlag = false;
      return this.stackControl;
  }
  this.pop = function () {
      if (this.stackControl.length === 0) { 
          this.underFlowFlag = true;
          return "Stack Underflow" };
      return this.stackControl.pop()
  }

  this.printStack = function () {
      for (i = 0; i < this.size; i++) {
          if (this.stackControl[i] !== undefined) {
              $('.pila-element').eq(this.size - 1 - i).text(this.stackControl[i]);
              $('.pila-element').eq(this.size - 1 - i).addClass('full');
              $('.pila-element').eq(this.size - 1 - i).removeClass('underflow');
              if (this.canPush() === false) {
                  $('.pila-element').eq(0).text("Stack Oveflow")
                  $('.pila-element').eq(0).addClass('overflow');
              }
          } else {
              $('.pila-element').eq(this.size - 1 - i).text(``);
              $('.pila-element').eq(this.size - 1 - i).removeClass('full');
              $('.pila-element').eq(this.size - 1 - i).removeClass('overflow');
              if (this.underFlowFlag === true) {
                  $('.pila-element').eq(this.size - 1).text("Stack Underflow")
                  $('.pila-element').eq(this.size - 1).addClass('underflow');
              }
          }
      }
  }
}
