1. 利用 [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring) & [Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) 循环对象
```js
let object = { name: 'Abby', age: 22 }
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value) // name Abby, age 22
}
```

2. Object.create, Object.freeze, Object.seal
```js
const obj = Object.create(null) // 创建不带原型的 pure object
Object.freeze() 与 Object.seal() 的区别
seal() 还可以修改已有属性，但不能添加新属性，freeze()什么都做不到。
Object.freeze() 只能冻结顶层属性，属性是引用类型时还是可以进行修改。
```

3. no-prototype-builtins ❌ [Object.hasOwnProperty](https://eslint.org/docs/latest/rules/no-prototype-builtins)
```js
const obj = { "hasOwnProperty": 1 } // obj.hasOwnProperty is not a function
// 安全使用方法
Object.prototype.hasOwnProperty(obj, key)
```