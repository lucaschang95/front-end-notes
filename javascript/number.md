# Number

可以说，处理数字时，可以先考虑一下JavaScript里面Number的方法

- Number.parseInt, Number.parseFloat, 

## NaN

如何产生NaN？

- 解析数字失败
  - parseInt(), parseFloat(), Number()
- 未定义操作数
- NaN操作数

Number.isNaN()

## safeInteger

- 



## 方法

- 判断类，转换类
- Number.isFinite( )
  - 数字，且部位Infinity, NaN
- Number.isInteger( )
  - 整数
- Number.isNaN
- Number.isSafeInteger( )
转换类
- Number.parseInt(string, radix)
- Number.parseFloat(string)
- Number.prototype.toExponential(digits)
  - 使用几位的科学技术法表示
- Number.prototype.toFixed(digits)
  - format
- Number.prototype.toPrecision(digits)
  - 位数包括整数
- Number.toLocaleString(locales, options)

## 数字的表示
0b: 2进制(binary)
0o: 8进制(octal)
0x: 16进制(hexadecimal)
n结尾: bigInt


  