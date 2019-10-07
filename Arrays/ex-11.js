function solve(input){
    let [matrixRows, matrixCols] = input;
    let matrix = [];

    for (let row = 0; row < matrixRows; row++) {
        matrix[row] = [];
        for (let col = 0; col < matrixCols; col++) {
            matrix[row][col] = 0;
        }
    }

    let number = 1;

    for (let row = 0; row < matrixRows; row++) {
        for (let col = 0; col < matrixCols; col++) {
            if (row === 0) {
                matrix[row][col] = number;
                number++;
            }

            if (row === 1 ) {
                
            }
        }
    }

    console.log(matrix);
    
}

solve(
    [5, 5]
);