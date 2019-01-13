
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
	

    return false;
};

$('#form-container').submit(loadData);
