
	// Return boolean based on expression type
 	return isRegExp(expression) ?
				test(value, expression) :
			regex.hasOwnProperty(expression) ?
				test(value, deep ? regex[expression][deep] : regex[expression]) :
			false;
