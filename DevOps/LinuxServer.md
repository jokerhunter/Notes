# LinuxServer

以下配置以Ubuntu 22.04为例

## 配置环境变量

## 配置systemd启动服务
```shell
vim /usr/lib/systemd/system/srs.service
systemctl daemon-reload
systemctl start nacos
systemctl stop nacos
systemctl status nacos
```

### 配置nacos至systemd

```service
[Unit]
# 服务名称，可自定义
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
# 启动frps的命令，需修改为您的frps的安装路径
ExecStart = /path/to/frps -c /path/to/frps.toml

[Install]
WantedBy = multi-user.target
```

### 配置nacos至systemd

```shell
# 下面这一行必须有，不然会报错
#vim /usr/lib/systemd/system/nacos.service

[Unit]
Description=nacos 启动脚本，包括start,stop
#表示当前服务是在那个服务后面启动，一般定义为网络服务启动后启动
After=network.target

[Service]
# 添加java的环境变量，在systemctl中它不会读取.bash_profile中的环境变量的，必须明确指定
Environment="JAVA_HOME=/home/software/jdk/jdk1.8.0_192"
#定义启动类型
Type=forking
#定义启动进程时执行的命令。/bin/bash必须有，不然会报错
ExecStart=/bin/bash /home/nacos/start.sh
#重启服务时执行的命令
#ExecReload=/usr/local/apache/bin/apachectl restart
#定义关闭进程时执行的命令。
ExecStop=/bin/bash /home/nacos/nacos/bin/shutdown.sh
#是否分配独立空间
PrivateTmp=true

[Install]
 #表示多用户命令行状态
WantedBy=multi-user.target
```

