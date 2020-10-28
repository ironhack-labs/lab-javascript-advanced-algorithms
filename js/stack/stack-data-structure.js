class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }


  canPush = () => this.stackControl.length <= this.MAX_SIZE ? this.stackControl.push(item) : false


  isEmpty = () => this.stackControl.length === 0 ? true : false


  push(item) {

    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl

    } else {
      return 'Stack Overflow'
    }
  }


  pop = () => this.isEmpty() ? 'Stack Underflow' : this.stackControl.pop()

}
