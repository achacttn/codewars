function scramble(str1, str2) {
    var letterCount = {}, count = 0;
    for (var i = 0; i < str2.length; i++) {
        if (letterCount[str2[i]] === undefined) {
            letterCount[str2[i]] = 0;
        }
        letterCount[str2[i]]++;
    }
    console.log(letterCount);
    for (eachLetter in letterCount) {
        var tmp = 0;
        for (var j = 0; j < str1.length; j++) {
            if (str1[j] === eachLetter) {
                tmp++;
            }
        }
        // console.log(tmp, letterCount, letterCount[eachLetter]);
        if (tmp >= letterCount[eachLetter]) {
            count++;
        }
    }
    if (count === Object.keys(letterCount).length) {
        console.log('true')
        return true;
    } else {
        console.log('false')
        return false;
    }
}

scramble( 'katas', 'steak' )
// optimize this further