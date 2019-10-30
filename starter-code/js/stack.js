var stack = new StackDataStructure()                    //Creamos nuestro objeto
var btnAddS = document.getElementById('btnAddS')
var btnTakeS = document.getElementById('btnTakeS')
let textS = document.getElementById("input0")

function printPush() {                                  //agregamos los valores al div
    let test = [...stack.stackControl]
    let acc = stack.stackControl.length
    let div = document.getElementById(11 - acc)
    div.style.backgroundColor = ("lightsteelblue")
    let p = div.getElementsByTagName('p')
    p[0].innerHTML = (test.pop())
    console.log(div)
}

function printPopP() {                                  //Quitamos los valores al div
    let acc = stack.stackControl.length
    let div = document.getElementById(10 - acc)
    div.style.backgroundColor = ("lightgray")
    let p = div.getElementsByTagName('p')
    p[0].innerHTML = ("")
}

btnAddS.addEventListener('click', function () {         //Función para agregar valores al objeto     
    if (stack.canPush()) {                              //y llamar a las funciones
        stack.push(textS.value)
        printPush()
    } else {
        alert("Stack Overflow")
        printOverFlow()
    }
})

btnTakeS.addEventListener('click', function () {          //Función para quitar valores al objeto
    if (stack.isEmpty()) {                                //y llamar a las funciones
        alert("Stack Underflow")
    } else {
        stack.pop()
        printPopP()
    }
})