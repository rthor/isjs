
	// Return boolean based on expression type
 	return check.fn.regexp(expression) ?
				check.fn.ok(value, expression) :
			check.hasOwnProperty(expression) ?
				check.fn.ok(value, deep ? check[expression][deep] : check[expression]) :
			check.fn.hasOwnProperty( expression ) ?
				( check.fn[ expression ]( value ) ? true : false ) :
			check.fn.function( expression ) ?
				( expression( value ) ? true : false ) :
			false;
