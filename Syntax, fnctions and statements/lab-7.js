

function daysOfWeek(a){
    var opr = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    }
    var num = opr[a];

    if (!isNaN(num)) {
        console.log(opr[a]);
    }
    else{
        console.log('error');
    }
}

daysOfWeek("Friday");