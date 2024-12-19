

# 美的官方商城

#### 介绍
pc开发脚手架

#### 软件架构

基于nodejs,gulp 一套PC端工程化开发环境。

```javascripts
      {
            "name": "project",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                  "start": "./node_modules/.bin/gulp gulp-dev",
                  "build": "./node_modules/.bin/gulp build"
            },
            "keywords": [],
            "author": "",
            "license": "ISC",
            "devDependencies": {
                  "@babel/core": "^7.4.4",
                  "@babel/preset-env": "^7.4.4",
                  "gulp": "^3.9.1",
                  "gulp-babel": "^8.0.0",
                  "gulp-clean-css": "^4.2.0",
                  "gulp-concat": "^2.6.1",
                  "gulp-connect": "^5.7.0",
                  "gulp-imagemin": "^5.0.3",
                  "gulp-sass": "^4.0.2",
                  "gulp-uglify": "^3.0.2",
                  "http-proxy-middleware": "^0.19.1",
                  "node-sass": "^4.12.0"
            }
      }

```


#### 安装教程

1.npm install

#### 使用说明

1. 建立目录结构，在conf问价夹下的json之中配置自己的开发路径

项目路径配置示例

```javascript

    scripts : {
            "index" : {
                  src : "./src/scripts/index/"
            },
            "login" : {
                  src : "./src/scripts/login/"
            }
        	"listPage":{
                  src : "./src/scripts/listPage/"
            },
            "commodityDetails":{
                  src : "./src/scripts/commodityDetails/"
            },
            "carts":{
                  src : "./src/scripts/carts/"
            },
            "active":{
                  src : "./src/scripts/active/"
            }
      },
      scss : {
            "index" :{
                  src : "./src/scss/index/"
            },
            "login" :{
                  src : "./src/scss/login/"
            }，
             "listPage":{
                  src : "./src/scss/listPage/"
            },
            "commodityDetails":{
                  src : "./src/scss/commodityDetails/"
            },
            "carts":{
                  src : "./src/scss/carts/"
            },
            "active":{
                  src : "./src/scss/active/"
            }
      }
	
	 proxyList : {
            "/pxx" : {
                  url:"https://apiv2.pinduoduo.com/spike_list"
            },
           
      }


```


2. 每一个开发模块都是一个独立的文件夹文件夹结构如下 

  ```js
    --|1996
      --|conf
        --|index.js
      --|dist
        --|images
        --|scripts
          --|libs
            --|distpicker.data.min.js
            --|distpicker.min.js
            --|jquery.js
            --|jquery.lazload.min.js		懒加载插件【未使用】
            --|jquery.pagination.js         分页样式插件
          --|carts.js						购物车js
          --|commondityDetails.js			详情页js
          --|index.js						首页js
          --|listPage.js					商品列表页js
          --|login.js						登录页js
        --|stylesheets
          --|carts.css						购物车css样式
          --|commondityDetails.css			详情页css样式
          --|index.css						首页css样式
          --|listPage.css					商品列表页css样式
          --|login.css						登陆注册页面css样式
        --|carts.html						购物车html
        --|commodityDetails.html			详情页html
        --|index.html						首页html
        --|listPage.html					商品列表html
        --|login.html						登陆页面html
         --|src								//开发者目录
         --|utils							//开发者配置文件
     
   
  ```

   

3. npm run bulid 打包,打包之后所有的文件都是独立的例如 index.xxx.js ,index.xxx.js 等n个js会合并为一个index.js ， 这个命名是根据config里面的json的key值命名的


4. 服务器代理配置 

配置时 proxyList 为核心配置对象 ,对象之中的key 为代理名称 我们输入  localhost:8080**key**即可发送代理请求,代理请求不能用浏览器直接访问，需要用内置方法去进行请求及测试。

```javascript
      proxyList : {
            "/pxx" : {
                  url : "https://apiv2.pinduoduo.com/spike_list",
                  e
            }            
      }
```


#### 参与贡献

anthor：WLP

*contributor*  ：GPJ ZYX JW XX

**重要提示**：由于使用了反向代理，gitee上无法加载数据，如需要观看详情页，列表页以及购物车页，请下载到本     地运行

**nav使用指南** :

![使用参考图片](https://upload-images.jianshu.io/upload_images/17573670-f1fd4747306ec456.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)



**列表页使用指南**

![图片参考](https://upload-images.jianshu.io/upload_images/17573670-de1236d3740cf797.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

购物车页面功能比较齐全，除了收藏夹没实现，其他基本实现

详情页 图片不要在意  pxx没有图片 但你加入购物车的的东西还是pxx的东西  数量也可以不用加减  直接输入