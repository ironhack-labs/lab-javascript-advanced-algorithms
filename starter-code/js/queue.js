const queue = new QueueDataStructure();

$(document).ready(() => {
	$('#addQueue').click(() => {
		let data = $('#queueInput').val();
		$('#queueInput')
			.val('')
			.focus();

		let result = queue.enqueue(data);

		if (result === 'Queue Overflow') $('.queueOverflow').removeClass('hide');
		else {
			$('.queueUnderflow').addClass('hide');
			for (let i = 0; i < queue.queueControl.length; i++) {
				let nChild = 8 - i;
				$('.queue')
					.children()
					.eq(nChild)
					.text(queue.queueControl[i]);
			}
		}
	});

	$('#takeQueue').click(() => {
		let result = queue.dequeue();

		if (result === 'Queue Underflow') $('.queueUnderflow').removeClass('hide');
		else {
			$('.queueOverflow').addClass('hide');
			for (let i = 0; i < queue.MAX_SIZE; i++) {
				let nChild = 8 - i;
				$('.queue')
					.children()
					.eq(nChild)
					.text('');
			}
			for (let i = 0; i < queue.queueControl.length; i++) {
				let nChild = 8 - i;
				$('.queue')
					.children()
					.eq(nChild)
					.text(queue.queueControl[i]);
			}
		}
	});
});
