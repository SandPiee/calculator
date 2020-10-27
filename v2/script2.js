$('document').ready(function() {

	var char
	
	$('#a1').on('click', function() {
		$(".current").append(document.createTextNode("1"));
	});

	$('#a2').on('click', function() {
		$(".current").append(document.createTextNode("2"));
	});

	$('#a3').on('click', function() {
		$(".current").append(document.createTextNode("3"));
	});

	$('#a4').on('click', function() {
		$(".current").append(document.createTextNode("4"));
	});

	$('#a5').on('click', function() {
		$(".current").append(document.createTextNode("5"));
	});

	$('#a6').on('click', function() {
		$(".current").append(document.createTextNode("6"));
	});

	$('#a7').on('click', function() {
		$(".current").append(document.createTextNode("7"));
	});

	$('#a8').on('click', function() {
		$(".current").append(document.createTextNode("8"));
	});

	$('#a9').on('click', function() {
		$(".current").append(document.createTextNode("9"));
	});

	$('#a0').on('click', function() {
		$(".current").append(document.createTextNode("0"));
	});

	$('#at').on('click', function() {
		$(".current").append(document.createTextNode("."));
	});

	$('#bp').on('click', function() {
		char = "+"
		$('#val1').toggleClass("current")
		$('#val2').toggleClass("current")
		$('#char').toggleClass("ap")
		$("#char").append(document.createTextNode("+"));
	});

	$('#bm').on('click', function() {
		char = "-"
		$('#val1').toggleClass("current")
		$('#val2').toggleClass("current")
		$('#char').toggleClass("am")
		$("#char").append(document.createTextNode("-"));
	});

	$('#bu').on('click', function() {
		char = "*"
		$('#val1').toggleClass("current")
		$('#val2').toggleClass("current")
		$('#char').toggleClass("au")
		$("#char").append(document.createTextNode("*"));
	});

	$('#bd').on('click', function() {
		char = "/"
		$('#val1').toggleClass("current")
		$('#val2').toggleClass("current")
		$('#char').toggleClass("ad")
		$("#char").append(document.createTextNode("/"));
	});

	$('.clr').on('click', function() {
		$(".nw").text("");
		if ($("#val2").hasClass("current")) {
			$('#val1').toggleClass("current")
			$('#val2').toggleClass("current")
		}
	});

	$('#ar').on('click', function() {
		if ($("#val2").hasClass("current")) {
			$('#val1').toggleClass("current")
			$('#val2').toggleClass("current")
		}
		if ($("#char").hasClass("ap")) {
			var val1, val2, res;
			val1 = $('#val1').text();
			val2 = $('#val2').text();
		
			val1 = parseInt(val1);
			val2 = parseInt(val2);

			res = val1 + val2
			$(".nw").text("");
			$('#char').toggleClass("ap");
			$(".res").text(res);
		}
		if ($("#char").hasClass("ad")) {
			var val1, val2, res;
			val1 = $('#val1').text();
			val2 = $('#val2').text();
		
			val1 = parseInt(val1);
			val2 = parseInt(val2);

			res = val1 / val2
			$(".nw").text("");
			$('#char').toggleClass("ad");
			$(".res").text(res);
		}
		if ($("#char").hasClass("am")) {
			var val1, val2, res;
			val1 = $('#val1').text();
			val2 = $('#val2').text();
		
			val1 = parseInt(val1);
			val2 = parseInt(val2);

			res = val1 - val2
			$(".nw").text("");
			$('#char').toggleClass("am");
			$(".res").text(res);
		}
		if ($("#char").hasClass("au")) {
			var val1, val2, res;
			val1 = $('#val1').text();
			val2 = $('#val2').text();
		
			val1 = parseInt(val1);
			val2 = parseInt(val2);

			res = val1 * val2
			$(".nw").text("");
			$('#char').toggleClass("au");
			$(".res").text(res);
		}
	});
});