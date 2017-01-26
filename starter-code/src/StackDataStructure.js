function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = function () {
        return this.stackControl.length === 0;
    };
     this.canPush = function (i) {
         this.stackControl.lenght === this.MAX_SIZE ? false : true;
    };
     this.push = function (i) {
        if (this.stackControl.length === this.MAX_SIZE){
            return ("Stack Overflow");
        } else {
           this.stackControl.push(i);
         return this.stackControl; 
        };
     };
     this.pop = function (i) {
         if (this.stackControl.length === 0){
            return ("Stack Underflow");
        } else {
            return this.stackControl.pop(i);
   };
 };
}




