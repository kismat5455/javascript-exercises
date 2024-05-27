const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let str1 = str.split("").reverse().join("");
    console.log(str1);
    return str1 === str;

};

// Do not edit below this line
module.exports = palindromes;



