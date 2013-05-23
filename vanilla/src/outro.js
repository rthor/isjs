
    /**
     * Make the is function globally avalible.
     */
    window.is = function( elem, expression ) {
        if (typeof expression === undefined) return false;

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

        if (regex.hasOwnProperty(expression)) {
            return test(elem, deep ? regex[expression][deep] : regex[expression]);
        }

        if (typeof expression === 'object') {
            return test(elem, expression);
        }

        return false;
    };
})();