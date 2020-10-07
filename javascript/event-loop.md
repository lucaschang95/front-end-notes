# Event Loop

- js时单线程的语言
- js分为同步任务和异步任务，所有的同步任务都在主线程上执行
- 另外存在着一个任务队列，只要异步任务又了结果，便在任务队列里面加入一个事件
- 当主线程的同步任务都执行完了，这个时候会去读区任务队列，依次把他们扔到主线程中执行
- 这个过程不断循环，构成了js的时间循环机制



## 为什么JavaScript是单线程

- 浏览器脚本语言, 多线程会带来问题



## 事件循环 (Event Loop)

#### 机制

- 浏览器环境只能有一个事件循环
- 事件循环可以有多个任务队列



#### 循环过程

1. 浏览器执行一个macro-task

2. 浏览器取出micro-task的的所有任务
3. 重复1, 2
4. 最终所有队列清空, 代码执行完毕.



**注意**: 第一次执行`<script>`也算是从macro-task中取出一个macro-task.

#### execution stack

**取出的, 正在执行的任务处于execution stack中**



#### 宏任务（macro-task）

- 包括: script标签，setTimeout，setInterval，setImmediate，I/O, UI rendering



#### 微任务（micro-task）

- 包括: Promise.then，process.nextTick，MutationObserver



