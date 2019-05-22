const fightersList = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
const initial_position = [0, 0]
const movesList = ['up', 'left', 'right', 'left', 'left']

// then I should get:
// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

function streetFighterSelection(fighters, position, moves) {
    let output = [];
    const positionArray = [];
    positionArray.push(position);

    for( var i=0; i<moves.length; i++ ){
        let move = moves[i];
        if (move === 'up') {
            let currentMove = positionArray[positionArray.length - 1].slice();
            positionArray.push([0, currentMove[1]]);
        }
        else if (move === 'down') {
            let currentMove = positionArray[positionArray.length - 1].slice();
            positionArray.push([1, currentMove[1]]);
        }
        else if (move === 'left') {
            let currentMove = positionArray[positionArray.length - 1].slice();
            positionArray.push([currentMove[0], (6+currentMove[1] - 1)%6 ]);
        }
        else if (move === 'right') {
            let currentMove = positionArray[positionArray.length - 1].slice();
            positionArray.push([currentMove[0], (6+currentMove[1] + 1)%6 ]);
        }
    }
    console.log(positionArray);

    for( var j=0; j<positionArray.length; j++ ){
        let choice = positionArray[j];
        output.push( fighters[choice[0]][choice[1]] );
    }
    console.log(output.slice(1));
    return output.slice(1);
};

streetFighterSelection(fightersList, initial_position, movesList);
