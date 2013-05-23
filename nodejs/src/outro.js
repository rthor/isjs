
    if (typeof expression === undefined) return false;

    if (regex.hasOwnProperty(expression)) {
        return test(elem, deep ? regex[expression][deep] : regex[expression]);
    }

    if (typeof expression === 'object') {
        return test(elem, expression);
    }

    return false;
};