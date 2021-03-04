module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(item => item.join(''));
    let i = 0;
    while (i < brackets.length) {
        if (str.includes(brackets[i])) {
            str = str.replace(brackets[i], '');
            i = 0;
        } else {
            i++;
        }
    }
    let result = str ? false : true;
    return result;
}
