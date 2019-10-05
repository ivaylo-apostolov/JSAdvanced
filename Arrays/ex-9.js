function solve(input) {
    let matrix = [];
    let primaryDiag = 0;
    let secondaryDiag = 0;

    fillMatrix(matrix);

    if(checkSumOfDiagonals(matrix)){        
        fillWithValues(matrix)
    }
    printMatrix(matrix);

    function fillWithValues(matrix){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row === col || row + col === matrix.length - 1) {
                    continue;
                }
                matrix[row][col] = primaryDiag;
            }
            
        }
    }

    function checkSumOfDiagonals(matrix) {
        primaryDiag = 0;
        secondaryDiag = 0;

        for (let row = 0; row < matrix.length; row++) {
            primaryDiag += matrix[row][row];
            secondaryDiag += matrix[row][matrix.length - 1 - row];
        }

        return primaryDiag === secondaryDiag ? true : false;
    }

    function fillMatrix(matrix) {
        for (let row = 0; row < input.length; row++) {
            let token = input[row].split(" ");
            matrix[row] = [];
            for (let col = 0; col < input.length; col++) {
                matrix[row][col] = Number(token[col]);
            }
        }
    }

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            let oneRow = '';
            for (let col = 0; col < matrix.length; col++) {
                oneRow += matrix[row][col] + " ";
            }
            oneRow.trim();
            console.log(oneRow);
        }
    }
}

solve(
    ['1 1 1',
'1 1 1',
'1 1 0']

);