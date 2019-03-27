const queue = new QueueDataStructure;

document.querySelector("#queueadd").onclick = () =>
{
  let input = document.querySelector("#inputqueue").value;
  queue.enqueue(input);
  for (var i = queue.queueControl.length - 1; i >= 0 ; i--)
  {
    document.querySelector(`#queue${i}`).innerHTML = queue.queueControl[i];
  }
}

document.querySelector("#queuetake").onclick = () =>
{
  queue.dequeue();
  let i = queue.queueControl.length;
  document.querySelector(`#queue${i}`).innerHTML = "";  
}