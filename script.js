$('document').ready(function() {
	
	$('.none').on('click', function() {
		alert('У этой кнопки нет назначения')
	});
	
	$('#a1').on('click', function() {
		var val1, val2, res;
		val1 = $('#val1').val();
		val2 = $('#val2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		
		res = val1 + val2;
		$('#result').val(res);
	});
	
	$('#a2').on('click', function() {
		var val1, val2, res;
		val1 = $('#val1').val();
		val2 = $('#val2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		
		res = val1 - val2;
		$('#result').val(res);
	});
	
	$('#a3').on('click', function() {
		var val1, val2, res;
		val1 = $('#val1').val();
		val2 = $('#val2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		
		res = val1 / val2;
		$('#result').val(res);
	});
	
	$('#a4').on('click', function() {
		var val1, val2, res;
		val1 = $('#val1').val();
		val2 = $('#val2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		
		res = val1 * val2;
		$('#result').val(res);
	});
	
	$('#a5').on('click', function() {
		var val1, val2, res;
		val1 = $('#val1').val();
		val2 = $('#val2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		
		res = Math.pow(val1, val2);
		$('#result').val(res);
	});
	
	$('#clr').on('click', function() {
		var clr
		$('.val').val(clr);
	});

	$('#round').on('click', function() {
		var res = $('#result').val();
		res = Math.round(res);
		$('#result').val(res);
	});
});