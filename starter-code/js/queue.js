let queue = new QueueDataStructure()


for (let i = 0; i < queue.MAX_SIZE; i++) {
    cardsQueue += `<div class="card mb-2"></div>`
}


$("#queue-cards").html(cardsQueue)