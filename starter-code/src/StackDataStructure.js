function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = function() {
        if (this.stackControl.length === 0){
            return true;
        }
        else {
            return false;
        }
    }

    this.canPush = function() {
        return (this.stackControl.length >= this.MAX_SIZE) ? false : true;
    }

    this.push = function (arg) {
        if (this.canPush()) {
          this.stackControl.push(arg); //Mete y no retorna
          return this.stackControl;
        }
        else  return "Stack Overflow";
      
    }

    this.pop = function() {
        return (this.isEmpty()) ? "Stack Underflow" : // Si está vacío
        this.stackControl.pop(); //Saca y retorna
      }
}

