// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.(bija array ma copy thy jay)

var a = [1, 2, 3, 4, 5]

var b = [...a, 10, 11, 12]
console.log(b);

var obj = { name: 'bhadres', age: 25 }
var o = { ...obj }
console.log(o)