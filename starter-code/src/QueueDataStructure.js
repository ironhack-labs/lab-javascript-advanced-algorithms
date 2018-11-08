function QueueDataStructure () {
  this.queueControl = []
  this.size = 4
  this.underFlowFlag = false;
  this.isEmpty = function () {
      if (this.queueControl.length > 0) { return false };
      return true;
  }
  this.canEnqueue = function () {
      if (this.queueControl.length >= this.size) { return false };
      return true;
  }
  this.enqueue = function (value) {
      if (this.queueControl.length >= this.size) { return "Queue Overflow" };
      this.queueControl.unshift(value);
      this.underFlowFlag=false;
      return this.queueControl;
  }
  this.dequeue = function () {
      if (this.queueControl.length === 0) { 
          this.underFlowFlag=true;
          return "Queue Underflow" };
      return this.queueControl.pop()
  }

  this.printQueue = function () {
      for (i = 0; i < this.size; i++) {
          if (this.queueControl[i] !== undefined) {
              $('.fila-element').eq(this.size - 1 - i).text(this.queueControl[i]);
              $('.fila-element').eq(this.size - 1 - i).addClass('full');
              $('.fila-element').eq(this.size - 1 - i).removeClass('underflow');
              if (this.canEnqueue() === false) {
                  $('.fila-element').eq(0).text("Queue Oveflow")
                  $('.fila-element').eq(0).addClass('overflow');
              }
          } else {
              $('.fila-element').eq(this.size - 1 - i).text(``);
              $('.fila-element').eq(this.size - 1 - i).removeClass('full');
              $('.fila-element').eq(this.size - 1 - i).removeClass('overflow');
              if (this.underFlowFlag === true) {
                  $('.fila-element').eq(this.size - 1).text("Queue Underflow")
                  $('.fila-element').eq(this.size - 1).addClass('underflow');
              }
          }

      }
  }
}
