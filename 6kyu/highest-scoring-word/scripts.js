console.log('Highest scoring word');

// Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
// Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
// Test.assertEquals(high('take me to semynak'), 'semynak');

function high(x) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const words = x.split(" ");
    let highWord = "";
    let highScore = 0;

    for( var i=0; i<words.length; i++ ){
        const letters = words[i].split("");
        let score = 0;
        for( var j=0; j<letters.length; j++ ){
            score += ( 1 + alphabet.indexOf(letters[j]) );
        }
        // console.log(`Value of ${words[i]} is ${score}`);
        // console.log(`Highest word: ${highWord}`);
        // console.log(`Highest score: ${highScore}`);
        if( score > highScore ){
            highWord = words[i];
            highScore = score;
        }
    }

    return highWord;
};
