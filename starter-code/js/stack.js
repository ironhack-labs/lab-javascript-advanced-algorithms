let stack = new StackDataStructure()
addButton = document.getElementById("button-add")


addButton.onclick = () => {
    let stackedElms = document.getElementsByClassName("stacked-elms")
    let inputVal = document.getElementById("input-add")
    stack.push(inputVal.value)
    stackedElms[stack.MAX_SIZE - 1].innerHTML = stack.stackControl[stack.stackControl.length - 1]
    console.log(stackedElms)
}

