const { removeNullAndUndefinedInArray, removeNullAndUndefinedInObject } = require('./utils/remover');
const cleanse = o => {
    if (Array.isArray(o)) {
        return removeNullAndUndefinedInArray(o, cleanse);
    } else {
        return removeNullAndUndefinedInObject(o, cleanse);
    }
};

module.exports.cleanse = cleanse;