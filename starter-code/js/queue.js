var stackObj = new StackDataStructure


var li=document.querySelectorAll(".stack li")
var add = document.querySelectorAll("button.azul")[0]
var take = document.querySelectorAll("button.rojo")[0]
var texto = document.querySelectorAll(".stack input")[0]
var h3 = document.querySelectorAll("h3")[0]
var h4 = document.querySelectorAll("h4")[0]


add.addEventListener("click",function(e){
    
    if (stackObj.push(texto.value)) {
        li[stackObj.stackControl.length-1].innerHTML =texto.value
        
    }
    if (stackObj.stackControl.length>=stackObj.MAX_SIZE){
        h3.style = "display:block"
    }
    if (stackObj.stackControl.length > 0) {
        h4.style = "display:none"
    }

    
})

take.addEventListener("click", function (e) {

    if (stackObj.pop(texto.value)) {
        
        li[stackObj.stackControl.length].innerHTML = ""
        
    }
    if (stackObj.stackControl.length < stackObj.MAX_SIZE) {
        h3.style = "display:none"
    }

    if (stackObj.stackControl.length <= 0) {
        h4.style = "display:block"
    }


})
