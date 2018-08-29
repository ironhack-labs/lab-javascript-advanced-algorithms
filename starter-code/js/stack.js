$(document).ready(function () {

	var stack = new StackDataStructure();

	// var html = '';
	var input = $('#stack-input');
	var btnAdd = $('#btn-add');
	var btnTake = $('#btn-take');
	var btnReset = $('#btn-take');
	var inputVal = '';

	
	var inputValue = function () {
		return input.prop('value');
	}

	var buildList = function () {
		var list = [];

		if (stack.isEmpty()) {
			var i = 0;
			while(i < stack.MAX_SIZE){
				list.push('<li class="stack-li"></li>');
				i++
			}
			return list;
		} else {
			for (var i = 0; i < stack.MAX_SIZE; i++) {
				if (stack.stackControl[i]) {
					list.push('<li class="stack-li active">'+ stack.stackControl[i] +'</li>');
				}else{
					list.push('<li class="stack-li"></li>');
				}
			}
			return list;
		}
	}

	displayList(buildList);

	function displayList(buildList) {
		var list = buildList();
		var listReversed = list.reverse();
		listReversed.join('');
		$('#stack-ul').html(list);
	}

	$(btnAdd).on('click', function(e) {
		e.preventDefault();
		inputVal = inputValue();
		stack.push(inputVal);
		buildList();
		displayList(buildList);
	});

	$(btnReset).on('click', function(e) {
		e.preventDefault();
		stack.reset();
		buildList();
		displayList(buildList);
	});

});