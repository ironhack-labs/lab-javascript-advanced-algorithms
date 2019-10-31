const stack = new StackDataStructure();

const stackAddBtn = document.querySelector("#stack .add-btn");
const stackTakeBtn = document.querySelector("#stack .take-btn");
const stackInputEl = document.querySelector("#stack .text-input");
let stackList = document.querySelector("#stack .list-group")
let messageEl = document.createElement("div");


stackAddBtn.onclick = function () {
    let listGroup = [...document.querySelectorAll('#stack .bg-light')];
    let lastItemOfList = listGroup[listGroup.length - 1];

    if (stackInputEl.value) {
        let inputVal = stackInputEl.value;

        if (stack.canPush()) {
            stack.push(inputVal);
            
            messageEl.classList.remove('alert','alert-warning');
            messageEl.innerHTML = "";

            lastItemOfList.innerHTML = inputVal;
            lastItemOfList.classList.remove("bg-light");
            lastItemOfList.classList.add("bg-secondary");

            listGroup = listGroup.filter(el => el.classList.contains("bg-light"));
        } else {
            messageEl.classList.add("alert", "alert-warning");
            messageEl.innerText = stack.push();
            stackList.prepend(messageEl)
        }
    }else {
        alert("Value to input needed")
    }

}



stackTakeBtn.onclick = function () {
    let listRemoveGroup = [...document.querySelectorAll('#stack .bg-secondary')];
    let firstItemOfList = listRemoveGroup[0];
    

    if (stack.isEmpty()) {
        messageEl.classList.add("alert", "alert-warning");
        messageEl.innerText = stack.pop();
        stackList.append(messageEl)
    } else {
        stack.pop();
        messageEl.classList.remove('alert','alert-warning');
        messageEl.innerHTML = "";

        firstItemOfList.innerHTML = " ";
        firstItemOfList.classList.remove("bg-secondary");
        firstItemOfList.classList.add("bg-light");

        listRemoveGroup.filter(el => el.classList.contains('bg-secondary'))   
    }
}



