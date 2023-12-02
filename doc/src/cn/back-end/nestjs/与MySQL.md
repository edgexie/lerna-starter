---
outline: deep
---

Nest 与数据库无关，将 Nest 连接到数据库只是为数据库加载适当的 Node.js 驱动程序的问题。比如使用`@nestjs/typeorm`库，将 Nest 与 typeorm 链接，typeorm 与 mysql 数据库链接。
::: tip 关系链条
`nest应用 -- @nestjs/typeorm -- typeorm -- mysql`
:::

## TypeORM 集成

为了与 SQL 和 NoSQL 数据库集成，Nest 提供了 @nestjs/typeorm 包。 TypeORM 是可用于 TypeScript 的最成熟的对象关系映射器 (Object Relation Mapping)，简称 ORM。

### 安装依赖

```shell
npm install --save @nestjs/typeorm typeorm mysql2
```

### 使用

::: code-group

```ts [导入typeorm]
// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体类所在的路径
      synchronize: true, // 开发阶段可以使用自动同步（慎用于生产环境）
    }),
    UsersModule,
  ],
})
export class AppModule {}
```

```ts [实体]{2}
// users.entity.ts
// 注意表名要和实体名字一致
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ default: 1 })
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
```

```sql [测试数据]

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `age` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COMMENT='user';

INSERT IGNORE INTO `user` (`id`, `age`, `name`, `is_active`, `created_at`, `updated_at`) VALUES
	(1, 25, '玺文', 1, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(2, 30, '影茹', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(3, 40, '知歆', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(4, 22, '天成', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(5, 35, '知歆', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(6, 28, '开霁', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(7, 32, '彬彬', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(8, 29, '景彰', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(9, 27, '泰清', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44'),
	(10, 33, '瀚彭', 0, '2023-10-26 08:02:44', '2023-10-26 08:02:44');
```

```ts [使用]{8}
// users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Users])], // 使用 forFeature() 方法来定义在当前作用域内注册了哪些存储库
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  async findAll(pageDto: PageDto): Promise<[User[], number]> {
    if (pageDto.pageNum !== undefined && pageDto.pageSize !== undefined) {
      return this.findWithPagination(pageDto);
    } else {
      return this.findWithoutPagination();
    }
  }
  // 有分页条件的查询
  async findWithPagination(pageDto): Promise<[User[], number]> {
    const [users, count] = await this.userRepository.findAndCount({
      skip: (pageDto.pageNum - 1) * pageDto.pageSize,
      take: pageDto.pageSize,
    });
    return [users, count];
  }
  // 没有分页条件的查询
  async findWithoutPagination(): Promise<[User[], number]> {
    const [users, count] = await this.userRepository.findAndCount();
    return [users, count];
  }

  // 按id查询
  findOne(id) {
    return this.userRepository.findOneBy({ id });
  }
}

// users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async findUsers(@Query() pageDto: PageDto) {
    const [users, count] = await this.usersService.findAll(pageDto);
    return {
      data: users,
      total: count,
    };
  }

  @Get(':id') // 有个问题1，这里收到的id是string类型，为什么在service里还是能找到这条？
  async findOne(@Param('id') id: string) {
    const res = await this.usersService.findOne(id);
    return res;
  }

  @Put(':id:name')
  async updateOne(@Param('id') id: string, @Param('id') name: string) {
    const res = await this.usersService.updateOne({ id, name });
    return res;
  }
}
```

:::

::: detail /**/\*.entity{.ts,.js} 是一种什么形式？
`/**/\*.entity{.ts,.js}` 是一种用于匹配文件路径的模式，通常用于在一些工具和配置中指定文件的匹配规则。这种模式通常被称为 "glob 模式"，它允许你使用通配符和特殊字符来匹配文件路径。

具体来说，`/**/*.entity{.ts,.js}` 可以解释为：

- `/**/`: 匹配零个或多个子目录。
- `*.entity`: 匹配任何以 `.entity` 结尾的文件名。
- `{.ts,.js}`: 使用花括号表示选择，匹配 `.ts` 或 `.js` 扩展名的文件。

因此，这个模式用于匹配所有以 `.entity.ts` 或 `.entity.js` 结尾的文件，而这些文件通常是包含实体定义的文件，例如在使用 TypeORM（一个 TypeScript 和 JavaScript 的 ORM 框架）时，用于定义数据库实体的文件。
:::

::: details typeorm 的 synchronize 有什么用? [BY GPT]
`typeorm` 是一个用于 TypeScript 和 JavaScript 的对象关系映射（ORM）库，用于在应用程序和数据库之间进行数据映射。在 `typeorm` 中，`synchronize` 是一个用于自动创建数据库表结构的选项。

当你使用 `synchronize` 时，`typeorm` 会检查你的实体类（Entity）的定义，并确保数据库中存在相应的表。如果表不存在，它会尝试创建表。这在开发过程中很方便，因为你不必手动创建数据库表，而是可以依赖 `typeorm` 自动处理。

但要注意，在生产环境中，最好不要使用 `synchronize`。这是因为在生产环境中，你可能希望对数据库表的结构进行更严格的控制，并且手动管理数据库迁移（migration）。手动管理迁移可以更好地掌握数据库结构的演变，确保在更新应用程序时不会丢失数据或造成不必要的数据迁移问题。

在开发阶段，你可能会方便地使用 `synchronize`，但在生产环境中，最好使用数据库迁移工具（如 TypeORM 的迁移工具）来管理数据库的结构变化。这样可以更好地跟踪数据库模式的演进，并在需要时执行有序的数据库升级。
:::

::: tip
**收到的 id 是 string 类型，为什么在 service 里还是能找到这条？[GPT]**

在 TypeScript 中，当你在 Controller 接收 GET 请求参数时，即使你声明`id`的类型为`number`，它仍然可以接受传入的字符串，而 TypeORM 的`findOneBy`方法也可以正常工作。这是因为 TypeORM 的`findOneBy`方法会自动进行类型转换。

TypeORM 的`findOneBy`方法会检查传递给它的查询条件，并尝试将其中的属性与实体的列进行类型匹配。如果实体定义中指定了`id`为`number`类型，而你传递了一个字符串，TypeORM 会尝试将字符串转换为数字，以便与数据库中的列进行比较。

这种行为是由 TypeORM 的查询构建器和数据映射机制支持的。在这种情况下，TypeORM 会尽量进行合适的类型转换，以确保查询条件与数据库列的类型匹配。这种自动类型转换可以提高代码的灵活性，但同时也需要注意在边界情况下进行明确的类型转换，以避免潜在的错误。

在这种情况下，即使你的 Controller 接收到的参数是字符串，TypeORM 会尝试将其转换为匹配实体列类型的值。因此，在使用`findOneBy`时，你通常不需要手动进行类型转换。
:::

::: tip
**前端 id 传字符串 或者 数字，这个后端是自动转换好，还是要做异常提示？[GPT]**

在一些框架和库中，比如 Express 和 NestJS（通过 TypeORM 等库），后端通常会尝试自动进行类型转换，而不会直接导致异常。这种自动类型转换的行为是为了提高开发的灵活性，使得开发者在接收前端请求时不必过于担心传递参数的精确类型。

例如，在 Express 中，路由处理函数可以通过 `req.params` 获取 URL 中的参数，而这些参数的类型通常是字符串。当你在路由处理函数中使用这些参数时，Express 会尝试自动将其转换为适当的类型。这可能包括将字符串转换为数字、布尔值等，以适应你在路由处理函数中的预期类型。

尽管这样的自动类型转换很方便，但在一些情况下，可能会导致意外的行为。例如，如果你的路由处理函数期望一个数字，但实际传递了一个无法转换为数字的字符串，可能会导致错误。因此，有时在接收参数之前，进行显式的类型验证或转换可能是一个好的实践，以确保参数符合预期。

在 NestJS 中，使用 TypeORM 进行数据库操作时，通常也能够处理这些类型转换。TypeORM 会根据实体定义的类型信息，尝试将接收到的参数转换为相应的类型，从而与数据库中的列进行匹配。但同样，注意确保传递的参数是符合预期的，以避免潜在的错误。

综上所述，虽然许多后端框架会尝试进行自动类型转换，但在关键的地方，特别是需要保证类型准确性的情况下，最好进行显式的类型验证或转换，并在需要时提供适当的异常处理和错误提示。
:::

处理前端传递的参数并进行类型转换的最佳实践是使用 [Pipes](/cn/back-end/nestjs/管道.html#类验证器)。

通过使用 DTO 和 Pipes，你能够将参数的验证和类型转换与业务逻辑解耦，并确保接收到的参数符合预期的类型。这有助于提高代码的可维护性和可读性。

### 前端如何通过 GET 方法传对象或数组

推荐使用 `query-string` 库

::: code-group

```ts [传递对象]
import queryString from 'query-string';

const data = {
  key1: 'value1',
  key2: 'value2',
};

// 将对象转换为 URL 查询参数字符串
const queryStringParams = queryString.stringify(data);

// 构建完整的 URL
const url = `https://example.com/api/endpoint?${queryStringParams}`;

// 发送 GET 请求
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

```ts [传递数组]
// arrayFormat: 'bracket' 选项将数组参数格式化为带方括号的形式，例如 key2[]=value2&key2[]=value3。
import queryString from 'query-string';

const data = {
  key1: 'value1',
  key2: ['value2', 'value3'], // 数组参数
  key3: 'value4',
};

// 将对象转换为 URL 查询参数字符串，使用 arrayFormat: 'bracket' 选项
const queryStringParams = queryString.stringify(data, {
  arrayFormat: 'bracket',
});

// 构建完整的 URL
const url = `https://example.com/api/endpoint?${queryStringParams}`;

// 发送 GET 请求
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

:::

### 一对多和多对一

假设一个用户有多张图片，这样就是一对多(`oneToMany`)的场景。那么对于图片表里来说，就是多张图片对应一个用户(`manyToOne`)。

现在需要【通过用户 id 查询用户和用户对应的图片集】

1. 新建 `photo.entity`
2. 改造`user.entity`
3. 如果未使用 `glob模式` 则需在`app.module.ts`的`entities`中填入`photo.entity`。
4. 改造`user.service`中的方法

::: code-group

```ts [photo.entity]
// photo.entity.ts ，且把他放在user文件夹中
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
```

```ts [user.entity]
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column()
  is_active: number;

  @Column()
  name: string;

  @OneToMany(() => Photo, (photo) => photo.user) // [!code highlight]
  photos: Photo[]; // [!code highlight]
}
```

```ts [app.module]
// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Photo } from './photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Photo])], // [!code highlight]
})
export class AppModule {}
```

```ts [user.service]
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  // 根据id查询
  async findOne(id) {
    const res = await this.userRepository.findOne({
      where: { id },
      relations: { photos: true }, // [!code highlight]
    });
    return res;
  }
}
```

然后请求`http://localhost:3000/user/{用户id}`

:::

更多用法，参照[链接](https://typeorm.nodejs.cn/many-to-one-one-to-many-relations#)。

### 设置订阅者 subscriber

使用 TypeORM subscribers，你可以监听特定的实体事件。

步骤

1. 新建`user.subscriber.ts`文件
2. 在`user.module`中添加 `UserSubscriber` provider
3. 测试

::: code-group

```ts [user.subscriber.ts]
// user.subscriber.ts
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { User } from './user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }

  /**
   * Called before entity update.
   */
  beforeUpdate(event: UpdateEvent<any>) {
    console.log(`BEFORE ENTITY UPDATED: `, event.entity);
  }
}
```

```ts [user.module.ts]
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Photo } from './photo.entity';
import { UserSubscriber } from './user.subscriber';
@Module({
  imports: [TypeOrmModule.forFeature([User, Photo])],
  controllers: [UserController],
  providers: [UserService, UserSubscriber], // [!code highlight]
})
export class UserModule {}
```

:::

使用 [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) 插件，测试结果如图。

![image](./images/typeorm-subscripter.png)
