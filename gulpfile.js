// 模块加载区域;

const gulp = require("gulp");
const connect = require("gulp-connect");
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

const {
            scripts,
            scss : scssJSON,
            proxyList
      } = require("./conf/index")


const {     mergeMyScripts,
            mergeMyScss,
            watchScripts,
            watchScss,
            gpProxy
      } = require("./utils/index")

let   [scriptsTaskArray,scssTaskArray] = [];


// 功能定义区

/**
 * @function init 初始化功能 , 编列了scripts路径还有创建了 scripts 指令;
 * @function watchScripts 根据scripts对象实现的 watch 监听封装
 * 
 */
function init(){
      //将conf中的scripts下的路径中的js文件合并，并复制到dev的scripts
      scriptsTaskArray = mergeMyScripts(scripts,"scripts-");
      //将conf中的scss的路径中的scss文件合并，并复制到dev的stylesheets
      scssTaskArray = mergeMyScss(scssJSON,"scss-");
}


//指令定义区

/**
 * @task html :  转存html
 * @task connect : 服务器配置
 * @task watch : 监听
 * @task default : 自动开启环境
 * 
 */

//html指令 将src下的所有html文件传到dev文件夹中，并且服务监听
gulp.task("html",()=>{
      return gulp.src(["./src/*.html"]).pipe(gulp.dest("./dev")).pipe(connect.reload());
})

gulp.task("connect",()=>{
      connect.server({
            //服务器根目录
            root: 'dev',
            port:8888,
            //是否开启即时刷新
            livereload: true,
            //
            
            middleware:function(connect, opt){
                  return gpProxy(proxyList);
            }
      });
})

gulp.task("watch",()=>{
      gulp.watch("./src/*.html",["html"]);
      gulp.watch("./src/scss/index/*.scss",["scss"])
      gulp.watch("./src/scripts/modules/**/*.js",["modules"])
      gulp.watch("./src/scripts/libs/*.js",["libs"])
      gulp.watch("./src/images/**.*",["images"])
      gulp.watch("./src/PHP/*.php",["PHP"])

      //开启scripts下js代码的监视
      watchScripts(scripts,"scripts-");
      //开启scss下scss代码的监视
      watchScss(scssJSON,"scss-");
})
//上传images中的文件到dev的images
gulp.task("images",()=>{
      return gulp.src('./src/images/**/*')
            .pipe(gulp.dest('dev/images'))
})

gulp.task("libs",()=>{
      return gulp.src('./src/scripts/libs/*.js')
            .pipe(gulp.dest('dev/scripts/libs'))
            .pipe(connect.reload())
})
gulp.task("login",()=>{
      return gulp.src('./src/scripts/login/*.js')
            .pipe(gulp.dest('dev/scripts/libs'))
            .pipe(connect.reload())
})
gulp.task("PHP",()=>{
      return gulp.src('./src/PHP/*.php')
            .pipe(gulp.dest('dev/PHP'))
            .pipe(connect.reload())
})

init();

//将src/srcripts路径下的js绑定的指令统一归scripts调用
gulp.task("scripts",scriptsTaskArray)
gulp.task('scss', scssTaskArray);

gulp.task("gulp-dev",["html","scripts","scss","images","connect","watch","libs","PHP"]);


// fs模块的帮助 => 取出文件夹下所有文件的名称;

// 初始化整个配置文件;

require("./build");





