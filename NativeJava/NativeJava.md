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




