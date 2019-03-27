const Pile = {
  stack: {
    obj: null,
    add: null,
    take: null,
    pile: null,
    overflow: null,
    underflow: null,
    overflowShowed: false,
    underflowShowed: false,
    input: null,
  },
  queue: {
    obj: null,
    add: null,
    take: null,
    pile: null,
    overflow: null,
    underflow: null,
    overflowShowed: false,
    underflowShowed: false,
    input: null,
  }
}

window.onload = function(){
  initStack();
  initQueue();
}