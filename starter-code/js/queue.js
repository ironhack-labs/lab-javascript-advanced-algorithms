$(document).ready(function () {
	var queue = new QueueDataStructure();
	clearErrors();

	$('#btn-enqueue').on('click', function () {
		clearErrors();
		$('#queue h2:last-of-type').text('');
		var value = $('#queue input').val();
		if (queue.canEnqueue()) {
			queue.enqueue(value);
			var elements = $("#queue li");
			$.each(elements, function (i, element) {
				if (i > 0) {
					$(element).replaceWith(elements[i - 1]);
				} else {
					var newElement = $('<li class="list-group-item list-group-item-info"></li>');
					newElement.text(value);
					$(element).replaceWith(newElement);
				}
			});
		} else {
			$("#queue li").last().after($('<li class="list-group-item-danger"></li>'));
			$('#queue li').last().text(queue.enqueue(value));
		} 
		$('#queue input').val('');
		$('#queue input').trigger("change");
	});

	$('#btn-dequeue').on('click', function () {
		clearErrors();
		if (!queue.isEmpty()) {
			var value = queue.dequeue();
			var lasttFillBox = $('#queue li.list-group-item-info').last();
			lasttFillBox.text('');
			lasttFillBox.removeClass('list-group-item-info');
			$('#queue h2:last-of-type').text(value);
		} else {
			$('#queue h2:last-of-type').text('');
			$("#queue li").first().before($('<li class="list-group-item-danger"></li>'));
			$('#queue li').first().text(queue.dequeue());
		}
	});

	$('#queue input').on('keyup change', function () {
		if (!$(this).val()) {
			$('#btn-enqueue').addClass('disabled');
			$('#btn-enqueue').prop("disabled", true);
		} else {
			$('#btn-enqueue').removeClass('disabled');
			$('#btn-enqueue').prop("disabled", false);
		}
	});

	function clearErrors() {
		$('#queue .list-group-item-danger').remove();
	}
});