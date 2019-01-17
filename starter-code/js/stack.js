let stack = new StackDataStructure()
let cardsStack = `<div class="over mb-2" style="display:none">Stack Overflow</div>`

for (let i = 0; i < stack.MAX_SIZE; i++) {
    cardsStack += `<div class="card mb-2"></div>`
}
    cardsStack += `<div class="under mb-2" style="display:none">Stack Underflow</div>`

$("#stack-cards").html(cardsStack)

$(".stack .btn-primary").on("click", function() {
    if(stack.isEmpty() == true) {
        $("#stack-cards .under").attr("style", "display:none" )
    }
    let valueStack = stack.push($("#stack-item").val())
    let valueToPrint = $("#stack-item").val()
    valueStack
    if (Array.isArray(valueStack)) { 
    let cardsArray = document.querySelectorAll("#stack-cards .card")
    let index = cardsArray.length - 1
    $(cardsArray[index]).html(valueToPrint)
    $(cardsArray[index]).addClass("active")
    $(cardsArray[index]).removeClass("card")
    } else {
        $("#stack-cards .over").attr("style", "display:in-line" )
    }
})
$(".stack .btn-danger").on("click", function() {
    let valueToPrint = $("#stack-item").val()
    if(stack.canPush() == false) {
        $("#stack-cards .over").attr("style", "display:none" )
    }
    let value = stack.pop()
    value
    if (value === "Stack Underflow") { 
        $("#stack-cards .under").attr("style", "display:in-line" )
    } else {
        let cardsArray = document.querySelectorAll("#stack-cards .active")
        $(cardsArray[0]).html("")
        $(cardsArray[0]).addClass("card")
        $(cardsArray[0]).removeClass("active")
    }
})

