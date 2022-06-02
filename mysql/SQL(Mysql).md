<!-- TOC -->

- [Mysql](#mysql)
    - [查询](#查询)
        - [多表查询的分类](#多表查询的分类)
            - [等值连接 vs 非等值连接](#等值连接-vs-非等值连接)
            - [自连接 vs 非自连接](#自连接-vs-非自连接)
            - [内连接 vs 外连接](#内连接-vs-外连接)
        - [种join的实现](#种join的实现)
        - [自然连接](#自然连接)
    - [函数](#函数)
        - [单行函数](#单行函数)
            - [数值函数](#数值函数)
            - [字符串函数](#字符串函数)
            - [日期和时间函数](#日期和时间函数)
            - [流程控制](#流程控制)
            - [加密解密函数](#加密解密函数)
        - [聚合函数](#聚合函数)
            - [COUNT()](#count)
            - [Group by 分组](#group-by-分组)
            - [Having的使用（作用：用来过滤数据）](#having的使用作用用来过滤数据)
        - [**sql执行过程**（重点）](#sql执行过程重点)
    - [子查询](#子查询)
        - [单行子查询](#单行子查询)
        - [多行子查询](#多行子查询)
        - [相关子查询](#相关子查询)
    - [DDL和DML](#ddl和dml)
    - [提交和回滚(commit, rollback)](#提交和回滚commit-rollback)
        - [mysql 5和mysql8.0之间DDL的区别](#mysql-5和mysql80之间ddl的区别)
        - [DML](#dml)
            - [添加数据](#添加数据)
            - [更新数据](#更新数据)
            - [删除数据](#删除数据)
            - [MySQL8新特性：计算列](#mysql8新特性计算列)
    - [Mysql类型](#mysql类型)
        - [整数类型](#整数类型)
        - [浮点数类型和定点数](#浮点数类型和定点数)
        - [位类型(Bit)](#位类型bit)
        - [日期与时间类型](#日期与时间类型)
        - [文本字符串类型](#文本字符串类型)
            - [char和varchar开发经验](#char和varchar开发经验)
            - [Text开发经验](#text开发经验)
            - [ENUM类型](#enum类型)
            - [SET类型](#set类型)
            - [二进制字符串类型（实际开发很少使用）](#二进制字符串类型实际开发很少使用)
                - [BINERY, VARBINERY](#binery-varbinery)
                - [BLOB](#blob)
                - [TEXT和BLOB使用注意事项](#text和blob使用注意事项)
            - [JSON类型](#json类型)
        - [小结及选择建议](#小结及选择建议)
    - [约束（constraint）](#约束constraint)
        - [约束分类](#约束分类)
            - [查看表的约束](#查看表的约束)
                - [not null](#not-null)
                - [unique](#unique)
                - [primary key](#primary-key)
                - [foreign key](#foreign-key)
                    - [外键约束等级](#外键约束等级)
                    - [删除外键约束](#删除外键约束)
                - [Check约束](#check约束)
                - [Default约束](#default约束)
                - [总结](#总结)
    - [视图](#视图)
        - [视图的理解](#视图的理解)
        - [创建视图](#创建视图)
        - [查看视图](#查看视图)
        - [视图操作数据](#视图操作数据)
        - [修改视图](#修改视图)
        - [删除视图](#删除视图)
        - [总结](#总结)
    - [存储过程和存储函数](#存储过程和存储函数)
        - [理解](#理解)
        - [创建、调用存储过程](#创建调用存储过程)
            - [语法分析](#语法分析)
            - [定义新的结束标记](#定义新的结束标记)
        - [存储函数](#存储函数)
        - [存储过程、存储函数的查看](#存储过程存储函数的查看)
        - [存储过程、存储函数的修改和删除](#存储过程存储函数的修改和删除)
        - [小结](#小结)
    - [变量、流程控制和游标](#变量流程控制和游标)
        - [变量](#变量)
            - [系统变量，会话变量](#系统变量会话变量)
            - [用户变量](#用户变量)
                - [会话用户变量，局部变量](#会话用户变量局部变量)
                - [局部变量](#局部变量)
        - [定义条件与处理程序](#定义条件与处理程序)
            - [定义条件](#定义条件)
            - [定义处理程序](#定义处理程序)

<!-- /TOC -->


# Mysql

- ""用于起别名，``用于字段名，''用于赋值字段

- DESC <表名> 等同于 description <表名>

- Null与任何类型的运算都为Null
1 + Null 结果为Null
输出结果：0代表FALSE 1代表TRUE

- <=> 安全等于  Null <=> Null 为true

- DISTINCT 去除重复行，只能写在最前面，但是是把后面字段全部去重

- order by 实现排序，放在结尾
    - ASC(ascend):升序
    - DESC(descend):降序

```sql
SELECT * 
FROM user 
WHERE id = '1'
ORDER BY username ASC, phone DESC;
```

- LIMIT分页操作
LIMIT <start> <step>
从start+1开始，偏移step的数据
```sql
SELECT employee_id, last_name
FROM employees
LIMIT 40,20;
-- 从41到60数据
```

## 查询

### 多表查询的分类

连接的三个角度：

#### 等值连接 vs 非等值连接
非等值连接
```sql
-- 非等值连接
SELECT e.last_name,e.salary,j.grade_level
FROM employees e, job_grades j
WHERE e.salary >= j.lowest_sal AND e.salary <= j.highest_sal
```

#### 自连接 vs 非自连接
自连接
```sql
-- 自连接
SELECT emp.employee_id, emp.last_name, mgr.employee_id, mgr.last_name
FROM employees emp, employees mgr
WHERE emp.manager_id = mgr.employee_id
```

#### 内连接 vs 外连接
- 内连接：两个表中都满足的数据
之前正常的写法基本都是内连接
$$
A \cap B
$$

SQL99语法实现
```sql
SELECT e.employee_id, e.last_name, e.department_id,
d.department_id, d.location_id
FROM employees e 
INNER JOIN departments d
ON (e.department_id = d.department_id);
```

下方SQL92中支持{+}进行连接,但是mysql不支持SQL92语法，oracle支持
```sql
-- 左外连接
SELECT last_name,department_name
FROM employees ,departments
WHERE employees.department_id = departments.department_id(+);
-- 右外连接
SELECT last_name,department_name
FROM employees ,departments
WHERE employees.department_id(+) = departments.department_id;
```

**语句中OUTER可省略**
- 外连接：
    - 左外连接(A)
    ```sql
    -- 实现查询结果是A
    SELECT 字段列表
    FROM A表 LEFT OUTER JOIN B表
    ON 关联条件
    WHERE 等其他子句;
    ```
    - 右外连接(B)
    ```sql
    SELECT 字段列表
    FROM A表 RIGHT OUTER JOIN B表
    ON 关联条件
    WHERE 等其他子句;
    ```

    - 满外连接/全连接
    $$
    A \cup B
    $$
    **FULL JOIN 在mysql中没有，oracle中有**
    ```sql
    SELECT 字段列表
    FROM A表 FULL OUTER JOIN B表
    ON 关联条件
    WHERE 等其他子句;
    ```

### 种join的实现
![7种SQL JOINS](https://www.runoob.com/wp-content/uploads/2019/01/sql-join.png)

左上和右上，直接使用left join 和right join实现
中间则是内连接

中左和中右则可利用补充数据为空的特点，在join基础上使用IS NULL获得结果
$$
A \cap \overline{A \cap B} 或者
B \cap \overline{A \cap B}
$$
```sql
SELECT employee_id,last_name,department_name
FROM employees e LEFT JOIN departments d
ON e.`department_id` = d.`department_id`
WHERE d.`department_id` IS NULL

SELECT employee_id,last_name,department_name
FROM employees e RIGHT JOIN departments d
ON e.`department_id` = d.`department_id`
WHERE e.`department_id` IS NULL
```

$$
(A \cup B) \cap (\overline{A \cap B})
$$

### 自然连接
NATURAL JOIN
自动把相同的字段进行连接，开发中不要用
USING 
当两个表中的字段相同时，可使用using代替=连接的方式
**该场景不适用于自连接**
```sql
SELECT employee_id,last_name,department_name
FROM employees e RIGHT JOIN departments d
USING (department_id)
```


## 函数
**不会就搜索引擎查**

### 单行函数

#### 数值函数
- 基本函数
- 角度与弧度互换函数
- 三角函数
- 指数与对数
- 进制间的转换

#### 字符串函数

#### 日期和时间函数

- 4.1 获取日期、时间
```CURDATE()now()等```
- 4.2 日期与时间戳的转换
```unix_timestap()```
- 4.3 获取月份、星期、星期数、天数等函数

- 4.4 日期的操作函数
```EXTRACT(SECOND FROM NOW())```
- 4.5 时间和秒钟转换的函数
```TIME_TO_SEC(CURTIME())```
- 4.6 计算日期和时间的函数
```DATE_ADD(NOW(), INTERVAL 1 YEAR) # 增加一年```
- 4.7 日期的格式化与解析
 ```sql
-- 格式化/解析： 日期 <===> 字符串
DATE_FORMAT(CURDATE(), '%Y-%M-%D')
TIME_FORMAT(CURTIME(), '%H:%i:%S')
STR_TO_DATE('')
 ```

#### 流程控制
IF()
IFNULL()
CASE WHEN ... THEN ... WHEN ... THEN... ELSE ... END

#### 加密解密函数
PASSWORD(str)、ENCODE()、DECODE()函数在mysql8.0中被弃用
- 不可逆加密
MD5(str)
SHA(str)

### 聚合函数
- AVG() / SUM():只适用于数值类型的字段

- MAX() / MIN()

#### COUNT()
1. 计算指定字段在查询结构当中的个数
计算个数的实现方式
- 方式1：COUNT(*)
- 方式2：COUNT(1)
- 方式3：COUNT(具体字段)：不一定正确
**注意：方式3中，计算指定字段的个数（不包含NULL值）**
在MyIsam中，三种count效率差不多，因为又row_count记录值，在Innodb中，采用count(*)和count(1)会采用二级索引，效率会更高


#### Group by 分组
1. **SELECT中出现的非组函数的字段必须声明在group by中，反之，group by中声明的字段可以不出现在SELECT中**
 ```sql
-- 此处错误！
SELECT department_id, job_id, AVG(salary)
FROM employees
GROUP BY department_id;
 ```

2. group by声明在where后面，order by 前面，limit前面
3. group by 中使用 WITH ROLLUP

#### Having的使用（作用：用来过滤数据）
1. 如果过滤条件中使用了聚合函数，则必须使用HAVING来替换WHERE。否则报错

2. HAVING必须声明在group by后面

 ```sql
-- 方法1：推荐，执行效率高于方法2
SELECT department_id, MAX(salary)
FROM employees
WHERE department_id IN (10,20,30,40)
GROUP BY department_id
HAVING MAX(salary) > 10000;

-- 方法2：
SELECT department_id, MAX(salary)
FROM employees
WHERE department_id IN (10,20,30,40)
GROUP BY department_id
HAVING MAX(salary) > 10000;
 ```

### **sql执行过程**（重点）

 ```sql
 -- 方式1(sql92语法)：
 SELECT ...,....,...
 FROM ...,...,....
 WHERE 多表的连接条件
 AND 不包含组函数的过滤条件
 GROUP BY ...,...
 HAVING 包含组函数的过滤条件
 ORDER BY ... ASC/DESC
 LIMIT ...,...
 -- 方式2(sql99语法)：
 SELECT ...,....,...
 FROM ... JOIN ...
 ON 多表的连接条件
 JOIN ...
 ON ...
 WHERE 不包含组函数的过滤条件
 AND/OR 不包含组函数的过滤条件
 GROUP BY ...,...
 HAVING 包含组函数的过滤条件
 ORDER BY ... ASC/DESC
 LIMIT ...,...
 -- 其中：
 --（1）from：从哪些表中筛选
 --（2）on：关联多表查询时，去除笛卡尔积
 --（3）where：从表中筛选的条件
 --（4）group by：分组依据
 --（5）having：在统计结果中再次筛选
 --（6）order by：排序
 --（7）limit：分页
 ```

**SELECT 语句的执行顺序（在 MySQL 和 Oracle 中，SELECT 执行顺序基本相同）**
```sql
FROM -> WHERE -> GROUP BY -> HAVING -> SELECT 的字段 -> DISTINCT -> ORDER BY -> LIMIT
```

## 子查询

### 单行子查询

### 多行子查询

### 相关子查询

tips:
1. 在from中写语句作为表来查询
2. 写多层嵌套循环
3. 复杂则从内往外写,简单两层循环则从外至内

## DDL和DML

## 提交和回滚(commit, rollback)
SET autocommit = FALSE
1. DDL*(DATA Definition Language): 操作一旦执行，不可以回滚，SET autocommit = FALSE不生效（因为操作之后，一定会执行一次commit，commit操作不受set autocommit = FALSE影响）
1. DML(Data Manipulation L...):默认情况下，一旦执行，也是不能回滚的，执行SET autocommit = FALSE后，则执行的DML操作可以回滚


### mysql 5和mysql8.0之间DDL的区别
Mysql8.0中，DDL的原子化，DDL操作会写入到data dictionary数据字典表mysql.innodb_ddl_log中（该表隐藏，show tables无法看到）
```sql
create database mytest;
use mytest;
create table book1(
    book_id INT,
    book_name varchar(255)
);
show tables;
drop table book1, book2;
show tables; -- book1
```
由于不存在book2，所以报错，mysql8.0会进行回滚，所以第二次还是会显示book1

### DML

#### 添加数据
```sql
--正常插入语句
insert into table_name(params ...)
values (values ...),
(values ...)

-- 插入查询结果
insert into table_name(params ...)
    -- 查询语句
select ...
from ...
where ...
-- 注意插入表的字段长度，插入表长度要大于查询结果字段长度
```

#### 更新数据
```sql
update emp1
set hire_date = CURDATE()
where id = 5;
-- 不加where条件则为全部修改
```

#### 删除数据
```sql
delete from emp1
where ...
```

**tips:多行联合删除**
```sql
DELETE m,u
FROM my_emploees m
JOIN users u
ON m.userid = u.userid
WHERE m.userid = 'Bbiri'
```

#### MySQL8新特性：计算列
```sql
create table test1 (
    a int,
    b int,
    c int gernerated always AS (a + b) VIRTUAL -- 字段c为计算列
)

insert into test1(a, b)
values (10,20)
select * from test1
-- 结果
-- a    b    c
-- 100  20   120
```

## Mysql类型

### 整数类型
tinyint, smallint, mediumint, int, bigint
1. 使用ZEROFILL，表示用“0”填满宽度，否则指定宽度无效
使用ZEROFILL，默认会添加UNSIGNED
```sql
create table table_name(
    f1 int,
    f2 int(5),
    f3 int(5) ZEROFILL -- 显示宽度为5，当insert不足5位时，用0填充为5位
)
```

2. mysql8.0.17开始，整数数据类型不推荐使用你显示宽度属性。


### 浮点数类型和定点数
double, float, Decimal
Decimal默认为Decimal(10, 0),无小数

### 位类型(Bit)


### 日期与时间类型

| 类型     | 名称 | 字节 | 日期格式            | 最小值                  | 最大值                  |
| -------- | ---- | ---- | ------------------- | ----------------------- | ----------------------- |
| YEAR     | 年   | 1    | YYYY                | 1901                    | 2155                    |
| TIME     |      | 3    | HH:MM:SS            | -838:59:59              | 838:59:59               |
| DATE     |      | 3    | YYYY-MM-DD          |                         |                         |
| DATETIME |      | 8    | YYYY-MM-DD HH:MM:SS |                         |                         |
| TIMESTAP |      | 4    | YYYY-MM-DD HH:MM:SS | 1970-01-01 00:00:01 UTC | 2038-01-19 03:14:07 UTC |

**timestap存储的是离1970-01-01 00:00:01的毫秒数，且得出的结果会根据时区进行变化**

- 开发中使用时间的经验
开发中尽量使用DATETIME，因为表示的时间范围大
此外，一般存注册时间、商品发布时间等，不建议使用DATETIME，而是使用时间戳，因为DATETIME虽然直观，但是不便于计算

```sql
-- 获取时间戳
select UNIX_TIMESTAP()
```



### 文本字符串类型

| 文本字符串类型 | 值的长度 | 长度范围 | 占用存储空间（单位：字节） |
| -------------- | -------- | -------- | -------------------------- |
| CHAR(M)        | M        | [0,255]  | M                          |
| VARCHAR(M)     | M        |          | M+1                        |
| TINYTEXT       | L        |          | L+2                        |
| TEXT           | L        |          | L+2                        |
| MEDIUMTEXT     | L        |          | L+3                        |
| LONGTEXT       | L        |          | L+4                        |
| ENUM           | L        |          | 1或2                       |
| SET            | L        |          | 1,2,3,4或8                 |


#### char和varchar开发经验
- MyISAM数据存储引擎和数据列：MyISAM数据表，最好使用CHAR代替VARCHAR,试表静态化，提高检索效率
- MEMORY存储引擎和数据列：MEMORY使用的都是固定长度的数据行存储，无论char还是varchar，都作为char处理
- InnoDB存储引擎：建议使用VARCHAR，内部行存储格式没有区分固定长度和可变长度，而且主要影响性能的因素是数据行使用的数据存储总量，由于char平均占用空间多于varchar，所以除了简短或固定长度，其他都考虑使用varchar。这样节省空间，对磁盘I/O和数据存储总量比较好。

#### Text开发经验
TEXT可以存较大的文本段，搜索速度稍慢，如果内容不大，建议使用char和varchar来代替。text不用加default，不生效。由于text和blob删除后产生的碎片比较多，多以频繁使用的数据不建议包含text字段，建议单独分出去，单独使用一个表。


#### ENUM类型
```sql
create table table_name (
    season ENUM('A','B','C','D')
)
insert into table_name(s) values('A'), ('B')

```

#### SET类型
```sql
create table table_name (
    season SET('A','B','C')
)
insert into table_name(s) values('A', 'B')
-- 报错，不包含D
insert into table_name(s) values('A', 'B', 'D')
```

#### 二进制字符串类型（实际开发很少使用）

##### BINERY, VARBINERY
BINERY, VARBINERY 二进制字符串，用得较少

##### BLOB
BLOB二进制大对象，图片，视频，音频等。一般不会这样做，会直接存储到服务器，数据库内存文件地址。

##### TEXT和BLOB使用注意事项
1. 执行大量的删除更新操作后，会产生大量得碎片，定期使用OPTIMIZE TABLE功能对这类表进行碎片整理
2. 对大文本进行模糊查询时，mysql提供了前缀索引。
3. 把blob和text分离到单独的表，减少主表得碎片

#### JSON类型
```sql
create table test_json(
    js json
)
insert into test_json (js)
values ('{"name":"aaa", "age":18, "address":{"province":"beijing", "city":"beijing"}}')

-- 直接select会得到json字符串，分别得到结果需要解析
select js -> '$.name' as NAME, js-> '$.age' as age, js -> '$.address.provice' as provice, js -> '$.address.city' as city
from test_json;
```

### 小结及选择建议
- 整数用INT，小数使用DECIMAL(M,D)，日期和时间使用DATETIME
- 非负数使用unsigned
- 如果存储数据超过DECIMAL范围，可以把数据拆开为整数和小数存储


## 约束（constraint）

- 实体完整性(Entity Integrity)：例：同一个表无法添加完全相同的数据
- 域完整性(Domain Integrity)：例：年龄在范围内
- 引用完整性(Referential Integrity)：例：员工所在部门，部门表中一定得存在
- 用户自定义完整性(User-defined Integrity)：


### 约束分类
1. 单列约束 vs 多列约束
2. 列级约束 vs 表级约束
3. 约束作用
not null(非空), unique(唯一), primary key, foreign key, check, default


#### 查看表的约束
```sql
select * from infromatio_schema.table_constraints
where table_name='...';
```

##### not null
```sql
alter table table_name 
modify ... varchar(10) not null
```

##### unique
```sql
create table user(
    id int,
    `name` varchar(15),
    `password` varchar(15),
    constraint uk_user_name_pwd unique(`name`, `password`)
)

-- unique中添加多个字段，复合索引
alter table ...
add constraint uk_id_email unique(`id`, `email`);

alter table table_name 
modify ... varchar(10) unique;
-- 删除索引
alter table table_name
drop index id
```

##### primary key
**主键约束相当于唯一约束+非空约束的组合**

**auto_increment**
自增字段，只能设置在主键上，且类型为Int。

##### foreign key
创建表语句中使用
```sql
    constraint fk_emp1_dept_id foreign key (department_id) references dept1(dept_id)
```

###### 外键约束等级
- Cascade方式：在父表上update/delete记录时，同步update/delete掉子表的匹配记录
- Set null方式：在父表上update/delete记录时，将子表上匹配记录的列设为null，但是要注意子表外键不能为not null
- No action方式：如果子表中有匹配记录，则不允许对父表对应候选键进行update/delete操作
- Restrict方式：同no action，都是立即检查外键约束
- Set default方式：父表有变更，子表设置默认值，innodb中不能识别

对于外键约束，最好采用`ON UPDATE CASCADE ON DELETE RESTRICT`

###### 删除外键约束
```sql
-- 查看约束名和删除外键约束
select * from information_schema.table_constraints where table_name='...';
alter table 从表名 drop foreign key 外键约束名;
-- 查看索引名和删除索引 （只能手动删除）
show index from 表名称;
alter table 从表名 drop index 索引名;
```

**尽量不要使用外键，其外键逻辑在应用层解决**


##### Check约束
**mysql5.7不支持CHECK约束，mysql8.0支持**
```sql
create table test10(
    id int,
    last_name varchar(15),
    salary decimal(10,2) check(salary > 2000);
)
```

##### Default约束
设置默认值


##### 总结
1. 为了让字段不出现空值，一般会加not null default ''或default 0。不想要null值得原因，碰到运算符，通常返回null，而且使用null参与运算，效率不高，影响索引效果。
2. auto_increment字段默认是从1开始，但如果已经先插入数据，会根据已插入数据得id，往上增加。



## 视图
数据库对象：表(TABLE)，数据字典，约束(CONSTRAINT)，视图(VIEW)，索引(INDEX)，存储过程(PROCEDURE)，存储函数(FUNCTION)，触发器(TRIGGER)

### 视图的理解
- 视图是一种虚拟表，本身是不具有数据的，占用很少的内存空间
- 视图的创建和删除只影响视图本身，不影响对应的基表。但是对视图中的数据进行DML操作，数据表中的数据会相应的发生变化，反之亦然。
- 视图可以理解为存储select语句的指针。

### 创建视图
```sql
create view vu_emp3(emp_id, name, monthly_sal)
as
select employee_id, last_name, salary
from emps
where salary > 8000
```

### 查看视图
```sql
-- 查看数据库的表对象、视图对象
show tables
-- 查看视图结构
describe vu_emp3
-- 查看视图的属性信息
show table status like 'vu_emp3';
-- 查看视图的详细定义信息
show create view vu_emp1;
```

### 视图操作数据
- 如果视图中包括join，group by，聚合函数（avg()）等查询时，数据更改会出错。
**虽然可以更新视图数据，但视图主要是用于方便更新，不建议更新视图数据，对视图数据的更改，都是通过对实际数据表的操作来完成的**


### 修改视图
1. or replace
```sql
create or replace view vu_emp1
as
select employ_id, last_name, salary, email
from emps
where salary > 7000;
```
2. alter view
```sql
alter view vu_emp1
as
select employ_id, last_name, salary, email
from emps
where salary > 7000;
```

### 删除视图
```sql
drop view if exists vu_emp4;
```

### 总结
视图优点：
1. 操作简单
2. 减少数据冗余
3. 数据安全（不同用户用不同的视图）
4. 适应灵活多变的需求
5. 能够分解复杂的查询逻辑

视图不足：
1. 数据结构变化，也要对视图进行维护，维护复杂，可读性不强


## 存储过程和存储函数

### 理解
Stored Procedure 存储过程，就是一组经过预先编译的sql语句对的封装。

好处：
1. 简化操作，提高sql的重用性
2. 减少操作过程的失误，提高效率
3. 减少网络传输量（客户端不需要把所有sql语句通过网络发给服务器）
4. 减少了sql语句暴露在网上的风险，提高了数据查询的安全


### 创建、调用存储过程
```sql
create procedure 存储过程名(IN|OUT|INOUT 参数名 参数类型,...)
[characterestics ...]
BEGIN
    存储过程体
END
```

#### 语法分析

1. 参数（默认为IN）
IN 入参
OUT 出参
INOUT 既可入参又可出参

2. characteristics表示对存储过程的约束条件
- LANGUAGE SQL:说明存储过程执行体是由sql语句组成，当前系统支持语言为sql
- [NOT] DETERMINISTIC:指存储过程执行的结果是否确定。
- {CONTAINS SQL | NO SQL | READS SQL DATA | MODIFILES SQL DATA }
是否包含sql，sql是否包含读或写操作，默认为`CONTAINS SQL`

- SQL SECURITY { DEFINER | INVOKE }:执行当前存储过程的权限
    - DEFINER 表示当前存储过程的创建者或定义者才能执行
    - INVOKE 表示拥有当前存储过程的访问权限的用户才能执行

- COMMENT 'string':注释信息


#### 定义新的结束标记
**一般`$`和`//`用得比较多**

实例：
```sql
DELIMITER $
CREATE PROCEDURE select_all_data()
BEGIN
    SELECT * FROM emps;
END $
DELIMITER ;

CALL select_all_data();

DELIMITER //
CREATE PROCEDURE select_all_data()
BEGIN
    SELECT AVG(salary) FROM employees;
END //
DELIMITER ;

CALL select_all_data();
```

实例：带OUT
```sql
DELIMITER //
CREATE PROCEDURE show_min_salary(OUT ms)
BEGIN
    SELECT MIN(salary) INTO ms
    FROM employees;
END //
DELIMITER ;

CALL select_all_data(@ms);

-- 查看变量值
SELECT @ms;
```

实例：带IN
```sql
DELIMITER //
CREATE PROCEDURE show_someone_salary(IN empname VARCHAR(10))
BEGIN
    SELECT salary FROM employees
    WHERE last_name = empname;
END //
DELIMITER ;

CALL show_someone_salary('Abel');

-- 调用方式2：
SET @empname := 'Abel';
CALL show_someone_salary(@empname);
```

实例：带IN OUT
```sql
DELIMITER //
CREATE PROCEDURE show_someone_salary2(IN empname VARCHAR(20), OUT empsalary DECIMAL(10,2))
BEGIN
    SELECT salary into empsalary
    FROM employees
    WHERE last_name = empname;
END //
DELIMITER ;

SET @empname := 'Abel';
CALL show_someone_salary(@empname, @empsalary);
SELECT @empsalary;
```

实例：带INOUT,表示入参和出参为同一个参数
```sql
DELIMITER //
CREATE PROCEDURE show_mgr_name(INOUT empname VARCHAR(20))
BEGIN
    SELECT last_name
    FROM employees
    WHERE employee_id = (
        SELECT manager_id
        FROM employees
        WHERE last_name = empname
    );
END //
DELIMITER ;

SET @empname := 'Abel';
CALL show_mgr_name(@empname);
SELECT @empname;
```

### 存储函数

```sql
DELIMITER //

CREATE FUNCTION email_by_name()
RETURNS VARCHAR(25)

BEGIN
    select email FROM employees WHERE last_name = 'Abel';
END //

DELIMITER ;
```
注意：若在创建存储函数中报错"you might want to use the less safe log_bin_trust_function_creators variable"解决方案
- 1. 加上必要的数特性"[NOT] DETERMINISTIC"和"{CONSTAINS SQL | NO SQL | MODIFIES SQL DATA}"
- 2. set ...

```sql
DELIMITER //

CREATE FUNCTION email_by_id(emp_id INT)
RETURNS VARCHAR(25)

BEGIN
    RETURN (SELECT email FROM employees WHERE employee_id = emp_id)
END //
DELIMITER ;

SET emp_id := ''
SELECT email_by_id(@emp_id)
```



|          | 关键字    | 调用语法        | 返回值                   | 应用场景                       |
| -------- | --------- | --------------- | ------------------------ | ------------------------------ |
| 存储过程 | PROCEDURE | CALL 存储过程() | 和参数OUT个数有关（>=0） | 一般用于更新                   |
| 存储函数 | FUNCTION  | SELECT 函数()   | 1                        | 一般用于查询结果为一个值返回时 |



### 存储过程、存储函数的查看
```sql
-- 1. 使用show create 语句查看存储过程和存储函数
show create procedure show_mgr_name;
show create function count_by_id;
-- 使用show status语句查看存储过程和存储函数状态信息
show procedure status;

show procedure status like 'show_mgr_name';
-- 从information_schema.Routines中查看 (ROUTINE_TYPE区分大小写)
select * from infromation_schema.Routines
where ROUTINE_NAME='email_by_id' AND ROUTINE_TYPE='FUNCTION';
```

### 存储过程、存储函数的修改和删除
```sql
ALTER PROCEDURE ...
SQL SECURITY INVOKER
COMMENT '...'

-- 删除
DROP PROCEDURE IF EXISTS ...
```

### 小结
```sql
-- 1 date_diff
DELIMITER //
CREATE PROCEDURE date_diff(IN birth1 DATE, IN birth2 DATE, OUT sum_date DATE)
BEGIN
    SELECT DATEDIFF(birth1, birth2) INTO sum_date
END //
DELIMITER ;

SET @birth1 = '1992-10-30'
SET @birth1 = '1992-09-08'
CALL date_diff(@birth1, @birth2, @sum_date)
SELECT @sum_data;

-- 2 limit
DELIMITER //

CREATE PROCEDURE beauty_limit(IN start_index INT, IN size INT)
BEGIN
    SELECT * FROM beauty LIMIT start_index, size
END //

DELIMITER ;

-- 调用
CALL beauty_limit(1, 3)
```

## 变量、流程控制和游标

### 变量

#### 系统变量，会话变量
```sql
select @@global.变量名;
select @@session.变量名;

-- 全局变量：如max_connections   变化重启失效
-- 会话变量: 如character_set_client 冲新连接失效

set @@global.变量名 = 值;
set @@session.变量名 = 值;
```

#### 用户变量

##### 会话用户变量，局部变量
```sql
set @用户变量 = 值;
set @用户变量 := 值;

select @用户变量 := 表达式[FROM等子句];
select 表达式 into @用户变量;

-- 例子
select @count := count(*) from employees;
select @count;
select avg(salary) into @avg_sal from employees;
select @avg_sal;
```

##### 局部变量
放于begin和end之间
```sql
DECLARE myparam INT DEFAULT 100;
```

### 定义条件与处理程序

#### 定义条件
```sql
-- 方式1
declare Field_Not_Be_Null condition for 1048;
-- 方式2
declare Field_Not_Be_Null condition for sqlstate '42000';

```

#### 定义处理程序
```sql
declare 处理方式 handler for 错误类型 处理语句
```

- 处理方式
    - CONTINUE
    - EXIT
    - UNDO

- 错误类型
    - SQLSTATE '字符串错误代码'
    - Mysql_error_code
    - 错误名称
    - SQLWARNING
    - NOT FOUND
    - SQLEXCEPTION

- 处理语句
    - SET等方式

```sql
-- DECLARE CONTINUE HANDLER FOR 1048 SET @prc_value=1

DELIMITER //
CREATE PROCEDURE InsertDataWithCondition()
BEGIN
DECLARE duplicate_entry CONDITION FOR SQLSTATE '23000' ;
DECLARE EXIT HANDLER FOR duplicate_entry SET @proc_value = -1;
SET @x = 1;
INSERT INTO departments(department_name) VALUES('测试');
SET @x = 2;
INSERT INTO departments(department_name) VALUES('测试');
SET @x = 3;
END //
DELIMITER ;

```
