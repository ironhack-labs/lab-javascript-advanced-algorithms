const queue = new QueueDataStructure();

const queueAddBtn = document.querySelector("#queue .add-btn");
const queueTakeBtn = document.querySelector("#queue .take-btn");
const queueInputEl = document.querySelector("#queue .text-input");
let queueList = document.querySelector("#queue .list-group")
// let messageEl = document.createElement("div");
const queueUlEl = document.querySelector("#queue .list-group")

queueAddBtn.onclick = function () {
    let listGroup = [...document.querySelectorAll('#queue .bg-light')];
    let lastItemOfList = listGroup[listGroup.length - 1];

    if (queueInputEl.value) {
        let inputVal = queueInputEl.value;

        if (queue.canEnqueue()) {
            queue.enqueue(inputVal);
            queueUlEl.append(addListItem(inputVal))
            lastItemOfList.parentNode.removeChild(lastItemOfList);

        } else{

            alert(queue.enqueue());
        }

        console.log(queue.queueControl, queue.canEnqueue());
       
    } else {
        alert("Value to input needed")
    }

}



// takeBtn.onclick = function () {
//     let listRemoveGroup = [...document.querySelectorAll('.bg-secondary')];
//     let firstItemOfList = listRemoveGroup[0];


//     if (stack.isEmpty()) {
//         messageEl.classList.add("alert", "alert-warning");
//         messageEl.innerText = stack.pop();
//         listEl.append(messageEl)
//     } else {
//         stack.pop();
//         messageEl.classList.remove('alert','alert-warning');
//         messageEl.innerHTML = "";

//         firstItemOfList.innerHTML = " ";
//         firstItemOfList.classList.remove("bg-secondary");
//         firstItemOfList.classList.add("bg-light");

//         listRemoveGroup.filter(el => el.classList.contains('bg-secondary'))   
//     }
// }



function addListItem(paramContent) {
    let listItem = document.createElement("li");
    listItem.classList.add('list-group-item', 'bg-secondary');
    listItem.innerHTML = paramContent;

    return listItem;
}