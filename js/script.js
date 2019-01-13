
function getAPIKey(){
	return config.apiKey;
}
	
	


function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
	
    // YOUR CODE GOES HERE!
	console.log("test post");
	var street = "pre";
	var city = "also pre";
	console.log(street + ' ' +  city);
	var street = $('#street').val();
	var city = $('#city').val();
	console.log(street + ' ' +  city);
	key = getAPIKey();
	var locString = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+ street + ',' + city + '&key=' + key;
	console.log(locString);

	$body.append('<img class="bgimg" src="'+locString+'">');
    return false;
};

$('#form-container').submit(loadData);
