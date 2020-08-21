class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  display() {
    let stringReturn = "";
    let pattern = "<li>-replace-</li>"

    this.stackControl.forEach(elem => {
      stringReturn += pattern.replace("-replace-", elem)
    })

    return stringReturn;

  }

  isEmpty() {
    return this.stackControl.length == 0 ? true : false;
  }

  push(item) {
    if(this.canPush())
    {
      this.stackControl.push(item)
      return this.stackControl;
    }
    else
      return "Stack Overflow"
  }

  pop() {
    if(!this.isEmpty())    
    {
      let item = this.stackControl[this.stackControl.length-1]
      this.stackControl.pop()
      return item
    }
    else
      return "Stack Underflow"    
  }
}
