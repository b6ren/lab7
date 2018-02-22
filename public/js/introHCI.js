'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.btn btn-default likeBtn').click(recordEvent);// your code here
}

function recordEvent(event) {
	ga('create','UA-114588990-1','auto');
	ga("send", "event", "like", "click");
}