// botones
let buttonAdd = document.getElementById("addS")
let buttonRemove = document.getElementById("removeS")
// input
let stackInput = document.getElementById("textS")
// piezas
let divS = document.getElementsByClassName("pieceS")
// stack over
let overflowS = document.getElementsByClassName("showA")
// stack under
let underflowS = document.getElementsByClassName("showB")
let stack = new StackDataStructure()


buttonAdd.addEventListener("click", () => {


    if (!stack.canPush()) {
        overflowS[0].classList.add("show")
        overflowS[0].classList.remove("")

    } else {

        if (stack.isEmpty()) {
            underflowS[0].classList.remove("hidde")
            underflowS[0].classList.add("normal")
        }
        stack.push(stackInput.value)

        divS[stack.stackControl.length - 1].classList.add("show")
        divS[stack.stackControl.length - 1].classList.remove("hidde")
        divS[stack.stackControl.length - 1].innerHTML = stackInput.value
    }

})

buttonRemove.addEventListener("click", () => {

    if (stack.isEmpty()) {

        underflowS[0].classList.add("showS")
        underflowS[0].classList.remove("underS")

    } else {
        if (!stack.canPush()) {
            overflowS[0].classList.remove("showS")
            overflowS[0].classList.add("")
        }
        stack.pop()
        divS[stack.stackControl.length].classList.add("pieces")
        divS[stack.stackControl.length].classList.remove("show")
        divS[stack.stackControl.length].innerHTML = ""
    }
})