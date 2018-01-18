$(document).ready(function () {
	var stack = new StackDataStructure();
	clearErrors();

	$('#btn-push').on('click', function () {
		clearErrors();
		$('#stack h2:last-of-type').text('');
		var value = $('#stack input').val();
		if (stack.canPush()) {
			stack.push(value);
			var lastClearBox = $('#stack li:not(.list-group-item-info)').last();
			lastClearBox.text(value);
			lastClearBox.addClass('list-group-item-info');
		} else {
			$("#stack li").first().before($('<li class="list-group-item-danger"></li>'));
			$('#stack li').first().text(stack.push(value));
		} 
		$('#stack input').val('');
		$('#stack input').trigger("change");
	});

	$('#btn-pop').on('click', function () {
		clearErrors();
		if (!stack.isEmpty()) {
			var value = stack.pop();
			var firstFillBox = $('#stack li.list-group-item-info').first();
			firstFillBox.text('');
			firstFillBox.removeClass('list-group-item-info');
			$('#stack h2:last-of-type').text(value);
		} else {
			$('#stack h2:last-of-type').text('');
			$("#stack li").last().after($('<li class="list-group-item-danger"></li>'));
			$('#stack li').last().text(stack.pop());
		}
	});

	$('#stack input').on('keyup change', function () {
		if (!$(this).val()) {
			$('#btn-push').addClass('disabled');
			$('#btn-push').prop("disabled", true);
		} else {
			$('#btn-push').removeClass('disabled');
			$('#btn-push').prop("disabled", false);
		}
	});

	function clearErrors() {
		$('#stack .list-group-item-danger').remove();
	}
});