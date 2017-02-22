/**
 * 在javascript中对象是属性的管理器
 *  对象的创建方式有以下三种
 * * 字面量{}
 * * new ()
 * * Object.create()
 * 
 * 将对象的属性设置为不可变，进行防御型编程，一般搭建框架的时候可以设置配置变量
 */
var demo;
var car = {};
Object.defineProperty(car, 'doors', {
    configurable: true,
    value: 2
});

Object.defineProperty(car, 'wheels', {
    configurable: false,
    value: 4
});

delete car['doors'];
delete car['wheels'];
console.log(car['doors']);
console.log(car['wheels'])

Object.defineProperty(car, 'doors', {
    configurable: true,
    value: 4
});


// 会报错,Cannot redefine property: wheels
Object.defineProperty(car, 'wheels', {
    configurable: true,
    value: 8
});

