


    
    
    //书写代码
    //轮播图运动框加
    function move(eleNode,target,attr){
        var g = getComputedStyle;
        clearInterval(eleNode.timer);
        eleNode.timer = setInterval(function(){
              var iNow = attr === "opacity" ? g(eleNode)[attr] * 100 : parseInt(g(eleNode)[attr]);
              var speed = (target - iNow) / 8;
              speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
              iNow += speed;
              eleNode.style[attr] = attr === "opacity" ?  iNow / 100 : iNow + "px";
              // 单if 不带 return的这样的情况都可以简写成三目运算符;
              iNow === target ? clearInterval(eleNode.timer) : "";
        },50)
    }

    //轮播图
    class Banner{
        constructor() {
            
        }
        //初始化
        init(){
            this.prev_btn  = document.querySelector(".prev_btn")
            this.next_btn  = document.querySelector(".next_btn")
            this.banner_ul = document.querySelector("#banner_ul")
            this.imgList   = document.querySelectorAll("#banner_ul>img")
            this.spanList  = document.querySelectorAll(".tab_ctrl>span")
            this.tabList   = document.querySelectorAll(".tab_ctrl>div>span")
            this.banner_ul.style.width =  this.imgList.length*1200+"px";
            this.count     = 0;
            this.timer     = null;
            this.bindEvent();
            this.setInterval();
        }
        //绑定事件
        bindEvent(){
            this.prev_btn.addEventListener("click",this.toPrev.bind(this));           
            this.next_btn.addEventListener("click",this.toNext.bind(this));
            
            this.prev_btn.addEventListener("mouseover",this.stopMove.bind(this));
            this.next_btn.addEventListener("mouseover",this.stopMove.bind(this))
           
            this.prev_btn.addEventListener("mouseout",this.setInterval.bind(this));
            this.next_btn.addEventListener("mouseout",this.setInterval.bind(this))
           
            this.banner_ul.addEventListener("mouseenter",this.showBtn.bind(this))
            this.banner_ul.addEventListener("mouseleave",this.hideBtn.bind(this))
        
            for(let i = 0 ; i < this.tabList.length ; i++ ){
                this.tabList[i].addEventListener("mouseover",this.Tab.bind(this,i))
                this.tabList[i].addEventListener("mouseout",this. setInterval.bind(this,i))

            }
        }

        Tab(i){
            this.stopMove();
            this.count = i ;
            this.animate();
            for(let i = 0 ; i < this.tabList.length ; i++){
                this.tabList[i].style.cssText= "background:#D0CECE;box-shadow:0 0 0px #fff";
            }
            this.tabList[this.count === this.imgList.length-2? 0 : this.count].style.cssText= "background:#fff;box-shadow:0 0 5px #fff";

        }
        //下一张
        toNext(){
            if(this.count === this.imgList.length-1){
                this.banner_ul.style.left = 0;
                this.count = 1;
            }else{
                this.count++;
            }
            this.animate();
            for(let i = 0 ; i < this.tabList.length ; i++){
                this.tabList[i].style.cssText= "background:#D0CECE;box-shadow:0 0 0px #fff";
            }
            
            
            this.tabList[this.count===(this.imgList.length-1)? 0 : this.count].style.cssText= "background:#fff;box-shadow:0 0 5px #fff";
        }
        //上一张
        toPrev(){            
            if(this.count === 0){
                this.banner_ul.style.left = -1200*(this.imgList.length-1)+"px";
                this.count = this.imgList.length - 2;
            }else{
                this.count --;
            }
            this.animate()
            for(let i = 0 ; i < this.tabList.length ; i++){
                this.tabList[i].style.cssText= "background:#D0CECE;box-shadow:0 0 0px #fff";
            }
            console.log(this.count);
            
            this.tabList[this.count===(this.imgList.length-1)? 0 : this.count].style.cssText= "background:#fff;box-shadow:0 0 5px #fff";
        }
        //动画模块调用
        animate(){
            move(this.banner_ul,-1200 * this.count,"left");
        }
        //开启定时器轮播
        setInterval(){
            this.timer = setInterval(()=>{
                this.toNext();
            },3000)
            this.prev_btn.style.display = "none";
            this.next_btn.style.display = "none";
        }
        //停止定时器轮播
        stopMove(){
            clearInterval(this.timer);
            this.prev_btn.style.display = "block";
            this.next_btn.style.display = "block";
        }
        //显示btn
        showBtn(){
            this.prev_btn.style.display = "block";
            this.next_btn.style.display = "block";
        }
        //隐藏btn
        hideBtn(){
            this.prev_btn.style.display = "none";
            this.next_btn.style.display = "none";
        }

    }
    
    var banner = new Banner;
    banner.init();

    //侧边栏sidebar部分

    //加上position-top值
    for(let i = 0 ; i < $(".sidebar>li>div").length ; i++){
        $(".sidebar>li>div").eq(i).css({top: -i*56-16+"px"})
    }
    //空调
    $(".midea_airConditioner").on("mouseover",()=>{
        $(".sidebar_item1").css({display:"block"})
    })
    $(".midea_airConditioner").on("mouseout",()=>{
        $(".sidebar_item1").css({display:"none"})
    })
    //冰箱
    $(".midea_refrigerator").on("mouseover",()=>{
        $(".sidebar_item2").css({display:"block"})
    })
    $(".midea_refrigerator").on("mouseout",()=>{
        $(".sidebar_item2").css({display:"none"})
    })
    //洗衣机
    $(".midea_washer").on("mouseover",()=>{
        $(".sidebar_item3").css({display:"block"})
    })
    $(".midea_washer").on("mouseout",()=>{
        $(".sidebar_item3").css({display:"none"})
    })
    //厨房大电
    $(".midea_big_kitchen").on("mouseover",()=>{
        $(".sidebar_item5").css({display:"block"})
    })
    $(".midea_big_kitchen").on("mouseout",()=>{
        $(".sidebar_item5").css({display:"none"})
    })
    //热水器
    $(".midea_water_heater").on("mouseover",()=>{
        $(".sidebar_item7").css({display:"block"})
    })
    $(".midea_water_heater").on("mouseout",()=>{
        $(".sidebar_item7").css({display:"none"})
    })
    // 厨房小电
    $(".midea_small_kitchen").on("mouseover",()=>{
        $(".sidebar_item4").css({display:"block"})
    })
    $(".midea_small_kitchen").on("mouseout",()=>{
        $(".sidebar_item4").css({display:"none"})
    })
    // 生活家电
    $(".midea_home").on("mouseover",()=>{
        $(".sidebar_item6").css({display:"block"})
    })
    $(".midea_home").on("mouseout",()=>{
        $(".sidebar_item6").css({display:"none"})
    })
    //周边服务
    $(".midea_parts").on("mouseover",()=>{
        $(".sidebar_item8").css({display:"block"})
    })
    $(".midea_parts").on("mouseout",()=>{
        $(".sidebar_item8").css({display:"none"})
    })

    $(".sidebar>li>div").css({
        boxShadow:"0 0 5px #ddd",
      
    })

    
