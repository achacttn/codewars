function decodeResistorColors(bands) {
    var ohmValue, formattedOhm, tolerance, fmt;
    fmt = bands.split(" ");
    ohmValue=Number( String(colorCodes[fmt[0]])+String(colorCodes[fmt[1]]) ) ** colorCodes[fmt[2]];
    if( ohmValue>999999 ){
        formattedOhm=`${ohmValue/1000000}M`;
    } else if( ohmValue>999 ){
        formattedOhm=`${ohmValue/1000}k`;
    } else {
        formattedOhm=ohmValue;
    }
    switch (fmt[3]) {
        case 'gold':
            tolerance = '5%';
            break;
        case 'silver':
            tolerance = '10%';
            break;
        default:
            tolerance = '20%';
            break;
    }
    return `${formattedOhm} ohms, ${tolerance}`
}

const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9
}