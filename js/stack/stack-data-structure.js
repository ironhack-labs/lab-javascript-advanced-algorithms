class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length < this.MAX_SIZE){
      return true;
    }else{
      return false;
    }
  }

  display() {
    for(let el of this.stackControl){
      let li = document.createElement("li");
      li.innerHTML = el;
      stackList.appendChild(li);
    }

  }

  isEmpty() {
    if(this.stackControl.length === 0){
      return true;
    }
    return false;
  }

  push(item) {
    if(this.canPush()){
      this.stackControl.push(item);
      return this.stackControl;
    }else{
      return "Stack Overflow";
    }
    
  }

  pop() {
    if(this.isEmpty()){
      return "Stack Underflow"
    }else{
      return this.stackControl.pop();
    }
    
  }
}
