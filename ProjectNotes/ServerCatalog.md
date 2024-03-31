## **服务器1：**1**06**.15.1**27**.**9**2

```
ip：      106.15.127.92
内网ip：  10.0.4.3
```

### **mysql8.0**

```
ip:          106.15.127.92
port:        13306
username:    root
password:    tqooteMysql0028
```

```
docker run -d -p 13306:3306 --privileged=true \
-v /data/mysql-master/log:/var/log/mysql \
-v /data/mysql-master/data:/var/lib/mysql \
-v /data/mysql-master/conf:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=tqooteMysql0028 \
--name mysql8 mysql:8.2.1
```

**my.conf**

```
[client]
default_character_set = utf8mb4
[mysqld]
collation_server = utf8mb4_general_ci
character_set_server = utf8mb4

```

### **redis6.2**

```
ip:          106.15.127.92
port:        36379
password:    tqooteRedis0028
```

```
docker run \
--name redis \
-p 36379:6379 \
--restart unless-stopped \
-v /data/redis/data:/data \
-v /data/redis/conf/redis.conf:/etc/redis/redis.conf \
-d redis:latest \
redis-server /etc/redis/redis.conf
```

```
port 16379
# bind 127.0.0.1
# 开启持久化
appendonly yes
requirepass tqooteRedis0028
daemonize no
```
