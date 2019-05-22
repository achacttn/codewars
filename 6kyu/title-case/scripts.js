// First argument(required): the original string to be converted.
// Second argument(optional): space - delimited list of minor words that must always be lowercase except for the first word in the string.The JavaScript / CoffeeScript tests will pass undefined when this argument is unused.

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
    let titleArr = title.split(" ").map( w => w.toLowerCase() );
    let minorArr = ( minorWords ? minorWords.split(" ").map( w => w.toLowerCase()) : [] );
    let outputArr = [];

    let test = titleArr[0].split("").map( (e,i) => {
        if( i === 0 ){
            return e.toUpperCase();
        } else {
            return e;
        }
    }).join("");
    outputArr.push(test);
    for( var i=1; i<titleArr.length; i++ ){
        let current = titleArr[i];
        if( !minorArr.includes(current) ){
            let tmp = current.split("").map( (e,i) => {
                if( i===0 ){
                    return e.toUpperCase();
                } else {
                    return e;
                }
            }).join("");
            outputArr.push(tmp);
        } else {
            outputArr.push(current);
        }
    }
    return outputArr.join(" ");
};
