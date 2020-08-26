const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input').value;
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();


const clearStackInput = () => {
  // ... your code goes here


};

const renderListStack = () => {
  // ... your code goes here
  //const ulElem = document.querySelector("ul .list-stack")
  // const liElem = document.createElement("li")

  // newStack.stackControl.forEach(elem => {

  // });

  // NO SÉ HACER ESTO CON FOR EACH :(((((



  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    liElem = document.createElement("li")
    liElem.classList = "inactive"
    stackList.appendChild(liElem)
  }




};

newStack.stackControl.forEach(elem => {
  console.log(elem)
});

renderListStack();





const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomStack.style.display = "block"


  } else if (type === 'overflow') {
    // ... your code goes here

    warningTopStack.style.display = "block"
  }
};





const addToStack = () => {
  // PORQUÉ ME HACE ESTO QUE SALTE UNA??
  //
  // while (newStack.push(stackInput.value) === "Stack Overflow") {
  //   generateWarningStack(overflow)
  // }


  //const liElement = document.querySelector("li .inactive")

  newStack.push(stackInput.value)

  const liElem = document.querySelectorAll('#stack-list li')

  liElem[newStack.stackControl.length - 1].classList.add('active')
  liElem[newStack.stackControl.length - 1].classList.remove('inactive')
  liElem[newStack.stackControl.length - 1].innerText = stackInput.value


  clearStackInput()


  // :((((((((((((((((((((((((((((((
  // function changeClass() {
  //   liElement.classList.remove("inactive")
  //   liElement.classList.add("active")
  // }

  // newStack.stackControl.forEach(elm => changeClass())

  //---------------------------------------------
  //Por qué no va?????????????????????????????????
  //
  //
  // if (newStack.canPush) {
  //   
  //   if (liElement.classList.contains("inactive")) {
  //     liElement.classList.remove("inactive")
  //     liElement.classList.add("active")
  //   } else {
  //     liElement.classList.remove("active")
  //     liElement.classList.add("inactive")
  //   }
  //}

}


const removeFromStack = () => {
  // ... your code goes here
  // 
  newStack.pop()

  const liElem = document.querySelectorAll('#stack-list li')

  liElem[newStack.stackControl.length].classList.remove('active')
  liElem[newStack.stackControl.length].classList.add('inactive')
  liElem[newStack.stackControl.length].innerText = stackInput.value = ""
  clearStackInput()
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

// function flow() {
//   if (newStack.stackControl.length == 10) {
//     addStackBtn.onclick(function () {
//       warningTopStack.style.display = "block"
//     })
//   } else if (newStack.stackControl.length == 0) {
//     takeStackBtn.onclick(function () {
//         warningBottomStack.style.display = "block"
//       }
//     }

//     flow()