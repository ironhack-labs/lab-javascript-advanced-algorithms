let cue = new QueueDataStructure;
let cueListDOMEl = document.querySelector("#cue-list");

function paintCue(cue) {

    cueListDOMEl.innerHTML = "";
    let max = cue.MAX_SIZE;
    let storedItems = cue.getArray().length;
    let emptySpaces = max - storedItems;
    
    for (let i = 0; i < storedItems; i++) {
        let li = document.createElement(`li`);
        li.innerText = `${cue.getArray()[i]}`;
        cueListDOMEl.appendChild(li);
    }
    for (let i = 1; i <= emptySpaces; i++){
        let li = document.createElement(`li`);
        li.innerText = `EMPTY`;
        cueListDOMEl.appendChild(li);
    }
    
}

paintCue(cue);
let btnAddCueEl = document.querySelector(`.btn.cue`);
let btnRemoveCueEl = document.querySelector(`.btn.cue.take`);
let cueOverflowWarn = document.querySelector(`.col.cue>h3.overflow`);
let cueUnderflowWarn = document.querySelector(`.col.cue>h3.underflow`);
let cueNewElement = document.querySelector(`#cue-form>input`);

btnAddCueEl.onclick = (function(){
    cueUnderflowWarn.className = `btn hidden underflow`;
    if(!cue.canEnqueue()){
        cueOverflowWarn.className = `btn overflow`;
    } else {
        cue.enqueue(cueNewElement.value);
        paintCue(cue);
    }
    cueNewElement.value = ``;
});

btnRemoveCueEl.onclick = (function(){
    cueOverflowWarn.className = `btn hidden overflow`;
    if(cue.isEmpty()){
        cueUnderflowWarn.className = `btn underflow`;
    } else {
        cue.dequeue();
        paintCue(cue);
    }
    cueNewElement.value = ``;
});