function solve(input){
    let [matrixRows, matrixCols, starX, starY] = input;
    let matrix = [];

    fillMatrix(matrix);

    matrix[starX][starY] = 1;
    fillingTheOrbit(matrix);

    function fillingTheOrbit(matrix){
        let maxX = Math.max(starX, matrix.length - starX);
        let maxY = Math.max(starY, matrix[0].length);
        for (let row = 0; row <maxX; row++) {
            
            
        }
    }
    
    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let row = 0; row < matrixRows; row++) {
            let oneRow = '';
            for (let col = 0; col < matrixCols; col++) {
                oneRow += matrix[row][col] + " ";
            }
            oneRow.trim();
            console.log(oneRow);
        }
    }

    function fillMatrix(matrix) {
        for (let row = 0; row < matrixRows; row++) {
            matrix[row] = [];
            for (let col = 0; col < matrixCols; col++) {
                matrix[row][col] = 0;
            }
        }
    }
}

solve(
    [4, 4, 0, 0]
);