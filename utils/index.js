const fs = require("fs");
/**
 * path.join():方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
例如：path.join('foo', 'baz', 'bar'); // 返回 'foo/baz/bar'
注：如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录。
 */
let join = require('path').join;
const gulp = require("gulp");
//创建本地服务器
const connect = require("gulp-connect");
//将多个文件进行合并
const concat = require("gulp-concat");
//一个强大的css扩展编译器
var sass = require('gulp-sass');
//node-sass 把 sass编译成css
sass.compiler = require('node-sass');
//压缩js代码
var uglify = require('gulp-uglify');
//压缩css代码
let cleanCSS = require('gulp-clean-css');
//将js代码编译为es5规范
const babel = require("gulp-babel");
//实现代理的
const proxy = require('http-proxy-middleware')



function watchScripts(json, prefix) {
    for (let attr in json) {
        gulp.watch(json[attr].src + "*.js", [prefix + attr]);
    }
}

function watchScss(json, prefix) {
    for (let attr in json) {
        gulp.watch(json[attr].src + "*.scss", [prefix + attr])
    }
}
//@function mergeMyScripts 根据scripts 对象实现的scripts指令拆分,文件合并
function mergeMyScripts(json, prefix = "scripts-", mode = "dev") {
    let scriptsTaskArray = [];
    //此处for循环内要用let不然就要使用闭包环境
    for (let attr in json) {
        scriptsTaskArray.push(prefix + attr)
        if (mode === "dev") {
            devScriptsMode(json, prefix, mode, attr)
        } else if (mode === "build") {
            buildScriptsMode(json, prefix, mode, attr)
        }
    }
    return scriptsTaskArray;
}
// scripts 开发环境下配置
function devScriptsMode(json, prefix, mode, attr) {
    gulp.task(prefix + attr, () => {
        return gulp.src([json[attr].src + "*.js"])
            .pipe(concat(attr + ".js"))
            .pipe(gulp.dest("./" + mode + "/scripts"))
            .pipe(connect.reload())
    })
}
// scripts 构建环境下配置;
function buildScriptsMode(json, prefix, mode, attr) {
    gulp.task(prefix + attr, () => {
        return gulp.src([json[attr].src + "*.js"])
            .pipe(concat(attr + ".js"))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest("./dist/scripts"))
    })
}

function mergeMyScss(json, prefix = "scss-", mode = "dev") {
    let scssTaskArray = [];
    for (let attr in json) {
        scssTaskArray.push(prefix + attr);
        if (mode === "dev") {
            devScssMode(json, prefix, mode, attr)
        } else if (mode === "build") {
            buildScssMode(json, prefix, mode, attr)
        }
    }
    return scssTaskArray;
}

// scss 开发配置
function devScssMode(json, prefix, mode, attr) {
    gulp.task(prefix + attr, () => {
        return gulp.src(json[attr].src + "*.+(scss|sass)")
            .pipe(concat(attr + ".scss"))
            .pipe(sass().on("error",sass.logError))
            .pipe(gulp.dest("./" + mode + "/stylesheets"))
            .pipe(connect.reload())
    })
}
// scss build配置
function buildScssMode(json, prefix, mode, attr) {
    gulp.task(prefix + attr, () => {
        return gulp.src(json[attr].src + "*.+(scss|sass)")
            .pipe(concat(attr + ".scss"))
            //将scss编码为css
            .pipe(sass())
            .pipe(cleanCSS({ debug: true }, (details) => {
                console.log(`${details.name}: ${details.stats.originalSize}`);
                console.log(`${details.name}: ${details.stats.minifiedSize}`);
            }))
            .pipe(gulp.dest("./dist/stylesheets"))
    })
}

function gpProxy(proxyList){
    let result = [];
    for(let attr in proxyList) {
          let options = {
                //代理服务器路径
                target : proxyList[attr].url,
                //是否重写路径
                changeOrigin : true ,
                //是否重写路径
                pathRewrite : !proxyList[attr].rewrite ? {
                      ["^"+attr] : ""
                } : {}
          };
          result.push( proxy( attr , options) )
    }
   return result;
}

//读取文件路径功能;未用到
function findSync(startPath) {
    let result = [];
    function finder(path) {
        let files = fs.readdirSync(path);
        files.forEach((val, index) => {
            let fPath = join(path, val);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) finder(fPath);
            if (stats.isFile()) result.push(fPath);
        });

    }
    finder(startPath);
    return result;
}

module.exports = {
    findSync,
    watchScripts,
    watchScss,
    mergeMyScripts,
    mergeMyScss,
    gpProxy,
}