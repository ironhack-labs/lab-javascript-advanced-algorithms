let queue = new QueueDataStructure()
let cardsQueue = ""

for (let i = 0; i < queue.MAX_SIZE; i++) {
    cardsQueue += `<div class="card mb-2"></div>`
}


$("#queue-cards").html(cardsQueue)