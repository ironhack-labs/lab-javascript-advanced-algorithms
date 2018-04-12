$(document).ready(function() {

	var stacks = [];
	var stackElement = $('.stack-element');
	var maxLengthArray = 10;

	var element = $('#stackelement');

	var addStack = $('#add-stack');
	var removeStack = $('#delete-stack');

	var addQueu = $('#add-queue');
	var removeQueu = $('#delete-queu');



	removeStack.click(function() {

		stacks.pop();
		$('.error-stack:first()').css('display','none');


		if(stacks[9] !== '') {
			// $('#stack1').addClass('addedelement');
			// $('#stack1').removeClass('stackElement');
			$('#stack10').text('');
		}

		if(stacks[8] !== '' && stacks[9] == null) {
			// $('#stack2').addClass('addedelement');
			// $('#stack2').removeClass('stackElement');
			$('#stack9').text('');
			
		}

		if(stacks[7] !== '' && stacks[8] == null) {
			//$('#stack3').addClass('addedelement');
			//$('#stack3').removeClass('stackElement');
			$('#stack8').text('');
		}

		if(stacks[6] !== '' && stacks[7] == null) {
			//$('#stack4').addClass('addedelement');
			//$('#stack4').removeClass('stackElement');
			$('#stack7').text('');
		}

		if(stacks[5] !== '' && stacks[6] == null) {
			//$('#stack5').addClass('addedelement');
			//$('#stack5').removeClass('stackElement');
			$('#stack6').text('');
		}

		if(stacks[4] !== '' && stacks[5] == null) {
			//$('#stack6').addClass('addedelement');
			//$('#stack6').removeClass('stackElement');
			$('#stack5').text('');
		}

		if(stacks[3] !== '' && stacks[4] == null) {
			//$('#stack7').addClass('addedelement');
			//$('#stack7').removeClass('stackElement');
			$('#stack4').text('');
		}

		if(stacks[2] !== '' && stacks[3] == null) {
			//$('#stack8').addClass('addedelement');
			//$('#stack8').removeClass('stackElement');
			$('#stack3').text('');
		}

		if(stacks[1] !== '' && stacks[2] == null) {
			//$('#stack9').addClass('addedelement');
			//$('#stack9').removeClass('stackElement');
			$('#stack2').text('');
		}

		if(stacks[0] !== '' && stacks[1] == null) {
			// $('#stack10').addClass('addedelement');
			// $('#stack10').removeClass('stackElement');
			$('#stack1').text('');
		}

		if(stacks.length === 0) {
			$('.error-stack:last()').css('display','flex');
			stacks.pop();
		} else {
			$('.error-stack:last()').css('display','none');
		}

		



	});


	addStack.click(function() {

		stacks.push(element.val());


		// for(var i = 0; i < 10; i++) {

		// 	if(stacks.length < 10) {
		// 		console.log(stacks);
		// 	}	

		// 	//console.log(stackElement[0]);
		// }



		
		if($('#stack1').hasClass('stack-element')) {
			// $('#stack1').addClass('addedelement');
			// $('#stack1').removeClass('stackElement');
			$('#stack1').text(stacks[0]);
			console.log(stacks);
		}

		if($('#stack2').hasClass('stack-element')) {
			// $('#stack2').addClass('addedelement');
			// $('#stack2').removeClass('stackElement');
			$('#stack2').text(stacks[1]);
			console.log(stacks);
		}

		if($('#stack3').hasClass('stack-element')) {
			//$('#stack3').addClass('addedelement');
			//$('#stack3').removeClass('stackElement');
			$('#stack3').text(stacks[2]);
			console.log(stacks);
		}

		if($('#stack4').hasClass('stack-element')) {
			//$('#stack4').addClass('addedelement');
			//$('#stack4').removeClass('stackElement');
			$('#stack4').text(stacks[3]);
			console.log(stacks);
		}

		if($('#stack5').hasClass('stack-element')) {
			//$('#stack5').addClass('addedelement');
			//$('#stack5').removeClass('stackElement');
			$('#stack5').text(stacks[4]);
			console.log(stacks);
		}

		if($('#stack6').hasClass('stack-element')) {
			//$('#stack6').addClass('addedelement');
			//$('#stack6').removeClass('stackElement');
			$('#stack6').text(stacks[5]);
			console.log(stacks);
		}

		if($('#stack7').hasClass('stack-element')) {
			//$('#stack7').addClass('addedelement');
			//$('#stack7').removeClass('stackElement');
			$('#stack7').text(stacks[6]);
			console.log(stacks);
		}

		if($('#stack8').hasClass('stack-element')) {
			//$('#stack8').addClass('addedelement');
			//$('#stack8').removeClass('stackElement');
			$('#stack8').text(stacks[7]);
			console.log(stacks);
		}

		if($('#stack9').hasClass('stack-element')) {
			//$('#stack9').addClass('addedelement');
			//$('#stack9').removeClass('stackElement');
			$('#stack9').text(stacks[8]);
			console.log(stacks);
		}

		if($('#stack10').hasClass('stack-element')) {
			// $('#stack10').addClass('addedelement');
			// $('#stack10').removeClass('stackElement');
			$('#stack10').text(stacks[9]);
			console.log(stacks);
		}

		if(stacks.length == 11) {
			$('.error-stack:first()').css('display','flex');
			stacks.pop();
		}


	});







});