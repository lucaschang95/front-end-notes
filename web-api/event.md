# Event

浏览器中的事件机制

一共两套机制

第一套机制：属性机制

html中 onclick属性。js中，dom元素的click属性。（覆盖html中 onclick属性）。bubble阶段

第二套机制：观察者模式的机制

addEventListener，可以区分capture/bubble阶段，可以对某个阶段注册多个函数，依次触发

