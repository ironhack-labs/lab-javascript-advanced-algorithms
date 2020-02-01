const queueData = new QueueDataStructure();

let title = document.querySelector('h1');
console.log(title);
let input = document.querySelector('input');
let addButton = document.getElementById('add');
let takeButton = document.getElementById('take');
let queuePanel = document.getElementById('data');
let overFlowBox = document.getElementById('upperflow');
let underFlowBox = document.getElementById('lowerflow');
queueData.MAX_SIZE = queuePanel.children.length;

title.innerHTML = 'Queue';
function addItem(e) {
    underFlowBox.setAttribute('class', 'hidden');
    underFlowBox.innerHTML = '';
    if(queueData.canEnqueue()) {
        queueData.enqueue(input.value);
        for(let i=0; i<queueData.queueControl.length; i++) {
            let divToFill = queuePanel.children[i];
            divToFill.setAttribute('class','occupied');
            divToFill.innerHTML = queueData.queueControl[i];
        }

    } else {
        overFlowBox.setAttribute('class','show');
        overFlowBox.innerHTML=queueData.enqueue(input.value);
    }
}

function takeItem(e) {
    overFlowBox.setAttribute('class','hidden');
    overFlowBox.innerHTML='';
    if(queueData.isEmpty()) {
        underFlowBox.setAttribute('class','show');
        underFlowBox.innerHTML = queueData.dequeue();
    } else {
        let divToTake = queuePanel.children[queueData.queueControl.length-1];
        divToTake.innerHTML = '';
        divToTake.setAttribute('class', 'empty');
        queueData.dequeue();
        
    }
}
addButton.addEventListener('click',addItem);
takeButton.addEventListener('click',takeItem);