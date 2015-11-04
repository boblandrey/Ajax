
$(document).ready(function(){
	
	
	$('input').on('keyup', function (evt) {
		getResults($(this).val());
	
	});



	function getResults(query) {

      $.ajax({
            url: "http://api.bing.net/qson.aspx?Query=" + encodeURIComponent(query) + "&JsonType=callback&JsonCallback=?",
            type: 'GET',
            dataType: 'jsonp',

		}).done(function(response){



            var suggestion = response.SearchSuggestion.Section;
			var html = $('<div><h2>Search suggestions for <em>' + query + '</em> :</h2></div>')


		

			$('#results').empty().append(html);







			$.each(response.SearchSuggestion.Section, function (i, val) {

                    //console.log("suggestion: " + val.Text);
                    
                    suggestion.push(val.Text);

                //    $('#results').append('<div>' + val.Text + '</div>');   
                //orig before making it do href

                //	$('#results').append('<div>' + "<a href='http://www.bing.com/search?q=" + encodeURIComponent(val.Text) + "'>" + val.Text + '</div>');
                //the above opens bing in same window

                	$('#results').append('<div>' + "<a href='http://www.bing.com/search?q=" + encodeURIComponent(val.Text) + "'" + " onClick='window.open(this.href);return false'" + ">" + val.Text + '</a></div>');
                	//the above opens bing in new window and keeps orig page

                	
                });

			
		});





	}

	
	
});



