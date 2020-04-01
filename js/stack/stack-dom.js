const stackList = document.getElementById('stack-list');
 const stackInput = document.getElementById('stack-input');
 const container = document.getElementById('container');
 const warningTopStack = document.querySelector('#stack-container .warning-top');
 const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
 const addStackBtn = document.getElementById('add-stack');
 const takeStackBtn = document.getElementById('take-stack');
 const newStack = new StackDataStructure();
 const size = newStack.MAX_SIZE
 const actualStack = size - newStack.stackControl.length
 const clearStackInput = () => {
   stackInput.value = ""
 };
 const renderListStack = () => {
   for (let i = 0; i < actualStack; i++) {
     let newLi = document.createElement('li')
     newLi.classList.add('inactive')
     newLi.innerHTML = '&nbsp;'
     stackList.appendChild(newLi)
   }
 };
 renderListStack();
 const generateWarningStack = type => {
   if (type === 'underflow') {
     // ... your code goes here
   } else if (type === 'overflow') {
     // ... your code goes here
   }
 };
 const addToStack = () => {
   if (newStack.canPush()) {
     newStack.push(stackInput.value)
     let getLi = stackList.querySelectorAll('.inactive')
     getLi[0].classList.toggle('active')
     getLi[0].classList.toggle('inactive')
     getLi[0].innerHTML = stackInput.value
     clearStackInput()
     console.log(newStack.stackControl)
   } else {
     alert('Maaaaaal')
   }
 };
 const removeFromStack = () => {
   if (!newStack.isEmpty()) {
     let getLi = stackList.querySelectorAll('.active')
     let activeSize = getLi[getLi.length - 1]
     activeSize.classList.toggle('active')
     activeSize.classList.toggle('inactive')
     activeSize.innerHTML = '&nbsp;'
     newStack.stackControl.pop()
     console.log(newStack.stackControl)
     
   } else {
     alert('STOP CLICKING')
   }
 };
 addStackBtn.addEventListener('click', addToStack);
 takeStackBtn.addEventListener('click', removeFromStack);
