//Reduce function

const arr = [6, 8, 2, 3, 0, 1, 9];

//Call back function alone

var map1 = arr.reduce((x, cuValue, index, arr) => {
    console.log("x " + x);
    console.log("current " + cuValue);
    console.log("index " + index);
    console.log("processing arr " + arr);

    return x + cuValue;
});

console.log("Reduce result " + map1);
console.log();

var map2 = arr.reduceRight((x, cuValue, index, arr) => {
    console.log("x " + x);
    console.log("current " + cuValue);
    console.log("index " + index);
    console.log("processing arr " + arr);

    return x + cuValue;
});

console.log();
console.log("Reduce Right result " + map2);