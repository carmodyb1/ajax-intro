$(function(){

	$('#random').on("click", function(e) {
		e.preventDefault();
	
		// make an HTTP request to HTTP://localhost:port/numbers
		$.get('/numbers', function(numbers) {
			
			$('#numbers').append(numbers.map(function(n) {
				return $('<li>').text(n);	
			}));

		})

	})

})