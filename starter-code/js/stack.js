var stack=14;
var insert=[];
var contador=2;
var access=0;
$(document).ready(function(){
	//Configurando STACK
	$(".stack-element:nth-child(14)").css("display","none");
	$(".error-stack").css("display","flex");
	$("#over").css("display","none");
	$(".error-queue").css("display","flex");
	//Configurando QUEUE
	$(".queue-element:nth-child(2)").css("display","none");
	$(".error-queue").css("writing-mode","vertical-lr");
	$(".error-queue").css("padding","0");
	$(".error-queue:nth-child(12)").css("display","none");

});

//Click en agregar STACK

$("#add-stack").click(function(){
	$(".stack-element:nth-child(14)").css("display","flex");
	$(".error-stack").css("display","none");
	var texto=$("#stackelement").val();
	if(stack>3){
		console.log("agregado");
		$(".stack-element:nth-child("+stack+")").addClass("addedelement");
		$(".stack-element:nth-child("+stack+")").text(texto);
		
		stack--;
		console.log(stack);
		
	}
	
	if(stack<=4){
		$(".stack-element:nth-child(5)").css("display","none");
		$("#over").css("display","flex");
		setTimeout(function(){
			alert("NO queda espacio en STACK!!!");
		},100);
		//stack=;
	}
	
});

//Click en borrar STACK

$("#delete-stack").click(function(){
	if(stack>=3&&stack<=13){
		$(".stack-element:nth-child(5)").css("display","flex");
		$("#over").css("display","none");
		stack++;
	
		$(".stack-element:nth-child("+stack+")").removeClass("addedelement");
		console.log(stack);
		$(".stack-element:nth-child("+stack+")").text("");
	}
	if(stack===14){
		$(".stack-element:nth-child(14)").css("display","none");
		$("#under").css("display","flex");
	}
});
//Seleccionando el boton de agregar QUEUE
$("#add-queue").click(function(){
	console.log("Agregar QUEUE");
	
	/*if(queue>0&&queue<13){
		$(".under").css("display","none");
		$(".queue-element:nth-child(2)").css("display","flex");
		var textQ=$("#queue-input").val();
		$(".queue-element:nth-child("+queue+")").addClass("queue-item");
		$(".queue-element:nth-child("+queue+")").text(textQ);
		queue++;
		console.log(queue);
	};
	if(queue===13){
		$(".queue-element:nth-child(11)").css("display","none");
		$(".error-queue:nth-child(2)").css("display","flex");
		alert("mat")
	}*/
	var textQ=$("#queue-input").val();
	if(contador>1){
		$(".under").css("display","none");
		$(".queue-element:nth-child(2)").css("display","flex");
	}
	if(contador>=2 && contador<=11){
		var information=$("#queue-input").val();
		insert.unshift(information);
		console.log(contador);
		$(".queue-element:nth-child("+contador+")").text(insert[access]);
		$(".queue-element:nth-child("+contador+")").addClass("queue-item");
		contador++;	
	}
	
	if(contador>=12){
		$("#oQ").css("display","flex");
		$(".queue-element:nth-child(11)").css("display","none");
	}
});

//Seleccionando el boton de quitar QUEUE
$("#delete-queue").click(function(){
	console.log(contador);
	//insert.pop();
	//console.log(insert);
	if(contador===2){
		$(".queue-element:nth-child("+contador+")").removeClass("queue-item");
		
		$(".error-queue").css("writing-mode","vertical-lr");
		$(".error-queue").css("padding","0");
		$(".under").css("display","flex");
		$(".queue-element:nth-child(2)").css("display","none");
		console.log(contador);
	}
	if(contador>2){
		$(".queue-element:nth-child("+contador+")").removeClass("queue-item");
		console.log("mayor"+contador);
		contador--;
	}
	if(stack>=12){
		$(".queue-element:nth-child(11)").css("display","flex");
		$("#oQ").css("display","none");
	}
	/*if(contador<2){
		$("#oQ").css("display","none");
		$(".queue-element:nth-child(1)").css("display","flex");
		contador--;
	}*/

});