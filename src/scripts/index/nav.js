
(function(){
       $(".nav_search").on("mouseenter",function(){
              $(".nav_search>span").css({display:"none"}  );
              $("#search , .nav_search>i").css({display:"inline-block"});
              $("#search ").focus();
              $('#search ').animate({
               'width' : '205px',
              })
              $('.nav_search>i').animate({
                   'left' : '-385px',
               })   
              })
            
              $(document).on("click",function(){
               
               //搜索框的移动
               if( $('#search ').css("display")=="block"){
                     $('.nav_search>i').animate({
                            'left' : '0px',
                      })  
                      $('#search ').animate({
                            'width' : '0px',
                      })
                      .queue(function(next){
                         $("#search, .nav_search>i").css({ display:"none"})
                         $(".nav_search>span").css({display:"inline-block"})   
                         next()  
                      });
                      //放大镜的移动
                      
                     
               }
               
           });
            //二维码的显示与隐藏 
            
            $(".nav_phone").on("mouseover",()=>{
                   $(".nav_phone>div>img").css({display:"block"});
            }) 
           
            $(".nav_phone").on("mouseout",()=>{
                   $(".nav_phone>div>img").css({display:"none"});
            }) 
            
            //购物车显示与隐藏
            
            $(".nav_carts").on("mouseover",()=>{
                   $(".nav_carts .carts").css({display:"block"});
            }) 
            
            $(".nav_carts").on("mouseout",()=>{
                   $(".nav_carts .carts").css({display:"none"});
            }) 
           
           //登录按钮下拉菜单显示隐藏
           $(".nav_longin").on("mouseover",()=>{
               $(".login_DownMenu").css({display:"block"});
            }) 
            $(".nav_longin").on("mouseout",()=>{
               $(".login_DownMenu").css({display:"none"});
            }) 

            try {
                   
                var user = JSON.parse(localStorage.getItem("user"))  
                console.log(user)
                if(user){
                       $(".nav_longin .denglu").html("<div>你好！</div><div>"+user.user+"</div>")

                } 
            } catch (error) {
                   
            }

            //点击注销用户
            $(".nav_longin").on("click",".out_login",function(){
                 localStorage.removeItem("user")
                 location.reload();
            })
})()      
      
