function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 10;

  this.canPush = function() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else{
      return false;
      }
    };

    this.isEmpty = function() {
      if (this.queueControl.length == 0) {
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
      this.queueControl.pop()
      return this.stackControl;
    }
  }

  this.push = function(x){
    this.canPush();
    if (this.canPush){
      this.queueControl.push(x);
      return this.queueControl;
    } else {
      return "Stack Overflow"
    }
  }
}
