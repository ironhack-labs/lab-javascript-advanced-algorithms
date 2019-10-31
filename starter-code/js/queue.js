const queue = new QueueDataStructure();

const queueAddBtn = document.querySelector("#queue .add-btn");
const queueTakeBtn = document.querySelector("#queue .take-btn");
const queueInputEl = document.querySelector("#queue .text-input");
// let queueList = document.querySelector("#queue .list-group")
// let messageEl = document.createElement("div");
const queueUlEl = document.querySelector("#queue .list-group")

queueAddBtn.onclick = function () {
    let listGroup = [...document.querySelectorAll('#queue .bg-light')];
    let lastItemOfList = listGroup[listGroup.length - 1];

    if (queueInputEl.value) {
        let inputVal = queueInputEl.value;

        if (queue.canEnqueue()) {
            queue.enqueue(inputVal);
            queueUlEl.append(addListItem(inputVal, "bg-secondary"))
            lastItemOfList.parentNode.removeChild(lastItemOfList);

        } else{

            alert(queue.enqueue());
        }

        console.log(queue.queueControl, queue.canEnqueue());
       
    } else {
        alert("Value to input needed")
    }
}



queueTakeBtn.onclick = function () {
    let listRemoveGroup = [...document.querySelectorAll('.bg-secondary')];
    let firstItemOfList = listRemoveGroup[0];


    if (queue.isEmpty()) {
        alert(queue.dequeue());


    } else {
        queue.dequeue();
        firstItemOfList.parentNode.removeChild(listRemoveGroup[0])
        queueUlEl.append(addListItem("",  "bg-light"))


    }
}



function addListItem(paramContent, className) {
    let listItem = document.createElement("li");
    listItem.classList.add('list-group-item', className);
    listItem.innerHTML = paramContent;

    return listItem;
}