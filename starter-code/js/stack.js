let stack = new StackDataStructure()
addButton = document.getElementById("button-add")


addButton.onclick = () => {
    let stackedElms = document.getElementsByClassName("stacked-elms")
    let inputVal = document.getElementById("input-add")
    stack.push(inputVal.value)
    stackedElms[0].innerHTML = stack.stackControl[stack.stackControl.length - 1]
}

