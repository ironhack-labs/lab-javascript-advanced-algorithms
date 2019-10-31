const stack = new StackDataStructure();

const addBtn = document.querySelector("#add-btn");
const takeBtn = document.querySelector("#take-btn");
const inputEl = document.querySelector("#text-input");
let listEl = document.querySelector("#stack .list-group")
let messageEl = document.createElement("div");


addBtn.onclick = function () {
    let listGroup = [...document.querySelectorAll('#stack .bg-light')];
    let lastItemOfList = listGroup[listGroup.length - 1];

    if (inputEl.value) {
        let inputVal = inputEl.value;

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
            listEl.prepend(messageEl)
        }
    }else {
        alert("Value to input needed")
    }

}



takeBtn.onclick = function () {
    let listRemoveGroup = [...document.querySelectorAll('.bg-secondary')];
    let firstItemOfList = listRemoveGroup[0];
    

    if (stack.isEmpty()) {
        messageEl.classList.add("alert", "alert-warning");
        messageEl.innerText = stack.pop();
        listEl.append(messageEl)
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



