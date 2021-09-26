const removeNullAndUndefinedInArray = (o, clean) => {
    return o.map(value => (value && typeof value === 'object') ? clean(value) : value)
        .filter(value => !(value == null) && !(value == undefined) && !(value == ''));
}


const removeNullAndUndefinedInObject = (o, clean) => {
    return Object.entries(o).map(([key, value]) => [key, value && typeof value === 'object' ? clean(value) : value])
        .reduce((x, [key, value]) => (value == null ? x : (x[key] = value, x)), {});
}

module.exports.removeNullAndUndefinedInArray = removeNullAndUndefinedInArray;
module.exports.removeNullAndUndefinedInObject = removeNullAndUndefinedInObject;