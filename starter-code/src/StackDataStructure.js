function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = function() {
        if(this.stackControl.length) {
            return false;
        } else {
            return true;
        }
        //return this.stackControl.length ? false : true;
    };
    this.canPush = function() {
        if(this.stackControl.length >= this.MAX_SIZE) {
            return false;
        } else {
            return true;
        }
    };

    this.push = function(el) {
        if(this.canPush()) {
            this.stackControl.push(el);
            return this.stackControl;
        } else {
            //console.log("Stack Overflow")
            return "Stack Overflow";
        }
    };
  
    //var canDrink = (myAge > legalAge) ? true : false;
    this.pop = function() {
        var last = '';
        if(this.isEmpty()) {
            //console.log("Stack Underflow");
            return "Stack Underflow";
        } else {
            last = this.stackControl[this.stackControl.length - 1]
            this.stackControl.splice(-1,1);
            return last;
            //this.stackControl.pop();
        }
    };
  }