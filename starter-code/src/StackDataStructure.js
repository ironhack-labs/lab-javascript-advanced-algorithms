function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else{
      return false;
      }
    };

    this.isEmpty = function() {
      if (this.stackControl.length == 0) {
        return true;
        } else {
        return false;
        }
      };

  this.pop = function(){
    this.isEmpty();
    if(this.isEmpty){
      return "Stack Unerflow"
    } else{
      this.stackControl.pop()
      return this.stackControl;
    }
  }

  this.push = function(x){
    this.canPush();
    if (this.canPush){
      this.stackControl.push(x);
      return this.stackControl;
    } else {
      return "Stack Overflow"
    }
  }
}
