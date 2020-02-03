const $stackContainer = [...document.getElementsByClassName("stack-container")];
const $addButton      = document.querySelector(".btn-add");
const $takeButton      = document.querySelector(".btn-take");
const $inputText      = document.querySelector(".intext");
const $popNumber      = document.querySelector(".popNumber");
let stack1;
stack1 = new StackDataStructure();
console.log("stack.MAX_SIZE"+ stack1.MAX_SIZE);

for (let i = 0 ; i < stack1.MAX_SIZE; i++ ){
    let newStackElement = document.createElement('div');
    newStackElement.className = "element";
    newStackElement.innerHTML =   ``;
    $stackContainer[0].appendChild(newStackElement);
}

const stackPushItem = ()  => {
  let newNumber = $inputText.value;
  if (newNumber !== ''){
    let lengthStack = stack1.MAX_SIZE - stack1.stackControl.length ;
    let pushResult = stack1.push(newNumber);
    if( pushResult !== 'Stack Overflow'){
        console.log("Array Length" + stack1.stackControl.length);
        $stackContainer[0].childNodes[lengthStack].innerText = newNumber;
        $stackContainer[0].childNodes[lengthStack].style.backgroundColor = "#039dfc";
        $stackContainer[0].childNodes[lengthStack].style.color = "white";
        $stackContainer[0].childNodes[lengthStack].style.border = "1px solid white"; 
        $inputText.value = '';   
        $popNumber.innerHTML = ` `; 
    } else {
        console.log(pushResult);
        $stackContainer[0].childNodes[1].innerText = `${pushResult}`;
        $stackContainer[0].childNodes[1].style.backgroundColor = "#f2ccc9";
        $stackContainer[0].childNodes[1].style.color = "red";
        $stackContainer[0].childNodes[1].style.border = "1px solid red";
        $popNumber.innerHTML = ` `;
    }
  }
}
$addButton.addEventListener('click', stackPushItem);

const stackPopItem = ()  => {
    let lengthStack = stack1.MAX_SIZE - stack1.stackControl.length + 1;
    let popResult = stack1.pop();
    if( popResult !== 'Stack Underflow'){
        console.log("Pop Result"+ popResult);
        $stackContainer[0].childNodes[lengthStack].innerText = '';
        $stackContainer[0].childNodes[lengthStack].style.backgroundColor = "lightGrey";
        $stackContainer[0].childNodes[lengthStack].style.border = "1px solid white";  
        $stackContainer[0].childNodes[lengthStack].style.color = "white";
        $popNumber.innerHTML = `${popResult}`;
        $inputText.value = ''; 
    } else {
      console.log(popResult);
      $stackContainer[0].childNodes[10].innerText = `${popResult}`;
      $stackContainer[0].childNodes[10].style.backgroundColor = "#f2ccc9";
      $stackContainer[0].childNodes[10].style.color = "red";
      $stackContainer[0].childNodes[10].style.border = "1px solid red";
      $popNumber.innerHTML = ` `;
    }
  }


$takeButton.addEventListener('click', stackPopItem);
