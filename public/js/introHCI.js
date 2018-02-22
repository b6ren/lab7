'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(recordEvent);// your code here
}

function recordEvent(event) {
	event.preventDefault();
	console.log("calling ga....")
	ga('create','UA-114588990-1','auto');
	ga("send", "event", "like", "click");
}