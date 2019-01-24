stack=new StackDataStructure()

let inputStack=document.getElementById("input-stack")
let addStack=document.getElementById("add-stack")
let removeStack=document.getElementById("delete-stack")
let overStack=document.getElementById("error-stack.over")
let underStack=document.getElementById("error-stack.under")
let elementsStack=document.getElementsByClassName("stack-element")


addStack.click(function(){
    if(inputStack.val()!==""){
        if(stack.canPush()){
            stack.push(inputStack.val())
            inputStack.val()=""
        } else{
            overStack.addClass(".error-stack")
        }

    }

})

removeStack.click(function(){
    if(!stack.isEmpty()){
        overStack.removeClass("error-active")
        stack.pop()
    } else{
        underStack.addClass("error-active")
    }
})



