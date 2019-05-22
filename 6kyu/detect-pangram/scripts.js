console.log('DETECT PANGRAM');

// A pangram is a sentence that contains every single letter of the alphabet at least once.For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A - Z at least once(case is irrelevant).

// Given a string, detect whether or not it is a pangram.Return True if it is, False if not.Ignore numbers and punctuation.

function isPangram(string){
    const arrToCheck = string.toLowerCase().split("");
    const alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
    let count = 0;

    for( var i=0; i<alphabet.length; i++ ){
        if( arrToCheck.includes(alphabet[i] )){
            count++;
        }
    }

    if( count===26 ){
        return true;
    } else {
        return false;
    }
    // alphabet.map( letter => {
    //     if( !arrToCheck.includes( letter )){
    //         return false;
    //     }
    // });
    // return true;
};
