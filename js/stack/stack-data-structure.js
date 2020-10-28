class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  // display() {
  //   // ... your code goes here
  // }


  canPush = () => this.stackControl.length <= this.MAX_SIZE ? this.stackControl.push(item) : false

  // canPush() {
  //   if (this.stackControl.length <= this.MAX_SIZE) {
  //     return this.stackControl.push(item)
  //   }
  // }

  isEmpty = () => this.stackControl.length === 0 ? true : false

  // isEmpty() {
  //   if (this.stackControl.length === 0) {
  //     return true
  //   }
  // }



  push(item) {

    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl

    } else {
      return 'Stack Overflow'
    }
  }


  pop = () => this.isEmpty() ? 'Stack Underflow' : this.stackControl.pop()

  // pop() {
  //   if (this.isEmpty()) {
  //     return 'Stack Underflow'
  //
  //   } else {
  //     return this.stackControl.pop()
  //   }
  // }
}
