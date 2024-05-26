# Nacos

## Nacos开启鉴权配置
[Nacos开启鉴权配置](https://www.cnblogs.com/shigzh/p/17954917)

[Nacos官方鉴权配置](https://nacos.io/zh-cn/docs/v2/guide/user/auth.html)



## spring idea注册nacos

VM options: -DSpring.profiles.active=dev

2.0版本后启动类不用加上@EnableDiscoveryClient

### spingcloud启动报错
Description:
No spring.config.import property has been defined
```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-bootstrap</artifactId>
</dependency>
```

### 远程连接nacos配置中心报错：Client not connected, current status:STARTING
`Caused by: com.alibaba.nacos.api.exception.NacosException: Client not connected, current status:STARTING`

Nacos2.0版本新增了gRPC的通信方式，需要再多开放俩个端口：

(与主端口偏移量1000,1001）
9948： 8848+1000
9949： 8848+1001
