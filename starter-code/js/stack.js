  let stack = document.querySelectorAll(".stack");
  let addStackButton = document.getElementById("addStack")
  let takeStackButton = document.getElementById("takeStack")

  let inputStack = document.getElementById("inputText")
  let underflow = document.getElementById("underflow")

  //   let stack1 = document.getElementById("stack1")
  //   let stack2 = document.getElementById("stack2")
  //   let stack3 = document.getElementById("stack3")
  //   let stack4 = document.getElementById("stack4")
  //   let stack5 = document.getElementById("stack5")
  //   let stack6 = document.getElementById("stack6")
  //   let stack7 = document.getElementById("stack7")
  //   let stack8 = document.getElementById("stack8")
  //   let stack9 = document.getElementById("stack9")
  //   let stack10 = document.getElementById("stack10")





  let stackDataStructure = new StackDataStructure()


  addStackButton.addEventListener('click', function () {

      //   console.log(inputStack.value)

      //   stackDataStructure.push(inputStack.value)
      //   let stackArr = stackDataStructure.stackControl.length
      //   document.getElementsByClassName('box stack')[stackArr - 1].innerText = inputStack.value

      //   document.getElementsByClassName('box underflow') stackDataStructure.push()
      //   switch (stackArr) {
      //       case 1:
      //           const arr1 = document.createElement('p')
      //           stack1.innerHTML =
      //               stack1.innerText = `${inputStack.value}`;
      //           break;
      //       case 2:
      //           stack2.innerText = `${inputStack.value}`;
      //           break;
      //       case 3:
      //           stack3.innerText = `${inputStack.value}`;
      //           break;
      //       case 4:
      //           stack4.innerText = `${inputStack.value}`;
      //           break;
      //       case 5:
      //           stack5.innerText = `${inputStack.value}`;
      //           break;
      //       case 6:
      //           stack6.innerText = `${inputStack.value}`;
      //           break;
      //       case 7:
      //           stack7.innerText = `${inputStack.value}`;
      //           break;
      //       case 8:
      //           stack8.innerText = `${inputStack.value}`;
      //           break;
      //       case 9:
      //           stack9.innerText = `${inputStack.value}`;
      //           break;
      //       case 10:
      //           stack10.innerText = `${inputStack.value}`;
      //           break;
      //       default:
      //           console.log('Ole')
      //   }



      //   console.log(stackDataStructure.stackControl)



      //   CAMBIAR CLASE
      //   underflow.setAttribute('class', 'box underflow visible')

      let pushResult = stackDataStructure.push(inputStack.value)
      let stackArr = stackDataStructure.stackControl.length
      let textToPrint = '';
      if (Array.isArray(pushResult)) {
          textToPrint = inputStack.value;

      } else if (typeof pushResult === 'string') {
          textToPrint = pushResult;

      }
      document.getElementsByClassName('box stack')[stackArr - 1].innerText = textToPrint


  })

  takeStackButton.addEventListener('click', function () {
      //   console.log('hola')

      stackDataStructure.pop()
      //   console.log(stackDataStructure.stackControl)

  })