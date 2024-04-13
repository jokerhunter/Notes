# NiFi

## NiFi基本概念
[官方文档https://nifi.apache.org/documentation/](https://nifi.apache.org/documentation/)

[NIFI官方文档 NiFi Documentation 1.25.0](https://nifi.apache.org/documentation/v1/)

[Nifi BLOG-中文文档](https://nifichina.gitee.io/1-基础文档/1-Overview.html)

NIFI与Flume类似

- **参考文档**

[数据同步工具——nifi https://zhuanlan.zhihu.com/p/421616541](https://zhuanlan.zhihu.com/p/421616541)

### 概述

NiFi 是一个易于使用、功能强大而且可靠的流式数据处理和分发系统。NiFi 是为数据流设计，支持从多种数据源动态的拉取数据，并基于WEB图形界面，通过拖拽、连接、配置完成基于流程的编程，实现数据采集、处理等功能。

- Systems fail 系统崩溃
- Data access exceeds capacity to consume 数据超出范围
- Boundary conditions are mere suggestions 总是得到边界数据
- What is noise one day becomes signal the next 现实业务或需求变更快，迅速设计新的数据处理流程或者修改已有的流程。
- Systems evolve at different rates 给定的系统所使用的协议或数据格式可能随时改变
- Compliance and security 系统到系统和系统到用户的交互必须是安全的，可信的，负责任的。
- Continuous improvement occurs in production 通常不可能在测试环境中完全模拟生产环境。

### 核心概念

| Nifi术语 | 描述 |
| ---- | ---- |
| FlowFile | 数据在NIFI中传输时封装的对象，分为属性（attribute）和内容，其中属性是键值对的头信息，内容为字符串 |
| FlowFile Prcessor | 数据处理器组件，通过选择不同的处理器，对数据进行不同的读写或者转换清洗等操作 |
| Connection | connection用来连接各个processor,编排processor流转网络。 |
| Flow Controller | 流控制器维护流程如何连接，并管理和分配所有流程使用的线程。流控制器充当代理，促进处理器之间流文件的交换。 |
| Process Group | 进程组里是一组特定的流程和连接，可以通过输入端口接收数据并通过输出端口发送数据，这样我们在进程组里简单地组合组件，就可以得到一个全新功能的组件(Process Group)。|


## 参考
[[fbp] Wikipedia. Flow Based Programming [online]. Retrieved: 28 Dec 2014, from: http://en.wikipedia.org/wiki/Flow-based_programming#Concepts](http://en.wikipedia.org/wiki/Flow-based_programming#Concepts)

