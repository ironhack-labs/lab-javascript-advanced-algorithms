const stack = new StackDataStructure;

document.querySelector("#stackadd").onclick = () =>
{
  let input = document.querySelector("#inputstack").value;
  stack.push(input);
  for (var i = 0; i < stack.stackControl.length; i++)
  {
    document.querySelector(`#stack${i}`).innerHTML = stack.stackControl[i];
  }
}

document.querySelector("#stacktake").onclick = () =>
{
  stack.pop();
  let i = stack.stackControl.length;
  document.querySelector(`#stack${i}`).innerHTML = "";  
}