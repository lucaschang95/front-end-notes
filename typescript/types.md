# 类型

let num: number;

let str: string;

let bool: boolean;

#### 数组

let boolArray: boolean[];



#### 特殊类型

any, null, undefined, void

void用来表示一个函数没有返回值



#### 联合类型

用|分割开



#### 元祖类型

let nameNumber: [string, number]



## 枚举

- ts的枚举类型是基于数字的，故可以将数字类型赋值给枚举类型。
- 结合位操作，使用数字枚举做标记
- 数字枚举：双向映射，字符串枚举：单向映射

#### 常量枚举

不会为枚举类型生成任何js代码，对性能有明显的提升作用

#### 异构枚举

就是数字枚举和字符串枚举的组合，一个枚举中既有数字又有字符串。