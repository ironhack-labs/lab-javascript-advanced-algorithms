/*var myStack = new StackDataStructure()
$(".add").click(function(){
    $("#addElemet")
 myStack.push();
 var i = myStack.stackControl.length-1;
 $($(".element")[i]).addClass("elementOff")
 console.log(myStack.stackControl);
 });
 $(".take").click(function(){
    $("#takeElement")
 myStack.pop();
 var i = myStack.stackControl.length;
 $($(".element")[i]).removeClass("elementOff")
 console.log(myStack.stackControl);
 });*/
 var myStack = new StackDataStructure()
$(".add").click(function(){
    $("#addElemet")
myStack.push(1);
var i = myStack.MAX_SIZE -myStack.stackControl.length;
$($(".element")[i]).addClass("elementOff")
console.log(myStack.stackControl);
});
$(".take").click(function(){
    $("#takeElement")
myStack.pop();
var i = myStack.MAX_SIZE -myStack.stackControl.length-1;
$($(".element")[i]).removeClass("elementOff")
console.log(myStack.stackControl);
});
