
	// If the expression is in the regex object
	if (regex.hasOwnProperty(expression)) {
		console.log( deep ? regex[expression][deep] : regex[expression] );
		return test(value, deep ? regex[expression][deep] : regex[expression]);
	}

	// If the expression is a true regular expression
	if (typeof expression === 'object') {
		return test(value, expression);
	}

	// Return false if everything fails.
	return false;
};

})(jQuery);