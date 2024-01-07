# Dive Into Deep Learing

## 课程介绍
- [课程主页](https://courses.d2l.ai/zh-v2/)
https://courses.d2l.ai/zh-v2/
- [教材](https://zh-v2.d2l.ai/)
https://zh-v2.d2l.ai/
- [视频教程](https://space.bilibili.com/1567748478/channel/seriesdetail?sid=358497)
- [本地代码笔记](F:\Learning\ArtificialIntelligence\DriveIntoDeepLearning)

## 安装
[代码笔记安装](https://zh-v2.d2l.ai/chapter_installation/index.html)

```shell
# linux可能需要的提前包，以及安装miniconda
sudo apt update
sudo apt install build-essential
sh <miniconda.sh>

# 使用conda/miniconda环境
conda env remove d2l-zh
conda create -n d2l-zh -y python=3.8 pip
conda activate d2l-zh

# 安装需要的包
pip install jupyter d2l torch torchvision

# 下载代码并执行
mkdir d2l-zh && cd d2l-zh
curl https://zh-v2.d2l.ai/d2l-zh-2.0.0.zip -o d2l-zh.zip
unzip d2l-zh.zip && rm d2l-zh.zip
cd pytorch

# 运行笔记
conda env list
conda activate d2l-zh
jupyter notebook
```

## 预备知识(preliminaries)
[预备知识(preliminaries)](./chap1_preliminaries.md)

