;;(function(){
    //吸顶介绍菜单
    $(()=>{
        var tabs_nav_wrap = $(".tabs_nav_wrap");
        var nTop          = tabs_nav_wrap.offset();
            nTop          = nTop.top      ;     
        $(document).on("scroll",()=>{
             var documentTop = $(document).scrollTop();
             // console.log(nTop,documentTop)
             if(documentTop>=nTop){
                $(".tabs_nav_inner_wrap").addClass(" tabs_nav_fixed")
                $(".tabs_nav_right").css({ "display" : "block" });
                $(".tabs_nav_left").css({ "display" : "block" });
            }
             if(documentTop<nTop){
                $(".tabs_nav_inner_wrap").removeClass(" tabs_nav_fixed")
                $(".tabs_nav_right").css({ "display" : "none" });
                $(".tabs_nav_left").css({ "display" : "none" });
            }
        })
    })
    //懒加载

    function lazyload(selector){
    var imgList = document.querySelectorAll(selector);
        var itemArray = Array.from(imgList).map(item => {
            return {
                img:item,
                //相对定位太多  以后要注意
                top : item.offsetTop,
                src : item.getAttribute("data-src")
            }
    })
    load(itemArray);
    window.addEventListener("scroll",load.bind(null,itemArray));
    }
    //懒加载第二步
    function load(itemArray){
    if(timer !== null) return ;
    timer = setTimeout( () => {       
            //比对;               
            var min =  document.documentElement.clientHeight +  document.documentElement.scrollTop;
            //  console.log( document.documentElement.clientHeight);
            //  console.log(document.body.scrollTop||document.documentElement.scrollTop )
            // console.log(itemArray)
            itemArray.forEach( item => {
                //console.log(min>item.top)
                if(item.top < min){
                        item.img.src = item.src;
                }
            })
            timer = null;
    },500)
    }
    var timer = null;
    lazyload(".img_list")
    //划入显示二维码
    $(".detail_sprite_detail_floating_wxcode").on("mouseover",()=>{
        $("#floating_wxcode_content").show();
    })
    $(".detail_sprite_detail_floating_wxcode").on("mouseout",()=>{
        $("#floating_wxcode_content").hide();
    })
    //客服 背景跳动
    function donghua(){
        $(".detail_sprite_detail_floating_qq").animate({
            marginTop:+2
        })
        .delay(2000)
        .animate({
            marginTop:-2
        })
    };
    var time=setInterval(donghua,1000);
   
    $(".detail_sprite_detail_floating_qq").on("mouseenter",()=>{
        $(".detail_sprite_detail_floating_qq").stop(true,true)
        clearInterval(time)
    })

    $(".detail_sprite_detail_floating_qq").on("mouseleave",()=>{
         time = setInterval(donghua,1000);
    })
    
    //返回顶部
    $(".detail_sprite_detail_floating_top").click(()=>{
        $("html").animate( {scrollTop: 0}, 500);
        // document.documentElement.scrollTop = 0;
        // window.scrollTo(0,0)
    })
   
})();