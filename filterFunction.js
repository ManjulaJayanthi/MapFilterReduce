//Map function

const arr = [6, 8, 2, 3, 0, 1];

//Call back function alone

var map1 = arr.filter(x => x);

var map2 = arr.filter(x => x % 2 == 0);

// With index
var map3 = arr.filter(function (x, index) {
    console.log(index);
    console.log(x);
    return (x % 2 != 0);
});

const arr1 = [
    { x: 10, y: 2 },
    { x: 20, y: 3 },
    { x: 30, y: 'manjula' }
];

var map4 = arr1.filter(function (x) {
    return typeof(x.y) == 'string';
});

console.log(map1);
console.log(map2);
console.log(map3);
console.log(map4);