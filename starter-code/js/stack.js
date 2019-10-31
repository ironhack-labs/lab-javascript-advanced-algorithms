let stack = new StackDataStructure();
let myArr = [];
let ulDOMEl = document.querySelector(".stack-list");
let containerSize = stack.MAX_SIZE - 1;
let contents = [];

function paintStacks(num, arrLength) {
    ulDOMEl.innerHTML = "";
    Array(stack.MAX_SIZE - 1).fill(" ").forEach((el,idx) => {
        
        let liDOMEl = document.createElement("li");
        liDOMEl.classList.add(`li-element`)
        ulDOMEl.appendChild(liDOMEl);
        if (idx >= num - arrLength ) {
            liDOMEl.classList.add(`filled`)
            
        }
        // liDOMEl.innerHTML = contents[idx]

    })
}

document.querySelector(".add-btn").onclick = () => {
    document.querySelector(".take-btn").disabled = false;
    if(stack.canPush()) {
        let inputDOMEl = document.querySelector(".input")
        let newEl = inputDOMEl.value;
        
        stack.push(newEl);
        contents = stack.stackControl;
        console.log(stack.stackControl);
        paintStacks(containerSize, stack.stackControl.length)
    } else {
        document.querySelector(".add-btn").disabled = true;
        let newLiEl = document.createElement("li");
        newLiEl.classList.add("li-element");
        newLiEl.innerHTML = "Stack Overflow";
        newLiEl.setAttribute("id", "overflow");
        ulDOMEl.insertBefore(newLiEl, ulDOMEl.childNodes[0])
    }
}

document.querySelector(".take-btn").onclick = () => {
    document.querySelector(".add-btn").disabled = false;
    if (stack.isEmpty()) {
        let newLiEl = document.createElement("li");
        newLiEl.classList.add("li-element");
        newLiEl.innerHTML = stack.pop();
        newLiEl.setAttribute("id", "overflow");
        ulDOMEl.appendChild(newLiEl);
        document.querySelector(".take-btn").disabled = true;
    } else {
        document.querySelector(".take-btn").disabled = false;
        stack.pop();
        paintStacks(containerSize, stack.stackControl.length);
    }     
}