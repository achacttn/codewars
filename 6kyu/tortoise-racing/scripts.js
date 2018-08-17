function race(v1, v2, g) {
    if( v1 >= v2 ){
        return null;
    }
    let totalSeconds = 3600 * g/( v2-v1 );
    let hours = Math.floor(totalSeconds/3600);
    let minutes = Math.floor((totalSeconds - hours*3600)/60);
    let seconds = Math.floor((totalSeconds - hours*3600 - minutes*60));
    return [hours, minutes, seconds];
}