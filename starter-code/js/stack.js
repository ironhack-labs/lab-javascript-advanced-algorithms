var stack = new StackDataStructure();

let botAdd = document.getElementsByTagName('button')[0]
let botTake = document.getElementsByTagName('button')[1]
let meterTexto = document.getElementById('texto')

let elementos = document.getElementsByTagName('div')

//console.log(botAdd, botTake, meterTexto, elemento3)

botAdd.addEventListener('click', function () {
    //console.log("he clicado el add")
    if(stack.MAX_SIZE == stack.stackControl.length){
        alert("no se pueden meter mas elementos")
    }
    stack.push(meterTexto.value)
    let num = stack.MAX_SIZE - stack.stackControl.length
    //console.log(num, stack.stackControl.length)
    elementos[num].innerText = meterTexto.value
    
    //console.log(num, stack.stackControl.length)
})

botTake.addEventListener('click', function () {
    if (stack.stackControl.length == 0) {
        alert("no hay elementos que sacar")
    }
    //console.log("he clicado el take")
    let num = stack.MAX_SIZE - stack.stackControl.length
    //console.log(num, stack.stackControl.length)
    elementos[num].innerHTML= ""
    stack.pop()
})
