window.onload = function(){

  btnAddStack = document.getElementById('btnAddStack');
  btnTakeStack = document.getElementById('btnTakeStack');
  stack = new StackDataStructure();
  document.getElementById('btnAddStack').onclick = addStack;
  document.getElementById('btnTakeStack').onclick = takeStack;

  btnAddQueue = document.getElementById('btnAddQueue');
  btnTakeQueue = document.getElementById('btnTakeQueue');
  queue = new QueueDataStructure();
  document.getElementById('btnAddQueue').onclick = addQueue;
  document.getElementById('btnTakeQueue').onclick = takeQueue;

  printStack();
  printQueue();
};
