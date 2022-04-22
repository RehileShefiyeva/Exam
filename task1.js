 function longString(arr) {
   
    let newString = [];
    let stringLength = 0;

   
    for (let i = 0; i < arr.length; i++) {
        
        const a = newString.indexOf(arr[i]);

       
        if (a !== -1) {
            
            newString.splice(0, a + 1);
        }

        
        newString.push(arr[i]);

       
        stringLength = Math.max(
            stringLength,
            newString.length
        );
    }

    return stringLength;
};
console.log(longString("abbbcabcdefef"));