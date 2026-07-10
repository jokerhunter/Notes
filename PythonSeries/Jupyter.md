# Jupyter
Jupyter Notebook

## JupyterLab 和 Jupyter Notebook 

Jupyter Notebook：轻量、简单，只关注写 Notebook 本身。

JupyterLab：把所有工具集成在了一个界面里，更像一个完整的开发环境。

| 对比项 | Jupyter Notebook | JupyterLab |
| --- | --- | --- |
| 界面 | 单一文件管理 + 单独的 Notebook 视图 | 集成式 IDE：左侧文件树、右侧多标签页（Notebook、终端、文本编辑器等）同屏显示 |
| 多窗口/标签 | 每个 Notebook 独立浏览器窗口或标签 | 单个浏览器标签页内可打开多个文件，拖拽分屏，并列查看 |
| 文件管理 | 通过首页的树形目录管理 | 内置文件浏览器，拖拽移动/复制文件 |
| 扩展生态 | 有成熟的 nbextensions 集合（如目录生成、代码折叠） | 拥有自己的扩展系统（JupyterLab extensions），功能更现代，但部分老扩展需要迁移 |
| 终端与编辑器 | 没有内置终端和文本编辑器（需切换回首页） | 内置终端、文本编辑器、Markdown 预览等，一站式工作 |
| 适用场景 | 简单数据探索、快速写笔记 | 较复杂的项目开发、数据分析、文档编写混合场景 |


## 安装jupyter lab

```sh
# 创建名为 jupyterenv 的环境，指定 Python 版本，同时安装 jupyterlab
conda create -n jupyterenv python=3.10 jupyterlab -c conda-forge

# 激活环境
conda activate jupyterenv

# 启动 JupyterLab
jupyter lab
```




