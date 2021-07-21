# React fiber architecture

- 适合animation, layout, gestures
- incremental rendering, 将渲染分为chunks, 将渲染分为多个帧
- the ability to payse, abort, or reuse work
- 可以防止掉帧
- 主要目的：充分调度

## fiber是什么？

- a unit of work
- reimplementation of th the stack
- a virtual stack frame
- 实际上是一个js对象，包含component, input, output