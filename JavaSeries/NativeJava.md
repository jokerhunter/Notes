# NativeJava

## github地址
[https://github.com/jokerhunter/NativeJava](https://github.com/jokerhunter/NativeJava)

## 参考博客
[Collection 类-pdai](https://pdai.tech/md/java/collection/java-collection-all.html)

## Collection 集合
### ArrayList
[ArrayList源码-pdai](https://pdai.tech/md/java/collection/java-collection-ArrayList.html)

- 扩容1.5倍
```java
int newCapacity = oldCapacity + (oldCapacity >> 1);
```
- 不支持异步（）
`Collections.synchronizedList()`

### LinkedList(几乎不用)
[LinkedList源码](https://pdai.tech/md/java/collection/java-collection-LinkedList.html)

现在几乎不用LinkedList，使用ArrayDeque代替


### Stack & Queue
[Stack & Queue](https://pdai.tech/md/java/collection/java-collection-Queue&Stack.html)

Stack不使用，用Deque代替

LinkedList尽量不使用，用ArrayDeque代替

PriorityQueue优先级队列

### HashMap和HashSet
#### HashMap
- 采用数组加链表方式存储
- Java7只有链表，Java8则引入红黑树

- Java8特性：数量超过`capacity*load_factor`则需要扩容，扩容为两倍
`newCap = oldCap << 1`
- 默认初始化数组大小为16
- 链表插入的节点为第八个时，转化为红黑树

为什么不优先使用红黑树
加载因子为什么是0.75
临界点8和加载因子泊松分布的关系，扩容为什么是2的倍数
put，get方法底层逻辑，1.7和1.8 resize方法的不同
头插法和尾插法差别，以及死链问题

JVM缓存有Caffeine中间件
