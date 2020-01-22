const stackDataStructure = new StackDataStructure
let stackAdd = document.querySelector("#stackAdd")
let stackTake = document.querySelector("#stackTake")
let stackElements = document.querySelectorAll("elm stack")
let input = document.getElementById("stackInput")

console.log(input)

stackAdd.addEventListener("click", function () {


    addStack(input.value)
    console.log(stackDataStructure.stackControl)
    let i = stackDataStructure.stackControl.length //para saber que  div pintar
    //changeColor(i)
    a = stackElements.getElementById(i)
    console.log(a)
    a.innerText = input.value
})

function addStack(elm) {
    stackDataStructure.push(elm)
}

function changeColor(elm) {
    elm.classList.remove("empty")
    elm.classList.add("full")
    console.log(stackElements)
}

function removeColor(elm) {
    elm.classList.remove("full")
    elm.classList.add("empty")


}