console.log('Categorize new member');

function openOrSenior(data) {
    const op = "Open", sn = "Senior", category = [];
    const newMems = Array.prototype.slice.call(data);
    for( var i=0; i<newMems.length; i++ ){
        const newMem = newMems[i];
        if( (newMem[0] >= 55) && (newMem[1]) > 7 ){
            category.push(sn);
        } else {
            category.push(op);
        }
    }
    return category;
}

// Best practice
// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }