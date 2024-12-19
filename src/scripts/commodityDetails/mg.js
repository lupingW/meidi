
;;(function(){
    
  
    //划到图片显示放大镜
    
   
    //放大功能
    class Magifier{
        constructor(){

        }

        init(){
            this.leftBox       = $(".showcase");
            this.clipBox       = $("#detailPic");
            this.product_left  = $(".product_left");
            this.zoomPic       = $("#zoomPic");
            this.zoomPicFather = $(".zoom_pic");
            this.magnification = $(".showcase")[0].offsetWidth/$("#detailPic")[0].offsetWidth;
            this.zoomPic.css({"width":this.magnification*this.zoomPicFather[0].offsetWidth,
                              "height":this.magnification*this.zoomPicFather[0].offsetHeight})
            this.binEvent()
        }

        binEvent(){
            this.leftBox .on("mouseenter",this.showImg.bind(this));
            this.leftBox .on("mouseleave",this.hideImg.bind(this));
            this.leftBox .on("mousemove",this.follow.bind(this));
            $("#thumbnails>li").on("mousemove",function(){
                //放大镜选项卡功能
                $("#thumbnails>li").removeClass("cur");
                $(this).addClass("cur");
                var data_t = $(this).children().attr("data-t");
                $("#showcase").attr({"src":data_t});
                var data_b = $(this).children().attr("data-b");
                $("#zoomPic").attr({"src":data_b});
            });
        }

        follow(e){
            let { clientX , clientY } = e ;            
            let nLeft = clientX 
                        -this.leftBox[0].offsetLeft
                        -this.product_left[0].offsetLeft
                        -this.clipBox[0].offsetWidth/2
                        +document.documentElement.scrollLeft;;
            let nTop  = clientY 
                        -this.leftBox[0].offsetTop
                        -this.product_left[0].offsetTop
                        -this.clipBox[0].offsetHeight/2 
                        +document.documentElement.scrollTop;
            let lmax  = this.leftBox[0].offsetWidth
                        -this.clipBox[0].offsetWidth;
            let tmax  = this.leftBox[0].offsetHeight
                        -this.clipBox[0].offsetHeight;
                nLeft = nLeft < 0 ? 0 : nLeft;
                nLeft = nLeft > lmax ? lmax : nLeft;
                nTop  = nTop < 0 ? 0 : nTop ;
                nTop  = nTop > tmax ? tmax : nTop ;
               
            this.clipBox.css({"top":nTop ,"left":nLeft})
            this.zoomPic.css({"top":-nTop/tmax*(1190-500),"left":-nLeft/lmax*(1190-500),"position":"absolute"})
        }

        showImg(){
            $(".zoom_pic").css({"display":"block"})
            $(".detail_pic").css({"display":"block"})
        }

        hideImg(){
            $(".zoom_pic").css({"display":"none"})
            $(".detail_pic").css({"display":"none"})
        }
    }
    
    var magifier =new Magifier();
    magifier.init();
  

})();