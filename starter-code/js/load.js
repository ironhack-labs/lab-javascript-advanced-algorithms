const Pile = {
  stack: {
    obj: null,
    add: null,
    take: null,
    pile: null
  },
  queue: {
    obj: null,
    add: null,
    take: null,
    pile: null
  }
}

window.onload = function(){
  initStack();
  initQueue();
  // console.log(Pile)
}