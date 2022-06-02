# Conda、MiniConda、Anaconda

## 下载

- 下载教程1
[【python3】一文教你如何使用miniconda ](https://www.cnblogs.com/triple-y/p/11830478.html)

- 下载教程2
[Miniconda安装及使用--小白上路](https://zhuanlan.zhihu.com/p/133494097)

- 下载地址1（镜像）
[清华大学Miniconda镜像](https://repo.anaconda.com/miniconda/)

- 下载地址2（镜像）
[Miniconda官方镜像](https://repo.anaconda.com/miniconda/)

- 官网下载miniconda
[miniconda下载地址](https://docs.conda.io/en/latest/miniconda.html)

- 官网下载Anaconda
[Anaconda下载地址](https://www.anaconda.com/products/distribution#windows)


## 添加环境变量
```less
D:\Miniconda3 
D:\Miniconda3\Scripts 
D:\Miniconda3\Library\bin 
```

```powershell
#查看版本，验证环境配置
conda -V

#查看帮助
conda --help
```

## 换源
```powershell
# 清华的镜像源
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge 
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/

# 中国科技大学源
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/

# 阿里云的服务器
http://mirrors.aliyun.com/pypi/simple/ 
# 豆瓣网站是用python做的呀 豆瓣的python的源
conda config --add channels http://pypi.douban.com/simple/ 


# 设置搜索时显示通道地址
conda config --set show_channel_urls yes


# 当安装包时，总会被询问是否`Proceed ([y]/n)?` ，默认为False，设置为`always_yes: True`将不会再做提醒
conda config --set always_yes True
```

## 创建虚拟环境(例：python 3.6 )

```
conda create -n python_3.6 python=3.6
```

## 查看已有环境
```
conda info -e 
conda env list
```

## 触发环境(例：python 3.6 )
```
conda activate python_3.6
```

## 退出或切换环境(例：python 3.6 )

- 退出
```
conda deactivate
```

- 切换到其他环境(此处切换到默认的base环境，即本地的python环境 )
```
conda activate base
```

## 删除某个环境(名为name的环境)
```
conda remove -n name --all
```

## 查看所有工具包
```
conda list
```

## 安装科学计算所需的工具
- 安装pandas，输入：
```
conda install pandas
```

- 安装matplotlib，输入：
```
conda install matplotlib
```

- 安装scipy，输入：
```
conda install scipy
```


# tips

## 1、报连接超时错误
```txt
Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ConnectTimeoutError(<pip._vendor.urllib3.connection.VerifiedHTTPSConnection object at0x0000025C04CCC1C0>, 'Connection to pypi.org timed out. (connect timeout=15)')
```
**解决方法：换源**
在[C:\Users\xxxx\AppData\Roaming\pip]中创建pip.ini(linux中为pip.conf),并添加：
```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```

```http
http://mirrors.aliyun.com/pypi/simple/
http://pypi.douban.com/simple/ 
https://pypi.tuna.tsinghua.edu.cn/simple/
http://pypi.mirrors.ustc.edu.cn/simple/
```


