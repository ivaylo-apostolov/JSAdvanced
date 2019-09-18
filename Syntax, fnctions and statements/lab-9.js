function spliting(str){
    var splited = str.split(/[ ,.]+/);
    splitedToUpper = splited.map(x => x.toUpperCase());
    console.log(splitedToUpper.join(", "));
}

spliting('Hi, how are you?');