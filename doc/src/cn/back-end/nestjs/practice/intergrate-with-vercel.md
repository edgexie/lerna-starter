# nestjs 与 vercel 集成

> 注意，访问 vercel 官网需要科学上网

本文主要介绍以下几个内容：

- 创建 nestjs 项目，本地跑通
- 上传 nestjs 项目到 github 仓库
- 创建 vercel 项目并导入那个仓库
- 为部署好的 vercel 项目添加国内域名访问

## 创建 nestjs 项目

```shell
$ npm i -g @nestjs/cli
# 不想全局安装 nestjs 脚手架 也可以使用 npx nest new intergrate-with-vercel
$ nest new intergrate-with-vercel # 根据控制台提示，选择包管理工具安装依赖
$ cd intergrate-with-vercel
$ pnpm run start:dev
```

访问 http://localhost:3000

![img](https://bucket.edgexie.top/for-blog/nestjs/p1.jpg)

## 创建 github 仓库

在 github 上创建一个仓库，将本地项目传到仓库

```shell
$ git add .
$ git commit -m "feat: project init"
$ git branch -M main # 切换主分支名为main，我曾经问过GPT为什么github要改主分支名为main
$ git remote add origin [你的仓库地址]
$ git push -u origin main
```

添加 vercel 项目配置文件 vercel.json 在根目录，[参考](https://vercel.com/docs/projects/project-configuration)。

```json
{
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": ["GET", "POST", "PUT", "DELETE"]
    }
  ]
}
```

```shell
$ git add .
$ git commit -m "chore: add vercel.json"
$ git push
```

为什么 github 要改主分支名为【GPT】

![img](https://bucket.edgexie.top/for-blog/nestjs/p2.png)

## 创建 vercel 项目并导入仓库

![img](https://bucket.edgexie.top/for-blog/nestjs/p3.jpg)

![img](https://bucket.edgexie.top/for-blog/nestjs/p4.jpg)

![img](https://bucket.edgexie.top/for-blog/nestjs/p5.jpg)

看到这个表示部署成功了。

![img](https://bucket.edgexie.top/for-blog/nestjs/p6.jpg)

访问以下试试 😀

![img](https://bucket.edgexie.top/for-blog/nestjs/p7.png)

![img](https://bucket.edgexie.top/for-blog/nestjs/p8.jpg)

## 让国内能访问

先决条件，你需要有自己的域名。我的域名是在阿里买的。

打开刚才那个项目的 vercel 设置，选 `Domains`。

![img](https://bucket.edgexie.top/for-blog/nestjs/p9.jpg)

添加一个域名

![img](https://bucket.edgexie.top/for-blog/nestjs/p10.jpg)

添加后会提示配置错误，这是因为还没有在域名提供商那做解析。看图中提示，是要在提供商那里添加一条 CNAME 的记录。

![img](https://bucket.edgexie.top/for-blog/nestjs/p11.jpg)

![img](https://bucket.edgexie.top/for-blog/nestjs/p12.jpg)

提供商那里设置好以后，会看到在 vercel 项目设置里域名设置成功。

![img](https://bucket.edgexie.top/for-blog/nestjs/p13.jpg)

访问一下自己的域名，看到返回 hello world 表示成功。

![img](https://bucket.edgexie.top/for-blog/nestjs/p14.jpg)

## 资源

- nestjs 项目，[地址](https://github.com/edgexie/intergrate-with-vercel)
- 最终访问地址，https://intergrate-with-vercel.edgexie.top/
- vercel.json 设置参考，[地址](https://vercel.com/docs/projects/project-configuration)
- 这边文章同样发表在我的[博客]()上了
