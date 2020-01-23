let stack = new StackDataStructure

let stackAdd =document.getElementById('btn-add').addEventListener('click', addElem);
let stackTake=document.getElementById('btn-take').addEventListener('click', takeElem);



for (let i=0; i<stack.MAX_SIZE; i++) {
   let item = document.createElement('li')
    item.classList.add("empty")
    let DOMEl=document.querySelector('.stacks')
    DOMEl.appendChild(item)

}

showList();


function showList() {


}


function addElem() {
    let  stackInput =document.getElementById('inputStack').value;
    let result = stack.push(stackInput);

    let newList= document.querySelectorAll(`.empty`);
    newList[newList.length-1].innerHTML = result[result.length-1];
    newList[newList.length-1].classList.add(`full`);
    newList[newList.length-1].classList.remove(`empty`);
}

function takeElem() {


}



// function addElem() {
//     if(stack.push(stackInput)){
//         newList= document.querySelectorAll(`.empty`);
//         newList[newList.length-1].innerHTML = stackInput;
//         newList[newList.length-1].classList.add(`full`);
//         newList[newList.length-1].classList.remove(`empty`);
//     } else {
//         alert(``)

        