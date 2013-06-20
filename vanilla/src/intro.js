window.is = function ( value, expression ) {
	if (typeof expression === undefined) return false;

	// Declare and initiate variables
	var deep = false,
		regex,
		type;
