module.exports = function ( elem, expression ) {
	var deep = false;

	// If expression is deep
	if (
		typeof expression === 'string' &&
		expression.indexOf(':') !== -1
	) {
		expression = expression.match( /(\w+)(?:\:)(\w+)/ );
		deep = expression[2];
		expression = expression[1];
	}
