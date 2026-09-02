# RAG
Retrieval-AugmentedGeneratior
检索增强生成
RAG是一种将信息检索与文本生成相结合的技术架构。
它允许大模型在回答问题时，先从外部知识库中检索相关信
息，然后基于这些信息生成准确、可靠的回答。

## 总结
![alt text](LangChain/1_RAG系统流程.png)

文档 -> 文本分块 Embedding模型 -> 向量化 TF-IDF 语义权重增强 -> 索引(向量化数据库) 

问题 -> 文本分块 Embedding模型 -> 向量化 TF-IDF 语义权重增强 -> 检索

检索结果不好 -> 召回 -> 重排 Cross-Encoder模型

Graph RAG 关系图谱
dify Neo4j

## 大模型局限性-幻觉
大模型的幻觉问题
幻觉是指语言模型生成的看似合理却
错误的陈述。
即使面对看似简单的问题，幻觉也可
能以出人意料的方式出现。

## Graph RAG
图增强生成
Graph RAG是一种将图数据与文本生成相结合的技术架构。
它允许大模型在回答问题时，先从图数据中检索相关节点，
基于这些节点生成准确、可靠的回答。

![Graph Rag](RAG/Graph%20Rag.png)

![Agentic RAG](RAG/Agentic%20RAG.png)

## Rag 是什么

![RAG](RAG/RAG.png)

# 如何构建企业知识库？

## 索引

![alt text](RAG/2_索引.png)

![alt text](RAG/2_分块.png)

![alt text](RAG/2_向量化.png)

![alt text](RAG/2_向量存储.png)

![alt text](RAG/2_总结.png)

## 重排

### 召回局限性
![alt text](RAG/3_检索.png)

![alt text](RAG/3_召回局限性.png)

### 重排
Cross-Encoder模型
![alt text](RAG/3_重排.png)

![alt text](RAG/3_重排打分.png)

![alt text](RAG/3_最终生成prompt.png)


## RAG 文本分块
![alt text](RAG/2_文本分块.png)

![alt text](RAG/2_为什么需要文本分块.png)

### 为什么需要文本分块
文档分割是RAG流程中
RAG检索增强生成
文档分割是RAG流程中"索引（Indexing)"阶段的关键环节
它将预处理后的长文本转换为更小的片段，直接决定了：
检索的准确性（召回率）
生成的质量（信噪比）

### 多种文本分块策略
- 段落级切分
- 句子级切分
- 高级切分策略
利用Embedding模型计算前后句相似度，在话题突
变处切分，保持语义完整性
自动识别话题边界，将相关内容聚合在一起

### 总结
拒绝静态切分，转向动态、语义化、多粒度的分块策略。根据业务场景灵活选择分割方式，最大化 RAG 系统的检索准确性和生成质量。

## 文本向量化
![alt text](RAG/4_文本向量化.png)

![alt text](RAG/4_余弦距离.png)

TF-IDF向量化
![alt text](RAG/4_TF-IDF.png)

![alt text](RAG/4_tf_idf.png)

![alt text](RAG/4_维度.png)

![alt text](RAG/4_应用.png)

## Graph RAG
![alt text](RAG/5_目录.png)

![alt text](RAG/5_传统RAG.png)

![alt text](RAG/5_RAG比较.png)

![alt text](RAG/5_构建知识图谱.png)

![alt text](RAG/5_构建知识图谱_示例.png)

![alt text](RAG/5_构建知识图谱_ai协助构建.png)

### 落地 - Neo4j、Dify等
Neo4j是一个基于图的数据库，用于存储和查询复杂的关系数据。
它支持图数据库的所有功能，包括节点、边、索引、查询等。

![alt text](RAG/6_Neo4j.png)

Dify 
![alt text](RAG/6_Dify.png)

![alt text](RAG/6_示例.png)

![alt text](RAG/6_总结.png)


