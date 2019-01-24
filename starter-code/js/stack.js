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
  let guardar = stack.push(stackElement.value)
  for(i = 0; i<stack.stackControl.length; i++) {
    stackList[stack.MAX_SIZE - stack.stackControl.length].innerText = guardar[i]
    stackList[stack.MAX_SIZE - stack.stackControl.length].setAttribute('class','queue-item stack-element')
    stackUnder.setAttribute('class','error-stack')
  }
} else {
    stackOver.setAttribute('class','display error-stack')
  }
}
)

deleteStack.addEventListener('click', e=>{
  if(!stack.isEmpty()){
  stackList[stack.MAX_SIZE - stack.stackControl.length].innerText = ''
  stackList[stack.MAX_SIZE - stack.stackControl.length].setAttribute('class','stack-element')
  let stackDlt = document.createElement('li')
  stackDlt.innerText = stack.pop()
  removedStack.appendChild(stackDlt)
  stackOver.setAttribute('class','error-stack')
  } else {
    stackUnder.setAttribute('class','display error-stack')
  }
})