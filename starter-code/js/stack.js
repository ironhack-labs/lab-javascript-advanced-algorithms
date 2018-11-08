

var stackArray = [];
var counter = 0;

document.body.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault()
        alert("El botón gigante de ADD tiene una razón de ser, úsalo porfi")
    }
});


document.getElementById("addStack").addEventListener("click", function () {

    document.getElementById("stackUnder").setAttribute("class", "displayNone")

    if (stackArray.length < 8) {

        var textBox = document.getElementById("entradaText").value;
        document.getElementById('entradaText').value = "";

        if (textBox[0] == undefined) {
            alert("Debes ingresar un valor valido")
        }
        else {
            for (var i = 0; i < textBox.length; i++) {
                var j = i
                if (textBox[i] == " ") {
                    j = i
                } else {
                    j = -1
                }
            }


            if (j != -1) {
                alert("Este codigo es más frágil que tu corazón despues de que tu ex se fue con otr@, no lo rompas porfa, Ingresa un valor sin espacios")
            }
            else {

                stackArray.push(textBox)

                counter++;

                if (stackArray.length == 1) {
                    var elemento = document.getElementById("place1")
                    var texto = document.createTextNode(stackArray[0])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }

                if (stackArray.length == 2) {
                    var elemento = document.getElementById("place2")
                    var texto = document.createTextNode(stackArray[1])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }
                if (stackArray.length == 3) {
                    var elemento = document.getElementById("place3")
                    var texto = document.createTextNode(stackArray[2])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }

                if (stackArray.length == 4) {
                    var elemento = document.getElementById("place4")
                    var texto = document.createTextNode(stackArray[3])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }
                if (stackArray.length == 5) {
                    var elemento = document.getElementById("place5")
                    var texto = document.createTextNode(stackArray[4])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }

                if (stackArray.length == 6) {
                    var elemento = document.getElementById("place6")
                    var texto = document.createTextNode(stackArray[5])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }
                if (stackArray.length == 7) {
                    var elemento = document.getElementById("place7")
                    var texto = document.createTextNode(stackArray[6])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }

                if (stackArray.length == 8) {
                    var elemento = document.getElementById("place8")
                    var texto = document.createTextNode(stackArray[7])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }
            }
        }

    }
    else { document.getElementById("stackOver").setAttribute("class", "displayBlock outFlow") }


});



document.getElementById("takeStack").addEventListener("click", function () {

    document.getElementById("stackOver").setAttribute("class", "displayNone")

    if (stackArray.length > 0) {

        if (stackArray.length == 1) {
            var elemento = document.getElementById("place1")

            elemento.innerHTML = "  "
            stackArray.pop();
            elemento.setAttribute("class", "gray")

        }

        if (stackArray.length == 2) {
            var elemento = document.getElementById("place2")

            elemento.innerHTML = "  "
            stackArray.pop();
            elemento.setAttribute("class", "gray")

        }

        if (stackArray.length == 3) {
            var elemento = document.getElementById("place3")

            elemento.innerHTML = "  "
            stackArray.pop();
            elemento.setAttribute("class", "gray")

        }

        if (stackArray.length == 4) {
            var elemento = document.getElementById("place4")

            elemento.innerHTML = "  "
            stackArray.pop();
            elemento.setAttribute("class", "gray")

        }

        if (stackArray.length == 5) {
            var elemento = document.getElementById("place5")

            elemento.innerHTML = "  "
            stackArray.pop();
            elemento.setAttribute("class", "gray")

        }

        if (stackArray.length == 6) {
            var elemento = document.getElementById("place6")

            elemento.innerHTML = "  "
            stackArray.pop();
            elemento.setAttribute("class", "gray")

        }

        if (stackArray.length == 7) {
            var elemento = document.getElementById("place7")

            elemento.innerHTML = "  "
            stackArray.pop();
            elemento.setAttribute("class", "gray")

        }

        if (stackArray.length == 8) {
            var elemento = document.getElementById("place8")

            elemento.innerHTML = "  "
            stackArray.pop();
            elemento.setAttribute("class", "gray")

        }


    } else { document.getElementById("stackUnder").setAttribute("class", "displayBlock outFlow") }

});

