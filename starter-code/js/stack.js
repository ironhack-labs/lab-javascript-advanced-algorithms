$(document).ready(function () {

	var stack = new StackDataStructure();

	// var html = '';
	var input = $('#stack-input');
	var btnAdd = $('#btn-add');
	var btnTake = $('#btn-take');
	var btnReset = $('#btn-take');
	var inputVal = '';
	var totalList = $('.stack-li');

	console.log('totalList', totalList);
	
	var inputValue = function () {
		return input.prop('value');
	}

	var buildList = function () {
		var list = "";

		if (stack.isEmpty()) {
			var i = 0;
			while(i < stack.MAX_SIZE){
				list += '<li class="stack-li"></li>';
				i++
			}
			return list;
		} else {
			for (var i = 0; i < stack.MAX_SIZE; i++) {
				if (stack.stackControl[i]) {
					list += '<li class="stack-li">hola</li>';
					console.log(list);
				}else{
					list += '<li class="stack-li"></li>';
					console.log(list);
				}
			}
			return list;
		}
	}

	displayList(buildList);

	function displayList(buildList) {
		var list = buildList();
		$('#stack-ul').appendChild(list);
	}

	$(btnAdd).on('click', function(e) {
		e.preventDefault();
		inputVal = inputValue();
		stack.push(inputVal);
		totalList.push();
		buildList();
		displayList(buildList);

		console.log('stackControl', stack.stackControl);
	});

	$(btnReset).on('click', function(e) {
		e.preventDefault();
		stack.reset();
		buildList();
		displayList(buildList);
		console.log('stackControl', stack.stackControl);
	});

});