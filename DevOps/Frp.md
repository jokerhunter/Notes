# Frp

## frp+nginx 内网穿透

[frp github download archive](https://github.com/fatedier/frp/releases)

[使用frp+nginx搭建http/https内网穿透](https://zhuanlan.zhihu.com/p/424471359)

[frp](https://frps.cn/11.html)

[frp内网穿透教程，手把手教学](https://sspai.com/post/85402#!)

[toml](https://toml.io/cn/v1.0.0#%E8%A1%A8)

[frp toml配置](https://blog.csdn.net/u010100623/article/details/136215908)


### aliyun ESC Dashboard 无法访问
[aliyun ESC Dashboard 无法访问](https://github.com/fatedier/frp/issues/3861)

已解决
先用ifconfig查看ECS的内网ip,一般是eth0网卡的，
然后把.toml配置中的WebServer.Addr改成这个地址。
应该是阿里云的ECS的问题。
但是不知道为什么用127.0.0.1不行。。。。。


