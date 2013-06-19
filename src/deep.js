
	// If expression is deep
	if (
		typeof expression === 'string' &&
		expression.indexOf(':') !== -1
	) {
		// Set approriate variables
		expression = expression.match( /(\w+)(?:\:)(\w+)/ );
		deep = expression[2];
		expression = expression[1];
	}
