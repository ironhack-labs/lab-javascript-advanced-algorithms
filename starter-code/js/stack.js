let sadd = document.getElementById("sadd")
let sinput = document.getElementById("sinput")
let sdivs = document.getElementsByClassName("s")
let sover = document.getElementsByClassName("sover")
let stake = document.getElementById("stake")
let sunder= document.getElementsByClassName("sunder")
let stack = new StackDataStructure()

sadd.addEventListener("click", () => {


    if (!stack.canPush()) {
        sover[0].classList.add("flow")
        sover[0].classList.remove("normal")

    } else {

        if(stack.isEmpty()){
            sunder[0].classList.remove("flow")
            sunder[0].classList.add("normal")
        }
        stack.push(sinput.value)

        sdivs[stack.stackControl.length - 1].classList.add("full")
        sdivs[stack.stackControl.length - 1].classList.remove("empty")
        sdivs[stack.stackControl.length - 1].innerHTML = sinput.value
    }

})

stake.addEventListener("click", () => {

    if (stack.isEmpty()) {

       sunder[0].classList.add("flow")
       sunder[0].classList.remove("normal")

    } else {
        if(!stack.canPush()){
            sover[0].classList.remove("flow")
            sover[0].classList.add("normal")
        }
        stack.pop()
        sdivs[stack.stackControl.length].classList.add("empty")
        sdivs[stack.stackControl.length].classList.remove("full")
        sdivs[stack.stackControl.length].innerHTML = ""
    }
})