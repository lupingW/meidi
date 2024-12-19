"use strict";!function(o){function t(){}t.prototype.init=function(){this.GLOBAL_DATA=null,this.GLOBAL_TOTAL=0,this.showCount=12,this.pageCount=1,this.goodsList=null,this.timer=null,this.page_total=0,this.btnList=[],this.next=document.querySelector("#next"),this.prev=document.querySelector("#prev"),this.goodsListEle=document.querySelector("#render_goods"),this.fetch()},t.prototype.fetch=function(){var n=this;fetch("/pxx",{page:1,size:100}).then(function(t){return t.json()}).then(function(t){localStorage.setItem("pxx",JSON.stringify(t)),n.renderPage(t),n.renderPageBtn(),n.bindEvent()})},t.prototype.bindEvent=function(){var e=this;this.next.addEventListener("click",this.nextPage.bind(this)),this.prev.addEventListener("click",this.prevPage.bind(this)),this.btnList.forEach(function(t,n){t.addEventListener("click",e.toPage.bind(e,n+1))}),this.next.parentNode.addEventListener("click",this.reRender.bind(this))},t.prototype.renderPage=function(t){null===this.GLOBAL_DATA&&(this.GLOBAL_DATA=t),this.goodsList=this.GLOBAL_DATA.goods,this.GLOBAL_TOTAL=this.goodsList.length,o(".cate_cell_fl").html("共"+this.GLOBAL_TOTAL+"件商品");for(var n="",e=this.showCount*(this.pageCount-1);e<=this.showCount*this.pageCount-1&&(item=this.goodsList[e++],item);)n+='<li class="hproduct" data-id='.concat(item.goods_id," data-img=").concat(item.hd_thumb_url,'>\n                          <div class="sku_tag sku_tag_important">限时特惠</div>\n                          <a href="./commodityDetails.html" class="category_cover" target="_blank" data-id=').concat(item.goods_id,'>\n                                  <img class="img_list" src="./images/0 (100).jpg"  data-src=').concat(item.hd_thumb_url,'\n                                      alt="').concat(item.short_name,'"\n                                      width="240" height="240"\n                                      >\n                          </a>\n                          <div class="ft_message">\n                                  <div class="price_new">\n                                      <span class="price">¥<em>').concat((item.normal_price/100).toFixed(2),'</em></span>\n                                  </div>\n                                  <div class="right_tip ">\n                                          <span>评价<em>').concat(item.sold_quantity,'</em></span>\n                                  </div>\n                          </div>\n                          <a href="./commodityDetails.html" class="fn" target="_blank" data-id=').concat(item.goods_id,">\n                              \n                                  ").concat(item.goods_name,'           \n                          </a>\n                          <div class="sell_point">').concat(item.short_name,'</div>\n                      \n                          <div class="act_tag">\n                              <div class="self_tag">自营</div>\n                              <div class="icon_coupon icon_coupon_3">\n                                  <span class="text" id="text"> ').concat(item.coupon,' </span> \n                              </div>\n                          </div>\n\n                          <div class="item_compare">\n                              <div class="cart js_add_to_cart" \n                              data-click="0" data_id=').concat(item.goods_id," \n                              data_price=").concat(item.normal_price/100,'>\n                                  <i class="cart_icon common_cart_icon"></i>\n                                  <span>购物车</span>\n                              </div>\n                              \n                              <div class="compare  js_compare_icon" data-category="30" data-sku="1000000000100511206101">\n                                  <i class="compare_icon"></i>\n                                  <span>对比</span>\n                              </div>\n                          </div>\n                      \n                      </li>      ');this.goodsListEle.innerHTML=n,this.lazyload(".img_list"),this.zhezhaoceng()},t.prototype.zhezhaoceng=function(){o(".js_add_to_cart").on("click",function(){o(".zhezhaoceng").addClass("show"),o(".mod_layer").addClass("show")}),o(".J_close_text").on("click",function(){o(".zhezhaoceng").removeClass("show"),o(".mod_layer").removeClass("show")}),o(".close_ico").on("click",function(){o(".zhezhaoceng").removeClass("show"),o(".mod_layer").removeClass("show")})},t.prototype.lazyload=function(t){var n=document.querySelectorAll(t),e=Array.from(n).map(function(t){return{img:t,top:t.offsetTop+t.parentNode.offsetTop+t.parentNode.parentNode.offsetTop,src:t.getAttribute("data-src")}});this.load(e),window.onscroll=this.load.bind(this,e)},t.prototype.load=function(t){var e=this;null===this.timer&&(this.timer=setTimeout(function(){var n=document.documentElement.clientHeight+(document.body.scrollTop||document.documentElement.scrollTop);t.forEach(function(t){t.top<n&&(t.img.src=t.src)}),e.timer=null},500))},t.prototype.reRender=function(){var e=this;this.btnList.forEach(function(t,n){n+1===e.pageCount?t.className="active":t.className=""}),this.renderPage()},t.prototype.nextPage=function(){if(this.pageCount===this.page_total)return alert("已经是最后一个页面了"),!1;this.pageCount++},t.prototype.prevPage=function(){if(1===this.pageCount)return!1;this.pageCount--},t.prototype.toPage=function(t){this.pageCount=t,document.body.scrollTop=document.documentElement.scrollTop=0},t.prototype.renderPageBtn=function(){this.page_total=Math.ceil(this.GLOBAL_TOTAL/this.showCount);for(var t=document.createDocumentFragment(),n=1;n<=this.page_total;n++){var e=document.createElement("span");(e.innerHTML=n)===this.pageCount&&(e.className="active"),t.appendChild(e),this.btnList.push(e)}this.next.parentNode.insertBefore(t,this.next)},(new t).init();var n=document.documentElement.clientHeight;o(".zhezhaoceng").css({height:n})}(jQuery),$(".price").on("mouseover",function(){$(".price>ul").css({display:"block"}),$(".price>span").css({color:"#f60"})}),$(".price").on("mouseout",function(){$(".price>ul").css({display:"none"}),$(".price>span").css({color:"#333"})}),$(".aaaa").children().eq(1).css({color:"#0092d8"}),$(".gggg").children().eq(1).css({color:"#0092d8"}),$(".js_mod_filter_item").on("click",function(){if("active"!==$(".js_mod_filter_item>i").attr("class"))return $(".js_mod_filter_item>i").addClass("active"),!1;$(".js_mod_filter_item>i").removeClass("active")}),$("#render_goods").on("click",".hproduct",function(){var t={id:$(this).attr("data-id"),img:$(this).attr("data-img")};localStorage.setItem("id",JSON.stringify(t))}),function(){var t=$.Callbacks(),a=localStorage.getItem("carts")?JSON.parse(localStorage.getItem("carts")):{carts:[]};function n(){var n=$(this).attr("data_id");if(!a.carts.some(function(t){if(t.id==n)return t.count++,!0})){var t={id:n,count:1};a.carts.push(t)}o("carts",a)}function o(t,n){localStorage.setItem(t,JSON.stringify(n))}function i(){var t=a.carts;try{var n=JSON.parse(localStorage.pxx).goods}catch(t){}!function(t){0<t.length?$(".carts").addClass("hide"):$(".carts").removeClass("hide")}(t);for(var e="",o=0;o<t.length;o++)for(var i=0;i<n.length;i++)t[o].id==n[i].goods_id&&(e+='<li class="common_cart_item">\n                            <div class="product_img left">\n                                <img src='.concat(n[i].hd_thumb_url,'>\n                            </div>\n                            <div class="product_info left">\n                                <div class="product_title">\n                                    <a target="_blank" href="/detail/index?itemid=1000000000100511206101">\n                                    ').concat(n[i].goods_name,' </a>\n                                </div>\n                                <div class="product_sku">\n                                ').concat(n[i].sales_tip,'</div>\n                            </div>\n                            <div class="cart_operation right">\n                                <span class="cart_price">¥').concat((n[i].normal_price/100).toFixed(2),'</span>\n                                <span class="operation_delete js_common_cart_delete" data-id=').concat(n[i].goods_id,">删除</span>\n                            </div>\n                        </li>"));$(".js_common_cart_list").html(e)}console.log(a),$(function(){t.add(n),t.add(i),$("#render_goods").on("click",".js_add_to_cart",t.fire),$(".nav_carts").on("click",".operation_delete",function(){var e=$(this).attr("data-id");a.carts.some(function(t){if(t.id===e){var n=a.carts.indexOf(t);return console.log(a.carts,n),a.carts.splice(n,1),!0}}),o("carts",a),i()}),i()})}(),function(){$(".nav_search").on("mouseenter",function(){$(".nav_search>span").css({display:"none"}),$("#search , .nav_search>i").css({display:"inline-block"}),$("#search ").focus(),$("#search ").animate({width:"205px"}),$(".nav_search>i").animate({left:"-385px"})}),$(document).on("click",function(){"block"==$("#search ").css("display")&&($(".nav_search>i").animate({left:"0px"}),$("#search ").animate({width:"0px"}).queue(function(t){$("#search, .nav_search>i").css({display:"none"}),$(".nav_search>span").css({display:"inline-block"}),t()}))}),$(".nav_phone").on("mouseover",function(){$(".nav_phone>div>img").css({display:"block"})}),$(".nav_phone").on("mouseout",function(){$(".nav_phone>div>img").css({display:"none"})}),$(".nav_carts").on("mouseover",function(){$(".nav_carts .carts").css({display:"block"})}),$(".nav_carts").on("mouseout",function(){$(".nav_carts .carts").css({display:"none"})}),$(".nav_longin").on("mouseover",function(){$(".login_DownMenu").css({display:"block"})}),$(".nav_longin").on("mouseout",function(){$(".login_DownMenu").css({display:"none"})});try{var t=JSON.parse(localStorage.getItem("user"));t&&$(".nav_longin .denglu").html("<div>你好！</div><div>"+t.user+"</div>")}catch(t){}$(".nav_longin").on("click",".out_login",function(){localStorage.removeItem("user"),location.reload()})}();