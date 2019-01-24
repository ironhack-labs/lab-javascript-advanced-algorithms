let data = new StackDataStructure()

let input = document.getElementById('stackelement')
let addBtn = document.getElementById('add-stack')
let removeBtn = document.getElementById('delete-stack')
let divs = document.getElementById('stack-div')
let errorDivOver = document.getElementById('over-stack')
let errorDivUnder = document.getElementById('under-stack')

let arrAux = []

// console.log(input)
// console.log(addBtn)
// console.log(removeBtn)
// console.log(divs)
// console.log(errorDiv)

for(var i = 4; i < divs.children.length - 1; i++) {
  arrAux.push(divs.children[i])
}

// console.log(arrAux)

  // addBtn.innerHTML = "lolaxo"

let k = arrAux.length - 1

// arrAux[k].innerHTML = "asdijf"
// console.log(arrAux[k])

addBtn.addEventListener('click', function () {
  
  if (data.canPush()) {
    data.push(input.value)
    arrAux[k].innerHTML = input.value
    arrAux[k].classList.add('addedelement')
    k--
    errorDivUnder.style.display = 'none'
  } else {
    errorDivOver.style.display = 'block' //blcock
  }
  
})

removeBtn.addEventListener('click', () => {

  if (data.isEmpty()) {
    errorDivUnder.style.display = 'block'
  } else {
    
    k++
    errorDivOver.style.display = 'none'
    data.pop()
    arrAux[k].innerHTML = ""
    arrAux[k].classList.remove('addedelement')
  }
  
})

















  // let div = divs.lastChild
  
  
  // divs.lastChild = 
  // addBtn.innerHTML = "lol"