class StackDataStructure {

  constructor(){
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty () {
    if (this.stackControl.length == 0) {
      return true
    } else {
      return false
    }
    }
  
  canPush () {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    } else 
    return false
  }

  push (elm) {
    if (this.canPush()) {
      this.stackControl.push(elm)
      return this.stackControl
    } else {
      return "Stack Overflow"
    }
  }  

  pop () {
    if(!this.isEmpty()){
      return this.stackControl.pop()
    } else return "Stack Underflow"
    
  }
}

const myStack = new StackDataStructure

let addButton = document.getElementById('addBtn')
let takeButton = document.getElementById('takeBtn')
let inputCamp = document.getElementById('input')
let arrP = document.getElementsByTagName('p')
console.log(arrP) //hagon esto y veo que está cogida
addButton.onclick = () => {
myStack.push(inputCamp.value)
console.log(myStack.stackControl) // Va ok
// let reverse = myStack.stackControl.reverse()
// console.log(reverse)
let insertMe = myStack.stackControl.indexOf(inputCamp.value)
console.log(insertMe) // ok entra
arrP[7-insertMe].innerHTML = inputCamp.value
}
