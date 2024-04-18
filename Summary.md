# Survey and Summary

## 开发组件

### 组件

#### Nifi
[NIFI笔记](/大数据开发组件/NIFI.md)

#### TDH和CDH的区别

【TDH】
TDH：Transwarp Data Hub
1 Transwarp Inceptor简介

【CDH】
CDH：Cloudera Data Hub
Cloudera公司的发行版

#### DataOps:

[DataOps：数据中台的必备底座](https://zhuanlan.zhihu.com/p/307369553)


- Gartner


#### cloudera

[一文看懂 Cloudera 对 CDH/HDP/CDP 的产品支持策略](https://zhuanlan.zhihu.com/p/403612995)

#### CloudPass
云端能源互联网仿真平台

[CloudPass SimStudio文档](https://kb.cloudpss.net/simstudio/guide#)

#### ETL
extract-transform-load

- [ETL 是什么](https://zhuanlan.zhihu.com/p/352337320)

ETL 是企业数据应用过程中的一个数据流（pipeline）的控制技术，把原始的数据经过一定的处理，放入数据仓库里


Kettle、Talend、ETLCloud、Airbyte

- 技术方案

OWB(Oracle Warehouse Builder)
ODI(Oracle Data Integrator)
Informatic PowerCenter
AICloudETL、DataStage
Repository Explorer
Beeload
DataSpider
Kettle
Flink
Spark Streaming
TASCTL
Confluent
Fivetran
FlyData
Matillion
SnapLogic
StreamSets
Striim
Alooma
Flume
Sqoop
Lambda Architecture

#### ELK


#### 实时计算

flink, spark

- Hazelcast
[Hazelcast官方文档](https://docs.hazelcast.com/home/)

[分布式缓存：Hazelcast - zhihu](https://zhuanlan.zhihu.com/p/662512407)

- StreamPack

[Apache StreamPack 官网](https://streampark.apache.org/zh-CN/docs/intro/)

- ekuiper

[ekuiper 官网](https://ekuiper.org/docs/zh/latest/getting_started/getting_started.html)

LF Edge eKuiper 是物联网数据分析和流式计算引擎。它是一个通用的边缘计算服务或中间件，为资源有限的边缘网关或设备而设计。

- Neuron

[Neuron 官网](https://neugates.io/zh)

Neuron 是一款专门为工业物联网（IIoT）打造的工业协议网关软件。它支持在边缘侧运行，凭借其超低延迟处理能力，可有效管理边缘侧的工业数据采集及转发。


#### 消息队列

- mqtt

[emqx 官方文档](https://www.emqx.io/docs/zh/latest/)

[nanomq](https://nanomq.io/docs/zh/latest/)

rocketmq rabbitmq kafka

#### 规则引擎
thingsboard


### 数据仓库

- Hadoop
[Hadoop官方文档](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html)

- InfluxDB

[influxDB OOS docs](https://docs.influxdata.com/influxdb/v1/)

[安装InfluxDB开源（OSS）版本](https://influxdb-v1-docs-cn.cnosdb.com/influxdb/v1.8/introduction/install/)

[InfluxDB从原理到实战 - 什么是InfluxDB](https://zhuanlan.zhihu.com/p/80062750)

[如何看待 InfluxDB 集群功能不再开源？](https://www.zhihu.com/question/42150020/answers/updated)

- Doris

[Doris官网](https://doris.apache.org/zh-CN/docs/dev/get-starting/quick-start/)

- clickHouse

[clickHouse官方文档](https://clickhouse.com/docs/zh)

### 数据湖

- iceberg

[iceberg 官网](https://iceberg.apache.org/spark-quickstart/)


- Apache Paimon

[Apache Paimon 官网定义](https://paimon.apache.org/docs/master/concepts/overview/)

[Apache Paimon flink](https://paimon.apache.org/docs/master/flink/quick-start/)

[Apache Hudi](https://hudi.apache.org/)

- influxDB

- Alluxio

[Alluxio](https://docs.alluxio.io/os/user/stable/cn/Overview.html)

Alluxio 是世界上第一个面向基于云的数据分析和人工智能的开源的数据编排技术。 它为数据驱动型应用和存储系统构建了桥梁, 将数据从存储层移动到距离数据驱动型应用更近的位置从而能够更容易被访问。 这还使得应用程序能够通过一个公共接口连接到许多存储系统。 Alluxio内存至上的层次化架构使得数据的访问速度能比现有方案快几个数量级。

在大数据生态系统中，Alluxio 位于数据驱动框架或应用（如 Apache Spark、Presto、Tensorflow、Apache Hive 或 Apache Flink）和各种持久化存储系统（如 Amazon S3、Google Cloud Storage、OpenStack Swift、HDFS、IBM Cleversafe、EMC ECS、Ceph、NFS 、Minio和 Alibaba OSS）之间。 Alluxio 统一了存储在这些不同存储系统中的数据，为其上层数据驱动型应用提供统一的客户端 API 和全局命名空间。

## Java后端框架

### java 调用其他语言

Java调用Python协同开发
各语言在WASM互相调用

### DDD
adapter、application、domain、infrastructure

### 编程库
vavr、guava

### java爬虫

Gecco框架

[GitHub 上有哪些优秀的 Java 爬虫项目？](https://www.zhihu.com/question/31427895/answer/140473534)

[推荐一些优秀的开源Java爬虫项目](https://zhuanlan.zhihu.com/p/24844250)

[Gecco框架项目地址](https://gitcode.com/bannzai/Gecco/overview?utm_source=artical_gitcode)

[Java爬虫的几种方式](https://blog.csdn.net/qq_45506362/article/details/131801047)


### Math3

apache common, brentsolver

- 干球湿度、湿球温度、相对湿度计算

[干球湿度、湿球温度、相对湿度计算](https://www.cnblogs.com/Kirito-Asuna-Yoyi/p/17502527.html)


## 数据库
关系型数据库：mysql, oracle, PostgreSQL

Nosql：redis，mongodb

大数据：doris

## 云原生

### kubernates(k8s)

[kubernetes 官网](https://kubernetes.io/zh-cn/docs/home/)

[kubernetes 管理工具](https://www.zhihu.com/question/540096557)

KubeSphere、Lens、K9S、Shipyard、Kubernetic、Grafana、Kuboard、Kubevious、Octant

### rancher

[rancher 官网](https://docs.rancher.cn/)

### 运维
jenkins
```shell
clean package -Dmaven.test.skip=true -P dev -U
docker build
docker tag
docker push
rancher kubectl rollout restart ... -n dev
```
sqlops 管理sql

### k3s
[k3s](https://docs.k3s.io/zh/)

## 前端FrontSide
网页，移动端，小程序

## PythonSeries
[python系列](/PythonSeries/PythonSeries.md)

## Git代码管理工具
[Git](/Git_Hub_Lab_Pod/)
git笔记和guli项目(D:\Code\Projects\guli_mall\README.md)

## 视音频开发
WebRTC
