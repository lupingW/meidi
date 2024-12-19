
module.exports = {
      scripts : {
            "index" : {
                  src : "./src/scripts/index/"
            },
            "login" : {
                  src : "./src/scripts/login/"
            },
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
            },
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
      },
      // 服务器代理配置;
      proxyList : {
            "/pxx" : {
                  // url : "https://apiv2.pinduoduo.com/api/fiora/subject/goods/",
                  // 默认重写路径
                  // rewrite : true
                  url:"https://apiv2.pinduoduo.com/spike_list"
            },
           
      }
}