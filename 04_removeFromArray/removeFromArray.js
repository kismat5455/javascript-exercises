const removeFromArray = function (array) {

    const args = Array.from(arguments).slice(1);
    for (let i = 0; i < array.length; i++) {
        if (args.includes(array[i])) {
            array.splice(i,1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


console.log(removeFromArray([1, 2, 2, 4], 2));