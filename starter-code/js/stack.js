var stack = new StackDataStructure();
var element = $("#addElement").val();
console.log(element);
console.log(stack);
if(stack.canPush(element)){
    $('#add').click(function(){
        if(stack.push(element) !== "Stack Overflow"){
            if(stack.stackControl.length==1){
                  $('.stackElement').last().addClass('blue');
                  $('.stackElement').last().text(element);
                }
              else if(stack.stackControl.length>=1){
                $('.blue').prev().addClass('blue');
                $('.blue').prev().text(element);
              }
            }
          });
        }
else{
  ('#add').click(function(){
  $('.stackElement').first().removeClass('blue');
  $('.stackElement').first().addClass('red');
  $('.stackElement').first().text("STACK OVERFLOW");
  });
}
