var stack = []

var divs = document.getElementsByClassName("to-fill")
var value = document.getElementById("input").value
var realValue = parseInt(value)
console.log(value)
console.log(add)

var add = document.getElementById("btn-add")
add.onclick = function() {

        for (var i = 0; i < divs.length; i++) {
            //esto es una prueba para captar las conceptos 
            divs.push(realValue[i])
            console.log(realValue)
        }
    }
    //document.querySelector("div").style = "red"
    //}