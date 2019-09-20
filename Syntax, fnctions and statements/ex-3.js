function sameNumbers(a){
    var str = a.toString();
    let splitStr = str.split("");
    var result = true;
    var varToAllFiles = 0;
    
    // for (let i = 0; i < str.length -1; i++) {
    //     if (str[i] != str[i + 1]) {
    //         result = false;
    //         break;
    //     }
    // }

    var temp = splitStr[0];

    splitStr.forEach(element => {
        if (temp != element) {
            return result = false;
        }
        return temp = element;
    });

    console.log(result);

    let sum = 0;
    splitStr.forEach(function(element) {
        let num = Number(element);
        sum += num;
    });

    console.log(sum);
}

sameNumbers(2222222);