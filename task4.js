function anagramFunc(a, b) {

    if (a.length !== b.length) {
        return false;
    }
    
    var str1 = a.split('').sort().join('');
    var str2 = b.split('').sort().join('');
   

    var result = (str1 === str2);
    // var result = (str1.toLowerCase() === str2.toLowerCase());
    return result;
}

console.log(anagramFunc('finder', 'friend'));
console.log(anagramFunc('hello', 'bye'));

