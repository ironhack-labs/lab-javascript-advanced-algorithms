var stack = new StackDataStructure();
var btnBlue = document.getElementById('btnBlue');
var btnRed = document.getElementById('btnRed');
var positions = document.getElementsByClassName('position')
var counter = 0

for (let i=0; i<positions.length;i++){
  console.log(positions[i])
}

btnBlue.addEventListener('click', function () {
  var input = document.getElementsByTagName('input')[0].value
  //var input = document.getElementById('input').innerHTML
  console.log(input)
  //stack.push(input.innerHTML)
  //counter++
  
  /*positions.forEach(element => {

   if (this.getAttribute('class') == 'position_full'){

    }*/
    
  })
  

  btnRed.addEventListener('click', function () {
    var input = document.getElementsByTagName('input')[0].value
    //var input = document.getElementById('input').innerHTML
    console.log(input)
    //stack.push(input.innerHTML)
    //counter++
    
    /*positions.forEach(element => {
  
     if (this.getAttribute('class') == 'position_full'){
  
      }*/
      
    })
    