let stack = new StackDataStructure()
let cardsStack = ""

for (let i = 0; i < stack.MAX_SIZE; i++) {
    cardsStack += `<div id="${i}"class="card mb-2"></div>`
}

$("#stack-cards").html(cardsStack)

$(".stack .btn-primary").on("click", function() {
    let value = stack.push($("#stack-item").val())
    if (typeof value === 'array') {
    console.log("bar")
    } else {
        console.log("foo")
    }
})
$(".stack .btn-danger").on("click", function() {
    
})

