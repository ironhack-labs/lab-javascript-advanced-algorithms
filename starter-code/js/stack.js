let addButton = document.getElementById("btn-add");
addButton.addEventListener("click", changeClassStyleDiv);
addButton.addEventListener("click", addText);

function changeClassStyleDiv() {
  let divElements = document.getElementsByTagName("div");
  console.log(divElements);
  for (var i = 0; i < divElements.length; i++) {
    divElements.item(i).classList.add("added");
  }
}
