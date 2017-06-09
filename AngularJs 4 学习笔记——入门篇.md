# AngularJs 4 学习笔记——入门篇

[TOC]

## 一、环境搭建

1、首先需要安装 NPM ,建议[Node.js官网](https://nodejs.org/en/)下载 node.js  安装包，安装完成后命令行工具输入：node -v   npm -v 查看是否安装成功。

2、身在神奇的国度，使用npm过程中难免会出现有些包下不下来，所以建议使用NPM淘宝镜像.

​	你可以使用 [cnpm](https://github.com/cnpm/cnpm) (gzip 压缩支持) 命令行工具代替默认的 `npm`:

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

3、安装 Angular-CLI

```
cnpm i -g angular-cli
ng --version
```

## 二、我的第一个项目

​	在上面，我们已经成功的安装了 angular-cli ,使用它可以帮我们迅速的构建一个最小项目。以下就是命令：

```
ng new myProject1
//这个时候angular-cli会帮我们下载用到的包，当然npm很慢我们可以 ctrl+c 终止下载，然后切换到项目目录下使用淘宝提供的镜像来下载。
cnpm install
ng server  		//启动项目   当然，也可以指定端口  ng server --port ****
```

现在你就可以通过浏览器访问你的第一个 Angular 项目了。

## 三、AngularJs 组件

​	在这里先推荐下Google Angular developers PM，大漠穷秋老师的Angular教学视频：http://i.youku.com/i/UMzI1MjQ0MDgw/videos?spm=a2hzp.8244740.0.0

​	课件：http://git.oschina.net/mumu-osc/NiceFish/attach_files

​	NiceFish：http://git.oschina.net/mumu-osc/NiceFish

### 1、Component

​	**Component组件**负责控制屏幕上的一小块区域，我们称之为**视图**。

​	Component包含渲染视图的 html 、css、ts构成

```
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-add',									//css 选择器，也就是父级 html 中的标签
  templateUrl: './add.component.html',						 //组件 html 地址
  styleUrls: ['./add.component.scss']						 //组件专用的样式
})
export class UserAddComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }
}
```

### 2、NgModule

​	Angular 应用是模块化的，并且 Angular 有自己的模块系统，它被称为 **Angular 模块**或 **NgModules**。

```
NgModule是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：
	declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
	exports - declarations 的子集，可用于其它模块的组件模板。
	imports - 本模块声明的组件模板需要的类所在的其它模块。
	providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
	bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
```

下面十一个简单的Ngmodel示例

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//注意：AppComponent的export语句只是用于演示如何导出的，它在这个例子中并不是必须的。根模块不需要导出任何东西，因为其它组件不需要导入根模块。
```

关于NGModule 官方有十万个为什么可以解答你几乎所有的问题：https://angular.cn/docs/ts/latest/cookbook/ngmodule-faq.html

### 3、Route

​	做一个单页面应用，路由是必不可少的功能，也是 Angular 三大核心之一，可见他的重要性。

​	下面是一个简单的路由，包含Angular 路由的两种方式，**直接加载**与**动态加载**。

1) 创建Route 文件

```
import { RouterModule } from '@angular/router';					//引入Angular路由服务

import { AppComponent } from './app.component';	
import { SitestatComponent } from './sitestat/sitestat.component';	//直接加载须 import 对应的 Component


export const appRoutes=[
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  },{
    path:'posts',
    component:SitestatComponent						//直接加载的方式
  },{
    path:'user',
    loadChildren:'./user/user.module#UserModule'	//动态加载的方式，访问 user 时候，再去请求对应Model
  }
];

```

​	**直接加载**：就是说 Angular 在打包的时候，会把需要马上加在的组件打包在一个 js 文件中，访问首页或者父级就会请求这个JS可以直接使用的。

​	**动态加载**：与直接加载不同，只有在我请求了对应的路由，才会去请求对应的 js 文件。

2）路由出口

​	也就是路由指向的具体Component页面展示的地址，需要在页面引入 <router-outlet></router-outlet> 标签。

3）配置

​	需要在对应的NgModel 中 import 路由文件。

```
import {appRoutes} from './app.routes';

...
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // other imports here
  ],
  ...
```

### 4、管道

​	管道——可以在模板中转换显示的内容。把数据作为输入，然后转换它，给出期望的输出。 

​	Angular 内置了以下管道：	

- [AsyncPipe](https://angular.cn/docs/ts/latest/api/common/index/AsyncPipe-pipe.html)
- [CurrencyPipe](https://angular.cn/docs/ts/latest/api/common/index/CurrencyPipe-pipe.html)
- [DatePipe](https://angular.cn/docs/ts/latest/api/common/index/DatePipe-pipe.html)
- [DecimalPipe](https://angular.cn/docs/ts/latest/api/common/index/DecimalPipe-pipe.html)
- [I18nPluralPipe](https://angular.cn/docs/ts/latest/api/common/index/I18nPluralPipe-pipe.html)
- [I18nSelectPipe](https://angular.cn/docs/ts/latest/api/common/index/I18nSelectPipe-pipe.html)
- [JsonPipe](https://angular.cn/docs/ts/latest/api/common/index/JsonPipe-pipe.html)
- [LowerCasePipe](https://angular.cn/docs/ts/latest/api/common/index/LowerCasePipe-pipe.html)
- [PercentPipe](https://angular.cn/docs/ts/latest/api/common/index/PercentPipe-pipe.html)
- [SlicePipe](https://angular.cn/docs/ts/latest/api/common/index/SlicePipe-pipe.html)
- [TitleCasePipe](https://angular.cn/docs/ts/latest/api/common/index/TitleCasePipe-pipe.html)
- [UpperCasePipe](https://angular.cn/docs/ts/latest/api/common/index/UpperCasePipe-pipe.html)

当然，这些都是很常规的数据转换，有时候因为业务需要，我们需要自己写一些管道来完成我们的需求

下面我们就根据一个例子来说明下怎么自己做一个管道出来：

```
import {Pipe, PipeTransform} from '@angular/core';			//首先我们需要引入两个管道的核心对象

@Pipe({
	name: 'boolean'										//声明html 中使用的名字
})

export class BooleanPipe implements PipeTransform { 
	constructor() {}
	
	transform(flag: string): string { 						//数据转换方法
		return flag==="true" ? "text-danger":"";
	}
}
```


### 5、国际化

实现步骤：

1、导入 model

```
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
```

2、加载静态文件

```
//加载国际化静态文件
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

注：Http 是angular 内置的，在 @angular/http 中
    ./assets/i18n  为国际化静态文件
    .json		  文件格式 
```

3、配置国际化

```
在 NgModel 中  import 这段代码：
@NgModule({
    imports: [
      .......
      
      //国际化
      TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }),
      .......
    ],
   .........
})
```

4、使用它

```
{{'userRegister.email' | translate}}
```

