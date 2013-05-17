
        /**
         * Make the is function globally avalible.
         */
        window.is = function( elem, expression ) {
            if (typeof expression === undefined) return false;

            if (regex.hasOwnProperty(expression)) {
                return test(elem, regex[expression]);
            }

            if (typeof expression === 'object') {
                return test(elem, expression);
            }

            return false;
        };
})();