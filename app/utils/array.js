export const arrayToMap = (
    array,
    keySelector,
    valueSelector = x => x
) => {
    return array.reduce((map, x) => {
        const key = keySelector(x);
        if (!map[key]) {
            map[key] = [];
        }

        map[key] = valueSelector(x);

        return map;
    }, {});
};

export const arrayToLookup = (
    array,
    keySelector,
    valueSelector = x => x
) => {
    return array.reduce((map, x) => {
        const key = keySelector(x);
        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(valueSelector(x));

        return map;
    }, {});
};
