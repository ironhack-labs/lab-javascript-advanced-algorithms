var stack = new StackDataStructure
const add = document.getElementById('add')
const take = document.getElementById('take')
const inp = document.getElementById('txt')

const stackDiv = document.getElementsByClassName("stack")


function print() {
    if (stack.canPush()) {
        stackDiv[stack.MAX_SIZE - stack.stackControl.length].innerHTML = inp.value
        stackDiv[stack.MAX_SIZE - stack.stackControl.length].className += " stackBlue"
    }
    if (stack.isEmpty()) {
        stackDiv[stack.stackControl.length == 3].innerHTML = "Stack Overflow"
        stackDiv[stack.stackControl.length == 3].className = "stackRed"


    }

}

add.addEventListener('click', function () {
    //stack.isEmpty()
    stack.push()
    print()

})

//-----------------------------------------------------------------------

function erease() {
    if (stack.canPush()) {
        stackDiv[stack.MAX_SIZE - stack.stackControl.length - 1].innerHTML = " "
        stackDiv[stack.MAX_SIZE - stack.stackControl.length - 1].className = "stack"

    }
}

take.addEventListener('click', function () {
    stack.isEmpty()
    stack.pop()
    erease()
})



