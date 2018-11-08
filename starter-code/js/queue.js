
var queueArray = [];
var counter2 = 0;



document.getElementById("addQueue").addEventListener("click", function () {

    document.getElementById("queueUnder").setAttribute("class", "displayNone")

    if (queueArray.length < 8) {

        var textBox = document.getElementById("entradaText2").value;
        document.getElementById('entradaText2').value = "";

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

                queueArray.push(textBox)

                counter2++;

                if (queueArray.length == 1) {
                    var elemento = document.getElementById("column1")
                    var texto = document.createTextNode(queueArray[0])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }

                if (queueArray.length == 2) {
                    var elemento = document.getElementById("column2")
                    var texto = document.createTextNode(queueArray[1])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }
                if (queueArray.length == 3) {
                    var elemento = document.getElementById("column3")
                    var texto = document.createTextNode(queueArray[2])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }

                if (queueArray.length == 4) {
                    var elemento = document.getElementById("column4")
                    var texto = document.createTextNode(queueArray[3])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }
                if (queueArray.length == 5) {
                    var elemento = document.getElementById("column5")
                    var texto = document.createTextNode(queueArray[4])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }

                if (queueArray.length == 6) {
                    var elemento = document.getElementById("column6")
                    var texto = document.createTextNode(queueArray[5])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }
                if (queueArray.length == 7) {
                    var elemento = document.getElementById("column7")
                    var texto = document.createTextNode(queueArray[6])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }

                if (queueArray.length == 8) {
                    var elemento = document.getElementById("column8")
                    var texto = document.createTextNode(queueArray[7])

                    elemento.appendChild(texto)
                    elemento.setAttribute("class", "ironHack")

                }
            }
        }

    }
    else { document.getElementById("queueOver").setAttribute("class", "displayBlock outFlow") }


});


document.getElementById("takeQueue").addEventListener("click", function () {

    document.getElementById("queueOver").setAttribute("class", "displayNone")

    if (queueArray.length > 0) {

        if (queueArray.length == 1) {
            var elemento = document.getElementById("column1")

            elemento.innerHTML = "  "
            queueArray.pop();
            elemento.setAttribute("class", "gray")

        }

        if (queueArray.length == 2) {
            var elemento = document.getElementById("column1")
            var texto = document.createTextNode(queueArray[1])
            elemento.innerHTML = "  "
            elemento.appendChild(texto)
            elemento.setAttribute("class", "ironHack")


            var elemento2 = document.getElementById("column2")
            elemento2.innerHTML = "  "

            elemento2.setAttribute("class", "gray")
            queueArray.shift()
        }

        if (queueArray.length == 3) {
            var elemento = document.getElementById("column1")
            var texto = document.createTextNode(queueArray[1])
            elemento.innerHTML = "  "
            elemento.appendChild(texto)
            elemento.setAttribute("class", "ironHack")

            var elemento3 = document.getElementById("column2")
            var texto3 = document.createTextNode(queueArray[2])
            elemento3.innerHTML = "  "
            elemento3.appendChild(texto3)
            elemento3.setAttribute("class", "ironHack")

            var elemento2 = document.getElementById("column3")
            elemento2.innerHTML = "  "

            elemento2.setAttribute("class", "gray")
            queueArray.shift()
        }

        if (queueArray.length == 4) {
            var elemento = document.getElementById("column1")
            var texto = document.createTextNode(queueArray[1])
            elemento.innerHTML = "  "
            elemento.appendChild(texto)
            elemento.setAttribute("class", "ironHack")

            var elemento3 = document.getElementById("column2")
            var texto3 = document.createTextNode(queueArray[2])
            elemento3.innerHTML = "  "
            elemento3.appendChild(texto3)
            elemento3.setAttribute("class", "ironHack")

            var elemento4 = document.getElementById("column3")
            var texto4 = document.createTextNode(queueArray[3])
            elemento4.innerHTML = "  "
            elemento4.appendChild(texto4)
            elemento4.setAttribute("class", "ironHack")

            var elemento2 = document.getElementById("column4")
            elemento2.innerHTML = "  "

            elemento2.setAttribute("class", "gray")
            queueArray.shift()
        }

        if (queueArray.length == 5) {
            var elemento = document.getElementById("column1")
            var texto = document.createTextNode(queueArray[1])
            elemento.innerHTML = "  "
            elemento.appendChild(texto)
            elemento.setAttribute("class", "ironHack")

            var elemento3 = document.getElementById("column2")
            var texto3 = document.createTextNode(queueArray[2])
            elemento3.innerHTML = "  "
            elemento3.appendChild(texto3)
            elemento3.setAttribute("class", "ironHack")

            var elemento4 = document.getElementById("column3")
            var texto4 = document.createTextNode(queueArray[3])
            elemento4.innerHTML = "  "
            elemento4.appendChild(texto4)
            elemento4.setAttribute("class", "ironHack")

            var elemento5 = document.getElementById("column4")
            var texto5 = document.createTextNode(queueArray[4])
            elemento5.innerHTML = "  "
            elemento5.appendChild(texto5)
            elemento5.setAttribute("class", "ironHack")

            var elemento2 = document.getElementById("column5")
            elemento2.innerHTML = "  "

            elemento2.setAttribute("class", "gray")
            queueArray.shift()

        }

        if (queueArray.length == 6) {
            var elemento = document.getElementById("column1")
            var texto = document.createTextNode(queueArray[1])
            elemento.innerHTML = "  "
            elemento.appendChild(texto)
            elemento.setAttribute("class", "ironHack")

            var elemento3 = document.getElementById("column2")
            var texto3 = document.createTextNode(queueArray[2])
            elemento3.innerHTML = "  "
            elemento3.appendChild(texto3)
            elemento3.setAttribute("class", "ironHack")

            var elemento4 = document.getElementById("column3")
            var texto4 = document.createTextNode(queueArray[3])
            elemento4.innerHTML = "  "
            elemento4.appendChild(texto4)
            elemento4.setAttribute("class", "ironHack")

            var elemento5 = document.getElementById("column4")
            var texto5 = document.createTextNode(queueArray[4])
            elemento5.innerHTML = "  "
            elemento5.appendChild(texto5)
            elemento5.setAttribute("class", "ironHack")

            var elemento6 = document.getElementById("column5")
            var texto6 = document.createTextNode(queueArray[5])
            elemento6.innerHTML = "  "
            elemento6.appendChild(texto6)
            elemento6.setAttribute("class", "ironHack")

            var elemento2 = document.getElementById("column6")
            elemento2.innerHTML = "  "

            elemento2.setAttribute("class", "gray")
            queueArray.shift()
        }

        if (queueArray.length == 7) {
            var elemento = document.getElementById("column1")
            var texto = document.createTextNode(queueArray[1])
            elemento.innerHTML = "  "
            elemento.appendChild(texto)
            elemento.setAttribute("class", "ironHack")

            var elemento3 = document.getElementById("column2")
            var texto3 = document.createTextNode(queueArray[2])
            elemento3.innerHTML = "  "
            elemento3.appendChild(texto3)
            elemento3.setAttribute("class", "ironHack")

            var elemento4 = document.getElementById("column3")
            var texto4 = document.createTextNode(queueArray[3])
            elemento4.innerHTML = "  "
            elemento4.appendChild(texto4)
            elemento4.setAttribute("class", "ironHack")

            var elemento5 = document.getElementById("column4")
            var texto5 = document.createTextNode(queueArray[4])
            elemento5.innerHTML = "  "
            elemento5.appendChild(texto5)
            elemento5.setAttribute("class", "ironHack")

            var elemento6 = document.getElementById("column5")
            var texto6 = document.createTextNode(queueArray[5])
            elemento6.innerHTML = "  "
            elemento6.appendChild(texto6)
            elemento6.setAttribute("class", "ironHack")

            var elemento7 = document.getElementById("column6")
            var texto7 = document.createTextNode(queueArray[6])
            elemento7.innerHTML = "  "
            elemento7.appendChild(texto7)
            elemento7.setAttribute("class", "ironHack")

            var elemento2 = document.getElementById("column7")
            elemento2.innerHTML = "  "

            elemento2.setAttribute("class", "gray")
            queueArray.shift()
        }

        if (queueArray.length == 8) {
            var elemento = document.getElementById("column1")
            var texto = document.createTextNode(queueArray[1])
            elemento.innerHTML = "  "
            elemento.appendChild(texto)
            elemento.setAttribute("class", "ironHack")

            var elemento3 = document.getElementById("column2")
            var texto3 = document.createTextNode(queueArray[2])
            elemento3.innerHTML = "  "
            elemento3.appendChild(texto3)
            elemento3.setAttribute("class", "ironHack")

            var elemento4 = document.getElementById("column3")
            var texto4 = document.createTextNode(queueArray[3])
            elemento4.innerHTML = "  "
            elemento4.appendChild(texto4)
            elemento4.setAttribute("class", "ironHack")

            var elemento5 = document.getElementById("column4")
            var texto5 = document.createTextNode(queueArray[4])
            elemento5.innerHTML = "  "
            elemento5.appendChild(texto5)
            elemento5.setAttribute("class", "ironHack")

            var elemento6 = document.getElementById("column5")
            var texto6 = document.createTextNode(queueArray[5])
            elemento6.innerHTML = "  "
            elemento6.appendChild(texto6)
            elemento6.setAttribute("class", "ironHack")

            var elemento7 = document.getElementById("column6")
            var texto7 = document.createTextNode(queueArray[6])
            elemento7.innerHTML = "  "
            elemento7.appendChild(texto7)
            elemento7.setAttribute("class", "ironHack")

            var elemento8 = document.getElementById("column7")
            var texto8 = document.createTextNode(queueArray[7])
            elemento8.innerHTML = "  "
            elemento8.appendChild(texto8)
            elemento8.setAttribute("class", "ironHack")

            var elemento2 = document.getElementById("column8")
            elemento2.innerHTML = "  "

            elemento2.setAttribute("class", "gray")
            queueArray.shift()
        }


    } else { document.getElementById("queueUnder").setAttribute("class", "displayBlock outFlow") }

});

