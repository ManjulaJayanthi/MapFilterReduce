
const arr = [6, 8, 2, 3, 0, 1];

var sum = arr.reduce((x, current, index) => {
    return x + current;
})

console.log("sum - " + sum);

var max = arr.reduce((x, current, index) => {
    return x < current ? current : x;
})


console.log();
console.log("max - " + max);


const mapFun = (item) => item * 2;

var map = () => arr.reduce((x, current) => {
    console.log('x',x)
     x.push(mapFun(current));
     return x
}, []);

console.log(map());
