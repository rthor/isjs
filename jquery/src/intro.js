(function($) {
// What does the is plugin do?
$.is = $.fn.is = function() {
	// If nothing is there - then return that.
	if ( this.length === 0 ) return this;

	// Declare variables
	var deep = false,
		expression,
		check,
		value;

	// If plugin is run on the root jQuery object
	// Set up appropriate variables
	if (arguments.length === 2) {
		value = arguments[0];
		expression = arguments[1];
