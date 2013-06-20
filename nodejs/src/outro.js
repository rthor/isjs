
    if (typeof expression === undefined) return false;

    if (regex.hasOwnProperty(expression)) {
        return test(elem, deep ? regex[expression][deep] : regex[expression]);
    }

    if ( isRegExp(expression) ) {
        return test(elem, expression);
    }

    return false;
};