size=prompt("the default length is 8.\n if you want to change it, write the new length")
var stack=new StackDataStructure(size)
var $stack = document.getElementById('stack')
var $stackElements;
var $stackAdd= document.getElementById("stack-add")
var $stackTake= document.getElementById("stack-take")
var $stackInput = document.getElementById("stack-input")
var $elStackTake = document.getElementById("el-stack-take")
for(var i=-1;i<=stack.MAX_SIZE;i++){
  $stack.appendChild(document.createElement('li'))
}

$stackElements=$stack.getElementsByTagName('li')
$stackTake.onclick=function(){
  var i=0;
  var element=stack.pop() 
  if(element!="Stack Underflow"){
    $stackElements[0].innerHTML=""
    $stackElements[0].className=""
    i=stack.MAX_SIZE-stack.stackControl.length

    $stackElements[i].innerHTML=""
    $stackElements[i].className=""
    console.log($elStackTake,element)
    $elStackTake.innerHTML=element
  }else{
    $stackElements[stack.MAX_SIZE+1].innerHTML="Stack Underflow"
    $stackElements[stack.MAX_SIZE+1].className="underflow"
    // "Stack Underflow"
  }
}
$stackAdd.onclick=function(){
  $stackInput.focus()
  if($stackInput.value==""){
      alert("no puede añadir un elemento vacio")
  
    return
  }
  var i=0;
  if(stack.push($stackInput.value)!="Stack Overflow"){
    $elStackTake.innerHTML=""
    $stackElements[stack.MAX_SIZE+1].innerHTML=""
    $stackElements[stack.MAX_SIZE+1].className=""
    i=stack.MAX_SIZE-stack.stackControl.length+1
    $stackElements[i].innerHTML=$stackInput.value;
    $stackElements[i].className="lleno"
    $stackInput.value=""
  }else{
    $stackElements[0].innerHTML="Stack Overflow"
    $stackElements[0].className="overflow"
  }
}