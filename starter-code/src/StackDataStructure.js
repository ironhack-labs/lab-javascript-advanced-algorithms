function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 10

  this.isEmpty = () => {
    if (this.stackControl.length === 0) {
      return true
    } else return false
  }
  
  this.canPush = () => {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else return false
  }

  this.push = (element) => {
    if (this.canPush()) {
      this.stackControl.push(element)
      return this.stackControl
    } else return "Stack Overflow"
  }

  this.pop = () => {
    if (this.isEmpty()) {
      return "Stack Underflow"
    } else {
      return this.stackControl.pop() 
    }
  }

}










//   let warning = () => {

//   }

//   let add = (element) => {
//     if (this.stackControl.length < 10) {
//       this.stackControl.push(element)
//     } else {
//       this.stackControl[9] = warning()
//     }
//   }

//   let remove = (element) => {
//     if (this.stackControl.length > 0) {
//       this.stackControl[9].remove(element)
//     } else {
//       this.stackControl[1] = warning()
//     }
//   }
