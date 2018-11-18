function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = function() {
        if (this.queueControl.length === 0){
            return true;
        }
        else {
            return false;
        }
    }

    this.canEnqueue = function() {
        return (this.queueControl.length >= this.MAX_SIZE) ? false : true;
    }

    this.enqueue = function (arg) {
        if (this.canEnqueue()) {
          this.queueControl.unshift(arg); //Mete y no retorna
          return this.queueControl;
        }
        else  return "Queue Overflow";
      
    }

    this.dequeue = function() {
        return (this.queueControl.length === 0) ? "Queue Underflow": // Si está vacío
        this.queueControl.pop(); //Saca y retorna
      }
}
