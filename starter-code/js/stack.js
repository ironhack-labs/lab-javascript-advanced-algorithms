
//var cualquier=$('#inputST').val()

var stack= new StackDataStructure ()
var botonpush= $("#botonpushstack")
botonpush.on("click", function(){
console.log($('#inputST').val())

stack.push($('#inputST').val())
})

