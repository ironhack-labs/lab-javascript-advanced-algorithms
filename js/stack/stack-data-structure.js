class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }


  canPush() {

    return (this.stackControl.length < this.MAX_SIZE)

  }

  display() {

  }


  isEmpty() {

    return (this.stackControl.length === 0)

  }

  push(item) {

    this.stackControl.push(item)

    if (this.stackControl.length - 1 === this.MAX_SIZE) {
      return 'Stack Overflow'
    }
    else {
      return (this.stackControl)
    }

  }


  pop() {

    if (this.stackControl.length === 0) {
      return 'Stack Underflow'
    }
    else {
      return (this.stackControl.pop())
    }

  }

}
