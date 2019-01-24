let stack = new StackDataStructure()
let addStack = document.getElementById('add-stack')
let deleteStack = document.getElementById('delete-stack')
let stackElement = document.getElementById('stackelement')
let stackList = document.getElementsByClassName('stack-element')
let removedStack = document.querySelector('#removed_stack  ul')
let stackOver = document.getElementById('error-stack-over')
let stackUnder = document.getElementById('error-stack-under')

addStack.addEventListener('click', e=>{
if(stack.canPush()) {
  stack.push(stackElement.value)
} else {
    stackOver.setAttribute('class','display error-stack')
  }
}
)

deleteStack.addEventListener('click', e=>{
  if(!stack.isEmpty()){
  stack.pop()
  } else {
    stackUnder.setAttribute('class','display error-stack')
  }
})