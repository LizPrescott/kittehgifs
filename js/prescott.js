$(document).ready(function(){

	$('.js-searchgo').click(event =>{
		var queery = $('.js-input').val();
		//$('.js-input').val('');
		var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cat+"+queery+"&api_key=ouohfHvym3ZSNGp87q3Ox7ew11ZJUIgu&limit5");
		xhr.done(function(data) {
			var arr = data.data;
			$('.js-results').html('');
			//the below function should show every cat gif in the results
			arr.forEach(function(data){
				
				var gifUrl = data.images.fixed_height.url;
				$('.js-results').append(`<img src = "${gifUrl}" />`);
			});
		});
	});
});

//write a function that allows the user to further narrow the results using the input field




