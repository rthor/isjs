
    if (regex.hasOwnProperty(expression)) {
        return test(value, deep ? regex[expression][deep] : regex[expression]);
    }

    if ( isRegExp(expression) ) {
        return test(value, expression);
    }

    return false;
};