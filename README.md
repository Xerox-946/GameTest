# 说明文档

版本 1.0

# 初始化项目流程

## 1. 安装 module

```shell
npm install
```

## 2. 配置测试地址

修改 config.json 配置

## 3. 生成账号列表

node init-account '账号名' 账号个数

例：
node init-account op 1000

## 4. 运行测试

node test.js '账号名'

例：
node test.js op
