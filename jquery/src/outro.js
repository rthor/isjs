
		/**
		* Tests a regular expression against a string
		* @param  {string} value
		* @param  {regexp} expression
		* @return {boolean}
		*/
		function test( value, expression ) {
			return expression.test( value.trim() );
		}

		// If the expression is in the regex object
		if (regex.hasOwnProperty(expression)) {
			return test(value, regex[expression]);
		}

		// If the expression is a true regular expression
		if (typeof expression === 'object') {
			return test(value, expression);
		}

		// Return false if everything fails.
		return false;
	};

})(jQuery);