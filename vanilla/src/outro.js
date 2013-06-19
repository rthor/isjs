
    if (regex.hasOwnProperty(expression)) {
        return test(value, deep ? regex[expression][deep] : regex[expression]);
    }

    if (typeof expression === 'object') {
        return test(value, expression);
    }

    return false;
};