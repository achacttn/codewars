// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)

// For both methods:
// If the input - string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

function encrypt(text, n) {
    if( Object.prototype.toString.call(text) === '[object Null]' || text.length===0 || n <= 0 ){
        return text;
    }
    let letters = text.split(""), counter = 0;
    while( counter < n ){
        let left = [], right = [];
        for( var i=0; i<letters.length; i++ ){
            if( i%2===0 ){
                right.push(letters[i]);
            } else {
                left.push(letters[i]);
            }
        }
        letters = left.join('').concat(right.join(''));
        counter++;
    }
    return letters;
}
// console.log(encrypt("This is a test!", 2));


function decrypt(encryptedText, n) {
    if( Object.prototype.toString.call(encryptedText) === '[object Null]' ){
        return encryptedText;
    }
    let letters = encryptedText.split("").slice();
    let counter = 0;
    // console.log(letters);
    while( counter < n ){
        let left = letters.slice(0, letters.length/2), right = letters.slice(letters.length/2);
        letters = [].slice();
        // console.log(right, left);
        for( var i=0; i < right.length; i++ ){
            if( right[i] !== undefined ){
                letters.push(right[i]);
            }
            if( left[i] !== undefined ){
                letters.push(left[i]);
            }
        }        
        // console.log(letters.join(""));
        counter++;
    }
    return letters.join("");
};
// console.log(decrypt("s eT ashi tist!", 2));


// // Best practice (using for loop incrementing 2)
// function encrypt(text, n) {
//     console.log(text, n);
//     if (!text || n <= 0) return text;
//     while (n--) {
//         let ans = '';
//         for (let i = 1; i < text.length; i += 2) {
//             ans += text[i];
//         }
//         for (let i = 0; i < text.length; i += 2) {
//             ans += text[i];
//         }
//         text = ans;
//     }
//     return text;
// }

// function decrypt(encryptedText, n) {
//     if (!encryptedText || n <= 0) return encryptedText;
//     const ans = new Array(encryptedText.length);
//     while (n--) {
//         let j = 0;
//         for (let i = 1; i < ans.length; i += 2) {
//             ans[i] = encryptedText[j++];
//         }
//         for (let i = 0; i < ans.length; i += 2) {
//             ans[i] = encryptedText[j++];
//         }
//         encryptedText = ans.join('');
//     }
//     return encryptedText;
// }


// // Clever
// function encrypt(text, n) {
//     for (let i = 0; i < n; i++) {
//         text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
//     }
//     return text
// }

// function decrypt(text, n) {
//     let l = text && text.length / 2 | 0
//     for (let i = 0; i < n; i++) {
//         text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
//     }
//     return text
// }