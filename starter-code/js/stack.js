var stack = new StackDataStructure()

function addStack(){
var input_stack = document.getElementById("input-stack").value

if (input_stack != ''){
  document.getElementById('s-underflow').classList.add('invisible')
  if(stack.canPush()){
    stack.push(input_stack)
    var box = document.getElementById('s_'+stack.stackControl.length)
    box.classList.add('active')
    box.innerHTML = input_stack
    document.getElementById("input-stack").value = ""
  }else{
    document.getElementById('s-overflow').classList.remove('invisible')
  }

} else{
  alert("El campo no puede estar vacío")
}
}

function takeStack(){
  if(!stack.isEmpty()){
    document.getElementById('s-overflow').classList.add('invisible')
    var box = document.getElementById('s_'+stack.stackControl.length)
    box.classList.remove('active')
    box.innerHTML = ''
    stack.pop()
  }else{
    document.getElementById('s-underflow').classList.remove('invisible')
  }
  }

