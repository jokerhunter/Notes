# Records

## Blogs and Articles

- 疯狂创客圈

[Feign原理（图解）](https://www.cnblogs.com/crazymakercircle/p/11965726.html)

[疯狂创客圈](https://www.cnblogs.com/crazymakercircle/p/9904544.html)


## Concept and Explaination

##### 背压(Backpressure)机制
[如何形象的描述反应式编程中的背压(Backpressure)机制？](https://www.zhihu.com/question/49618581)
按照[https://github.com/ReactiveX/RxJava/wiki/Backpressure](https://github.com/ReactiveX/RxJava/wiki/Backpressure)的描述和人讲，大多数人很难听懂。特别是Throttling、throttleLast、throttleFirst、debounce等概念。

响应式编程（Reactive Programming）

背压是指 系统在一个临时负载峰值期间接收数据的速率大于其处理速率的一种场景 （备注：就是处理速度慢，接收速度快，系统处理不了接收的数据）。


## programme tips

### springboot 监听器

applicationEventListener
```java
@TransactionEventListener(phase=TransactionPhase.after_commit)
```

### mvc
service层  service
```java
@RequiredArgsConstructor
```

repository层
```java
@slf4j
@repository
```

`@suppressWarings`注解消除代码编译warning

### mybatis-plus

MetaObjectHandler 处理数据

@FieldFill  注入数据（entity配置）

extends DynamicTableNameInerIntercepter 动态表名过滤器
setTableNameHandlerMap

