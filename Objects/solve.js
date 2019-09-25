const sample = [1,2,3];
const mapResult = sample.map(function(val, index, array) {
    console.log('val :', val, 'index :', index, 'array :', array);
    return (val * 2);
});

const res = sample.map(function())