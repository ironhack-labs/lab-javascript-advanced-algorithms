$(document).ready(function(){
    
    var stackDataStructure = new StackDataStructure;

    function stackAdapter(){
        stackDataStructure.stackControl.forEach(function(element, index){
            var auxIndex;           
            auxIndex = (index * -1)+9;
            $('.stack-element')[auxIndex].innerText = element;
            $('.stack-element')[auxIndex].className = "stack-element stack-added-item";                                    
        });
        for(i=0; i<10-stackDataStructure.stackControl.length; i++){
            $('.stack-element')[i].innerText = '';
            $('.stack-element')[i].className = "stack-element"; 
        }
    }

    $('#add-stack').click(function(){
        if (stackDataStructure.push($('#stack-input')[0].value) === "Stack Overflow"){
            $('#eso').addClass('showerr');
        } else {
            $('#eso').removeClass('showerr');
            $('#esu').removeClass('showerr');
        }
        stackAdapter();
    });

    $('#delete-stack').click(function(){
        if(stackDataStructure.pop() === 'Stack Underflow'){
            $('#esu').addClass('showerr');
        } else {
            $('#eso').removeClass('showerr');
            $('#esu').removeClass('showerr');
        }
        stackAdapter();
    });
});