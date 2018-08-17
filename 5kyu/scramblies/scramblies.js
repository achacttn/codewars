// function scramble(str1, str2) {
//     var letterCount = {}, count = 0;
//     for (var i = 0; i < str2.length; i++) {
//         if (letterCount[str2[i]] === undefined) {
//             letterCount[str2[i]] = 0;
//         }
//         letterCount[str2[i]]++;
//     }
//     console.log(letterCount);
//     for (eachLetter in letterCount) {
//         var tmp = 0;
//         for (var j = 0; j < str1.length; j++) {
//             if (str1[j] === eachLetter) {
//                 tmp++;
//             }
//         }
//         // console.log(tmp, letterCount, letterCount[eachLetter]);
//         if (tmp >= letterCount[eachLetter]) {
//             count++;
//         }
//     }
//     if (count === Object.keys(letterCount).length) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // optimize this further

// function scramble(str1, str2) {
//     var array1 = str1.split("").sort(); // a, a, b, b, c
//     var array2 = str2.split("").sort(); // a, b, b, c

//     var x=0;
//     for( var i=0; i<array1.length && x<array2.length; i++ ){
//         if( array1[i]===array2[x] ){
//             x++;
//         }
//     }
//     return ( x===array2.length);
// }


function scramble(str1, str2) {
    // creating hash table of letter occurences in word
    let occurences = str1.split("").reduce((arr, cur) => {
        arr[cur] ? arr[cur]++ : arr[cur] = 1;
        return arr;
    }, {});

    // --occurences[character] subtracts every character in str2
    // from str1, and returns whether str1 has enough of that character
    return str2.split("").every((character) => {
        return --occurences[character] >= 0
    });
}
scramble('cedewaraaossoqqyt', 'codewars')