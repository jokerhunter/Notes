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


