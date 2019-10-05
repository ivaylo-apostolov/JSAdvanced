function solve(input) {
    let matrix = [];
    let haveWinner = false;
    let winner = '';

    fillingMatrix(3);

    let playerMove = 'X';

    for (const move of input) {
        let [r, c] = move.split(' ');
        nextMove(r, c);

        if (CheckForWinningRow(matrix)[0] || checkForWinnigCol(matrix)[0] 
        || checkForWinningDiagonals(matrix)[0] || checkIfAllCellAreFilled(matrix)) {
            break;
        }
    }

    if (haveWinner) {
        console.log(`Player ${winner} wins!`);
    }
    else {
        console.log("The game ended! Nobody wins :(");
    }
    printMatrix(matrix);

    function checkIfAllCellAreFilled(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (matrix[row][col] === false) {
                    return false;
                }                
            }            
        }
        return true;
    }

    function nextMove(r, c) {
        if (matrix[r][c] === false) {
            matrix[r][c] = playerMove;
            if (playerMove === 'X') {
                playerMove = 'O';
            }
            else if (playerMove === 'O') {
                playerMove = 'X';
            }
        }
        else {
            console.log('This place is already taken. Please choose another!');
        }
    }

    function CheckForWinningRow(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            let rowCheck = matrix[row].every(x => x === matrix[row][0]);
            if (rowCheck && matrix[row][0] !== false) {
                haveWinner = true;
                winner = matrix[row][0];
                break;
            }
        }

        return [haveWinner, winner];
    }

    function checkForWinnigCol(matrix) {
        for (let col = 0; col < matrix.length; col++) {
            let column = [];
            for (let row = 0; row < matrix.length; row++) {
                column.push(matrix[row][col]);
            }

            let colCheck = column.every(c => c === column[0]);
            if (colCheck && column[0] !== false) {
                haveWinner = true;
                winner = column[0];
                break;
            }
        }

        return [haveWinner, winner];
    }

    function checkForWinningDiagonals(matrix) {
        let primariDiagonal = [];
        let secondaryDiagonal = [];

        for (let row = 0; row < matrix.length; row++) {
            primariDiagonal.push(matrix[row][row]);
            secondaryDiagonal.push(matrix[row][matrix.length - 1 - row]);
        }

        let checkPrimaryDiag = primariDiagonal.every(p => p === primariDiagonal[0]);
        if (checkPrimaryDiag && primariDiagonal[0] !== false) {
            haveWinner = true;
            winner = primariDiagonal[0];
        }

        let checkSecondaryDiag = secondaryDiagonal.every(s => s === secondaryDiagonal[0]);
        if (checkSecondaryDiag && secondaryDiagonal[0] !== false) {
            haveWinner = true;
            winner = secondaryDiagonal[0];
        }

        return [haveWinner, winner];
    }

    function fillingMatrix(dimentions) {
        for (let row = 0; row < dimentions; row++) {
            matrix[row] = [];
            for (let col = 0; col < dimentions; col++) {
                matrix[row][col] = false;
            }
        }
    }

    function printMatrix(matrix) {

        for (let row = 0; row < matrix.length; row++) {
            let oneRow = '';
            for (let col = 0; col < matrix[row].length; col++) {
                oneRow += matrix[row][col] + '\t';
            }

            oneRow.trim();
            console.log(oneRow);
        }
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);