class StackDataStructure {

  constructor() {

    this.stackControl = [],
    this.MAX_SIZE = 8

  }

  isEmpty() {
    if (!this.stackControl.length) return true
    return false
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) return true
    return false
  }

  push(ele) {
    if (this.canPush()) { 
      this.stackControl.push(ele)
      return this.stackControl
    }
    return "Stack Overflow"
  }

  pop(ele) {
    if (!this.isEmpty()) return this.stackControl.pop(ele)
    return "Stack Underflow"
  }
}

const olStack = document.getElementById("stack")
const inputStack = document.getElementById("element-to-stack")

document.addEventListener("DOMContentLoaded", function(event) { 
  // var html = '';
  // memoryGame.cards.forEach(function (pic) {
  //   html += '<div class="card" data-card-name="'+ pic.name +'">';
  //   html += '  <div class="back" name="'+ pic.img +'"></div>';
  //   html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
  //   html += '</div>';
  // });

  // // Add all the div's to the HTML
  // document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.btn').forEach(function(button) {
    button.onclick = (event) => {
      if (event.currentTarget.id == "add-to-stack") { 
        console.log("Add to stack button clicked")
        console.log(olStack)
        console.log(inputStack.value)
        if (inputStack.value != "") { 
          let stackData = new StackDataStructure() // Aquí empece a dudar y no se si esto es correcto
          stackData.push(inputStack.value)           
        }
        else { alert("Debes especificar un valor") }
      }
      if (event.currentTarget.id == "take-from-stack") { console.log("Take button clicked") }
      
      console.log('Button clicked')
      console.log(event)
      console.log(event.currentTarget)

     }
  });
});

function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}