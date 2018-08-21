class StackDataStructure {
    constructor(){
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

isEmpty() {
    if(this.stackControl.length == 0) {
        return true;
    }
    return false;
};

canPush(){
    if (this.stackControl.length === this.MAX_SIZE) {
        return false;
      } else {
        return true;
      };
    }

push(e){
    var max = this.stackControl.length;
    if(max >= this.MAX_SIZE){
        return "Stack Overflow";
    }
    else{
        this.stackControl[max] = e;
        return this.stackControl;
    }
};

pop(){
    var vas = this.stackControl.length -1;
    if (this.stackControl.length === 0) {
        return 'Stack Underflow';
      }
      return this.stackControl[vas];
    }

};