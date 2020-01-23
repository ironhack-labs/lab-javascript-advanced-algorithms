
let stackClass = new StackDataStructure()



let stackAdd = document.querySelector(".stack .blue")
let stackTake = document.querySelector(".stack .red")
let stackVisualBoxes = document.querySelectorAll(".visual-stack")
let inputForStack = document.querySelector(".stack input").value
let alerts = document.querySelectorAll(".alerta")




stackAdd.addEventListener("click", ()=> {

    inputForStack = document.querySelector(".stack input").value
    stackClass.push(inputForStack)
    
    stackVisualBoxes.forEach((elm)=> elm.innerText ="")
    stackClass.stackControl.forEach((elm, idx) => stackVisualBoxes[idx].innerText = elm)


    paintStackBoxes()

    appearAlert()
    //console.log(elm.innerText)
})

stackTake.addEventListener("click", ()=> {


    stackClass.pop(inputForStack)
    stackVisualBoxes.forEach((elm)=> elm.innerText ="")

    stackClass.stackControl.forEach((elm, idx) => stackVisualBoxes[idx].innerText = elm)

    paintStackBoxes()

    appearAlert()


})




function paintStackBoxes(){
 
    stackVisualBoxes.forEach((elm) => {
        elm.classList.remove("filled")

        if(elm.innerText){
            elm.classList.add("filled")
        }
    })   
}

function appearAlert(){

    alerts = document.querySelectorAll(".alerta")

    alerts.forEach((elm)=>{
        elm.classList.add("invisible")})



    if(stackClass.isEmpty()){
        document.querySelector(".stack-uflow").classList.remove("invisible")

    }else if(stackClass.canPush()==false){
            document.querySelector(".stack-oflow").classList.remove("invisible")
        }




}

    

//stackVisualBoxes.forEach((elm, idx) => elm.innerText = stackClass.stackControl[idx])

