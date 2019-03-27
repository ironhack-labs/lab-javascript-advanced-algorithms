class StackDataStructure
{
  constructor()
  {
    this.stackControl = [];
    this.MAX_SIZE = 9;
  }

  isEmpty()
  {
    if (this.stackControl.length === 0) return true;
    return false

  }

  canPush ()
  {
    if (this.stackControl.length < this.MAX_SIZE) return true;
    return false;
  }

  push(element)
  {
    if (this.canPush()) {this.stackControl.push(element); return this.stackControl}
    else {alert("Stack Overflow"); return "Stack Overflow"}
  }

  pop()
  {
    if (!this.isEmpty()) {return this.stackControl.pop()}
    else{alert("Stack Underflow"); return "Stack Underflow"}
  }

}
