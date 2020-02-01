const stackData = new StackDataStructure();

let title = document.querySelector('h1');
console.log(title);
let input = document.querySelector('input');
let addButton = document.getElementById('add');
let takeButton = document.getElementById('take');
let stackPanel = document.getElementById('data');
let stacklength = stackPanel.children.length;
let overFlowBox = document.getElementById('upperflow');
let underFlowBox = document.getElementById('lowerflow');
stackData.MAX_SIZE = stackPanel.children.length;

title.innerHTML = 'Stack';
function addItem(e) {
    underFlowBox.setAttribute('class', 'hidden');
    underFlowBox.innerHTML = '';
    if(stackData.canPush()) {
        stackData.push(input.value);
        let divToFill = stackPanel.children[stackData.MAX_SIZE-stackData.stackControl.length];
        divToFill.innerHTML = input.value;
        divToFill.setAttribute('class','occupied');
        console.log(divToFill);
    } else {
        overFlowBox.setAttribute('class','show');
        overFlowBox.innerHTML=stackData.push(input.value);
    }
}

function takeItem(e) {
    overFlowBox.setAttribute('class','hidden');
    overFlowBox.innerHTML='';
    if(stackData.isEmpty()) {
        underFlowBox.setAttribute('class','show');
        underFlowBox.innerHTML = stackData.pop();
    } else {
        let divToTake = stackPanel.children[stackData.MAX_SIZE-stackData.stackControl.length-1];
        divToTake.innerHTML = '';
        divToTake.setAttribute('class', 'empty')
        stackData.pop();
        
    }
}
addButton.addEventListener('click',addItem);
takeButton.addEventListener('click',takeItem);
