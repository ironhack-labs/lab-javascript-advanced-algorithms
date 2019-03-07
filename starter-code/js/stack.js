var stack = new StackDataStructure();
var input = document.getElementsByClassName('form-stack');
var btadd = document.getElementById('add-stack');
var bttake = document.getElementById('take-stack');
var list = document.getElementsByClassName('li-stack')
var conta = 1;
var conta2 = 0;
stack.MAX_SIZE=8;

//Adicionar ao Stack
btadd.addEventListener('click', function () {
    if (stack.canPush()==true){
        if (input[0].value == ""){
               return console.log('erro');
        }
        else
            stack.push(input[0].value);     
            list[stack.MAX_SIZE-conta].innerHTML = stack.stackControl[conta2]; 
            if (stack.stackControl.length<stack.MAX_SIZE){
            conta += 1;
            conta2 +=1;
        }
    }
    else { 
        list[stack.MAX_SIZE-conta].innerHTML = 'Stack Overflow'; 
    }
});

//Remover do Stack
bttake.addEventListener('click', function () {
    if (list[stack.MAX_SIZE-conta].innerHTML == 'Stack Overflow' ){
        stack.pop();  
        return  list[stack.MAX_SIZE-conta].innerHTML = "";
    }    
    if (conta2>0){
        stack.pop();     
        list[stack.MAX_SIZE-conta].innerHTML = "";
        conta -= 1;
        conta2 -=1;
         
    }
    if (conta2<1){
        list[stack.MAX_SIZE-conta].innerHTML = 'Stack Underflow';
        conta =1;
        conta2 =0;
        stack.pop();  
       return      
    } 
});