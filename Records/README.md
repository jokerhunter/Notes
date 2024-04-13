##### 背压(Backpressure)机制
[如何形象的描述反应式编程中的背压(Backpressure)机制？](https://www.zhihu.com/question/49618581)
按照[https://github.com/ReactiveX/RxJava/wiki/Backpressure](https://github.com/ReactiveX/RxJava/wiki/Backpressure)的描述和人讲，大多数人很难听懂。特别是Throttling、throttleLast、throttleFirst、debounce等概念。

响应式编程（Reactive Programming）

背压是指 系统在一个临时负载峰值期间接收数据的速率大于其处理速率的一种场景 （备注：就是处理速度慢，接收速度快，系统处理不了接收的数据）。

