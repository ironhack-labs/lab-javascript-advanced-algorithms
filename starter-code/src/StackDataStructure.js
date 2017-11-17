function StackDataStructure () {
this.stackControl = [];
this.MAX_SIZE = 100;
}

StackDataStructure.prototype.isEmpty = function () 
{
 if (this.stackControl.length == 0 )
    return true;
    
else return false
}

StackDataStructure.prototype.canPush = function () 
{
 if (this.stackControl.length < this.MAX_SIZE)
    return true;
    
    if (this.stackControl.length >= this.MAX_SIZE)
    return 'Stack Overflow';
else return false
}

StackDataStructure.prototype.push = function (item) 
{
 this.stackControl.push(item);
 return this.stackControl;
}

StackDataStructure.prototype.pop = function (item) 
{
 this.stackControl.pop(item);
}



//Remember that Stack is a LIFO (Last-in First-out) structure. So you have to add the right 
//methods to add elements to the structure, and it also should has the necessary methods 
//to remove elements from it. When you take an element, it should be the last one we inserted.