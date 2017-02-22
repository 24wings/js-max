/**
 * enumerable 属性
 * 当设置为false 时，
 * 1. for in 
 * 2. Object.keys()
 * 3. Object.getOwnerPropertyNames() 能获取所有(包括枚举的属性)
 */

var demo;

var car = {};

Object.defineProperty(car, 'doors', {
    enumerable: true,
    value: 2
});
Object.defineProperty(car, 'wheels', {
    enumerable: true,
    value: 4
});

Object.defineProperty(car, 'secret', {
    enumerable: false,
    value: true
});


// 1.for in迭代
for (var key in car) {
    console.log(key);
}

// 2. Object.keys()迭代
console.log(Object.keys(car));


// 3. Object.getOwnPropertyNames(car)
console.log(Object.getOwnPropertyNames(car));


