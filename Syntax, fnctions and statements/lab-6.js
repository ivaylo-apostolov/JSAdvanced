function squareOfStars(a){
    if (a == undefined) {
        printStars(5);
    }
    else{
        printStars(a);
    }

    function printStars(b){
        var row = '';
    
        for (let i = 0; i < b; i++) {
            for (let j = 0; j < b; j++) {
                row += '* ';         
            }
            console.log(row);
            row = '';
        }
    }
}



squareOfStars(10);