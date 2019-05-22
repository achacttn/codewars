// "1 2 3 4" ==>  return 0, because the sequence is complete

// "1 2 4 3" ==>  return 0, because the sequence is complete(order doesn't matter)

// "2 1 3 a" ==>  return 1, because it contains a non numerical character

// "1 3 2 5" ==>  return 4, because 4 is missing from the sequence

// "1 5" ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest


function findMissingNumber(sequence) {
    if(sequence===""){
        return 0;
    }
    let arrOfStr = sequence.split(" ");
    let arrOfNum = arrOfStr.map( el => Number(el) );
    console.log('arrOfNum: ', arrOfNum);
    if( arrOfNum.includes(NaN)){
        return 1;
    }
    // console.log( arrOfNum.indexOf(NaN) );
    for( var i=1; i<=arrOfNum.length; i++ ){
        if( arrOfNum.indexOf(i) === -1 ){
            return i;
        }
    }
    return 0;
}


console.log(findMissingNumber("2 1 4 3 a"));