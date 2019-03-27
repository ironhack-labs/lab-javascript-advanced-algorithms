function initQueue(){
  Pile.queue.obj = new QueueDataStructure();
  Pile.queue.add = document.querySelector('#add-queue');
  Pile.queue.take = document.querySelector('#take-queue');
  Pile.queue.pile = document.querySelector('#queue-pile');
  Pile.queue.overflow = document.querySelector('#queue-overflow');
  Pile.queue.underflow = document.querySelector('#queue-underflow');
  Pile.queue.input = document.querySelector('#queue-input');
}