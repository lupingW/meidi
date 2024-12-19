
;;(function($){

    function Render(){

    }
    //初始化数据
    Render.prototype.init = function(){
        //请求回来的数据
        this.GLOBAL_DATA  =  null;
        //数据条数
        this.GLOBAL_TOTAL =  0;
        //一页显示多少个
        this.showCount    =  12;
        //页码
        this.pageCount    =  1;
        //商品数据
        this.goodsList    =  null;
        //定时器
        this.timer        =  null;
        //
        this.page_total   =  0;
        this.btnList      =  [];
        this.next         =  document.querySelector("#next");
        this.prev         =  document.querySelector("#prev");
        this.goodsListEle =  document.querySelector("#render_goods");
        this.fetch();
    }
    //ajax请求
    Render.prototype.fetch = function(){
        fetch('/pxx',{
            page:1,
            size:100
        })
        .then(res=>{           
            return res.json();
        })
        .then(res=>{
           localStorage.setItem( "pxx",JSON.stringify(res) )
           this.renderPage(res)  
           this.renderPageBtn();
           this.bindEvent();                   
        })
    }
    //绑定事件
    Render.prototype.bindEvent = function(){
        this.next.addEventListener("click",this.nextPage.bind(this));
        this.prev.addEventListener("click",this.prevPage.bind(this));
        this.btnList.forEach( (ele,index) => {
            ele.addEventListener("click",this.toPage.bind(this,index+1))
        })
        this.next.parentNode.addEventListener("click",this.reRender.bind(this))

    }
    //渲染页面
    Render.prototype.renderPage = function(res){
      if(this.GLOBAL_DATA === null){
            this.GLOBAL_DATA = res;
      }
      this.goodsList = this.GLOBAL_DATA.goods;
      this.GLOBAL_TOTAL = this.goodsList.length;
      $(".cate_cell_fl").html("共"+this.GLOBAL_TOTAL+"件商品")
      let html = "";
      for(var i = this.showCount *( this.pageCount - 1) ; i <= this.showCount * this.pageCount - 1 ; ){
            item  = this.goodsList[i++] ;
            if(!item) break;
            html +=  `<li class="hproduct" data-id=${item.goods_id} data-img=${item.hd_thumb_url}>
                          <div class="sku_tag sku_tag_important">限时特惠</div>
                          <a href="./commodityDetails.html" class="category_cover" target="_blank" data-id=${item.goods_id}>
                                  <img class="img_list" src="./images/0 (100).jpg"  data-src=${item.hd_thumb_url}
                                      alt="${item.short_name}"
                                      width="240" height="240"
                                      >
                          </a>
                          <div class="ft_message">
                                  <div class="price_new">
                                      <span class="price">¥<em>${(item.normal_price/100).toFixed(2)}</em></span>
                                  </div>
                                  <div class="right_tip ">
                                          <span>评价<em>${item.sold_quantity}</em></span>
                                  </div>
                          </div>
                          <a href="./commodityDetails.html" class="fn" target="_blank" data-id=${item.goods_id}>
                              
                                  ${item.goods_name}           
                          </a>
                          <div class="sell_point">${item.short_name}</div>
                      
                          <div class="act_tag">
                              <div class="self_tag">自营</div>
                              <div class="icon_coupon icon_coupon_3">
                                  <span class="text" id="text"> ${item.coupon} </span> 
                              </div>
                          </div>

                          <div class="item_compare">
                              <div class="cart js_add_to_cart" 
                              data-click="0" data_id=${item.goods_id} 
                              data_price=${item.normal_price/100}>
                                  <i class="cart_icon common_cart_icon"></i>
                                  <span>购物车</span>
                              </div>
                              
                              <div class="compare  js_compare_icon" data-category="30" data-sku="1000000000100511206101">
                                  <i class="compare_icon"></i>
                                  <span>对比</span>
                              </div>
                          </div>
                      
                      </li>      `
      }
      this.goodsListEle.innerHTML=html;
      this.lazyload(".img_list");
      this.zhezhaoceng();
    }
    //加载完绑定遮罩层
    Render.prototype.zhezhaoceng = function(){
        $(".js_add_to_cart").on("click",()=>{
            $(".zhezhaoceng").addClass("show");
            $(".mod_layer").addClass("show");
        })

        $(".J_close_text").on("click",()=>{
            $(".zhezhaoceng").removeClass("show");
            $(".mod_layer").removeClass("show");
        })

        $(".close_ico").on("click",()=>{
            $(".zhezhaoceng").removeClass("show");
            $(".mod_layer").removeClass("show");
        })
    }

    //懒加载第一步
    Render.prototype.lazyload   = function(selector){
        var imgList = document.querySelectorAll(selector);
            var itemArray = Array.from(imgList).map(item => {
                return {
                    img:item,
                    top : item.offsetTop+item.parentNode.offsetTop+item.parentNode.parentNode.offsetTop,
                    src : item.getAttribute("data-src")
                }
        })
        this.load(itemArray);
        // window.addEventListener("scroll",this.load.bind(this,itemArray));
        window.onscroll = this.load.bind(this,itemArray)
    }
    //懒加载第二步
    Render.prototype.load = function(itemArray){
        if(this.timer !== null) return ;
        this.timer = setTimeout( () => {                   
                var min =  document.documentElement.clientHeight + (document.body.scrollTop || document.documentElement.scrollTop);
                itemArray.forEach( item => {
                    if(item.top < min){
                            item.img.src = item.src;
                    }
                })
                this.timer = null;
        },500)        
    }
    //点击调用页面渲染和懒加载
    Render.prototype.reRender = function(){
        this.btnList.forEach( (ele,index) => {
            if(index + 1 === this.pageCount){
                  ele.className = "active";
            }else{
                  ele.className = "";
            }
        })          
        this.renderPage();
    }    
    //点击加载下一页 单页面不会回到顶部
    Render.prototype.nextPage = function(){
        if( this.pageCount === this.page_total){
           alert("已经是最后一个页面了")
            return false;
      }else{
            this.pageCount ++;
      }
      
    }
    //点击加载上一页 单页面不会回到顶部
    Render.prototype.prevPage =function(){
        if( this.pageCount === 1){
            return false;
      }else{
            this.pageCount --;
      }
    }
    //点击数字按钮到当前页，页面回到顶部
    Render.prototype.toPage = function(index){
        this.pageCount = index;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    //渲染按钮
    Render.prototype.renderPageBtn = function(){
        this.page_total = Math.ceil( this.GLOBAL_TOTAL / this.showCount);
        let btnWrap = document.createDocumentFragment();
        for(var i = 1 ; i <= this.page_total ; i ++){
            let span = document.createElement("span");            
            span.innerHTML = i;           
            if(i === this.pageCount){
                 span.className = "active" ;
            }
            btnWrap.appendChild(span);
            this.btnList.push(span);
      }     
      this.next.parentNode.insertBefore(btnWrap,this.next);
    }
    var render = new Render();
    render.init();

    //遮罩层设置高度
    var client_Height = document.documentElement.clientHeight;
    $(".zhezhaoceng").css({"height":client_Height})
   
   //购物车添加

  
})(jQuery)

