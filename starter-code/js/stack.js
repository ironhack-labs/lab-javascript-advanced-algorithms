let stack = new StackDataStructure()
let btnTakeStack = document.getElementById('takestack')
let btnAddStack = document.getElementById('addstack')
let li = document.getElementById('delete')
let arr = document.querySelectorAll('.stli')
let inputStack = document.getElementById('input')
let cont = 0


function recoger() {
    console.log(inputStack.value)
    return inputStack.value
};

// BOTONES
btnTakeStack.addEventListener('click', function () {
    if (stack.isEmpty){
        li.innerText = stack.pop()
    }else{
        console.log(arr[cont])
        arr[cont].innerText = ""
        arr[cont].className = "bg-color stli tam-li"
        cont--
    }
});

btnAddStack.addEventListener('click', function () {
    if (stack.canPush){
        stack.push(recoger())
        //console.log(arr)
        arr[cont].innerText = recoger()
        arr[cont].className = "stli tam-li bg-green"
        cont++
    }
});