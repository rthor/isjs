
	// Return boolean based on expression type
 	return regex.fn.regexp(expression) ?
				regex.fn.ok(value, expression) :
			regex.hasOwnProperty(expression) ?
				regex.fn.ok(value, deep ? regex[expression][deep] : regex[expression]) :
			regex.fn.hasOwnProperty( expression ) ?
				( regex.fn[ expression ]( value ) ? true : false ) :
			regex.fn.function( expression ) ?
				( expression( value ) ? true : false ) :
			false;
