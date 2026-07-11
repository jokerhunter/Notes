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

## jupyter 快捷键
Ctrl + Shift + H：显示键盘快捷键帮助，如果不是该快捷键在HELP->Keyboard Shortcuts中查看。

### 命令模式

- ctrl+enter 执行当前代码块
- alt+enter 执行当前代码块并新建一个代码块，移动到下一行
- Shift + Enter： 运行当前单元并跳到下一个单元，如果是最后一个单元则新建单元 
- l 代码显示行数
- A / B：在当前单元上方/下方插入新单元 
- X / C / V：剪切、复制、粘贴单元 
- D, D（按两次）：删除当前单元 
- Z：撤销删除单元 
- Y / M：切换单元类型为代码/Markdown 
- 1-6：将 Markdown 单元设置为对应标题级别 
- I, I（按两次）：中断内核 
- 0, 0（按两次）：重启内核 
- 上下箭头 / J / K：选择上/下单元 
- Shift + M：合并选中的多个单元 

### 编辑模式快捷键

- Ctrl + Enter：运行当前单元但不跳转 
- Shift + Enter：运行当前单元并跳转到下一个单元 
- Alt + Enter：运行当前单元并在下方插入新单元 
- Ctrl + /：注释或取消注释选中代码行 
- Tab：代码补全或缩进 
- Shift + Tab：显示函数或对象的文档字符串 


