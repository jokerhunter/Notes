# Chapter1 preliminaries（预备知识）

## 数据操作(ndarrray)

### 入门
```python
import torch

x = torch.arange(12)
# tensor([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])
x.shape
# torch.Size([12])
x.numel()
# 12
X = x.reshape(3, 4)
torch.zeros((2, 3, 4)) #2*3*4全为0矩阵
torch.ones((2, 3, 4)) # 全为1
torch.randn(3, 4) # 随机数
torch.tensor([[2, 1, 4, 3], [1, 2, 3, 4], [4, 3, 2, 1]])
```

### 运算符

```python
# 加减乘除，元素一一对应
x = torch.tensor([1.0, 2, 4, 8])
y = torch.tensor([2, 2, 2, 2])
x + y, x - y, x * y, x / y, x ** y

# 张量
X = torch.arange(12, dtype=torch.float32).reshape((3,4))
Y = torch.tensor([[2.0, 1, 4, 3], [1, 2, 3, 4], [4, 3, 2, 1]])
# cat进行两个3*4矩阵连接
# dim=0 一维连接变为6*4    dim=2 二维连接变为3*8
torch.cat((X, Y), dim=0), torch.cat((X, Y), dim=1)

# 判断相等和求和
X == Y
X.sum()
```

### 广播机制
```python
a = torch.arange(3).reshape((3, 1))
b = torch.arange(2).reshape((1, 2))
a + b
```

### 索引和切片
```python
X[-1], X[1:3]
X[1, 2] = 9
X[0:2, :] = 12
```

### 节省内存
```python
# 使用Y = Y + X，内存不一致
before = id(Y)
Y = Y + X
id(Y) == before

# 通过[:]只修改内容，不会改变内存
Z = torch.zeros_like(Y)
print('id(Z):', id(Z))
Z[:] = X + Y
print('id(Z):', id(Z))

# 使用+=也不会改变内存指向
before = id(X)
X += Y
id(X) == before
```

### 转化为其他Python对像
```python
A = X.numpy()
B = torch.tensor(A)
type(A), type(B)
# (numpy.ndarray, torch.Tensor)

a = torch.tensor([3.5])
a, a.item(), float(a), int(a)
#(tensor([3.5000]), 3.5, 3.5, 3)
```

## 数据预处理(pandas)

### 读取数据集
```python
import os

os.makedirs(os.path.join('..', 'data'), exist_ok=True)
data_file = os.path.join('..', 'data', 'house_tiny.csv')
with open(data_file, 'w') as f:
    f.write('NumRooms,Alley,Price\n')  # 列名
    f.write('NA,Pave,127500\n')  # 每行表示一个数据样本
    f.write('2,NA,106000\n')
    f.write('4,NA,178100\n')
    f.write('NA,NA,140000\n')

# 如果没有安装pandas，只需取消对以下行的注释来安装pandas
# !pip install pandas
import pandas as pd

data = pd.read_csv(data_file)
print(data)
```

### 处理缺失值  
d2l版本比较新会需要配置select_dtypes(include='number')，numeric_only=True
```python
#
inputs, outputs = data.iloc[:, 0:2], data.iloc[:, 2]
# inputs = inputs.fillna(inputs.mean())
# print(inputs.info())
# inputs = inputs.fillna(inputs.select_dtypes(include='number').mean())
inputs = inputs.fillna(inputs.mean(numeric_only=True))
print(inputs)

inputs = pd.get_dummies(inputs, dummy_na=True)
```

## 线性代数（linear-algebra）
### 标量、向量
```python
import torch

x = torch.tensor(3.0)
y = torch.tensor(2.0)

x = torch.arange(4)
len(x)
x.shape
```

### 矩阵
```python
# 创建矩阵
A = torch.arange(20).reshape(5, 4)
# 转置矩阵
A.T
# 对称矩阵
B = torch.tensor([[1, 2, 3], [2, 0, 4], [3, 4, 5]])
B == B.T
```

### 张量
```python
X = torch.arange(24).reshape(2, 3, 4)

A = torch.arange(20, dtype=torch.float32).reshape(5, 4)
B = A.clone()  # 通过分配新内存，将A的一个副本分配给B
# Hadamard积
A*B
```
A*B即运算$A\odot B$

### 降维

