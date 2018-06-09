const stack = new StackDataStructure();

$(document).ready(() => {
	$('#addStack').click(() => {
		let data = $('#stackInput').val();
		$('#stackInput')
			.val('')
			.focus();

		let result = stack.push(data);

		if (result === 'Stack Overflow') $('.stackOverflow').removeClass('hide');
		else {
			$('.stackUnderflow').addClass('hide');
			for (let i = 0; i < stack.stackControl.length; i++) {
				let nChild = 8 - i;
				$('.stack')
					.children()
					.eq(nChild)
					.text(stack.stackControl[i]);
			}
		}
	});

	$('#takeStack').click(() => {
		let result = stack.pop();

		if (result === 'Stack Underflow') $('.stackUnderflow').removeClass('hide');
		else {
			$('.stackOverflow').addClass('hide');
			for (let i = 0; i < stack.MAX_SIZE; i++) {
				let nChild = 8 - i;
				$('.stack')
					.children()
					.eq(nChild)
					.text('');
			}
			for (let i = 0; i < stack.stackControl.length; i++) {
				let nChild = 8 - i;
				$('.stack')
					.children()
					.eq(nChild)
					.text(stack.stackControl[i]);
			}
		}
	});
});
