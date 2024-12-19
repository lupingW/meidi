;;(function(){
    
    /**
     * @function init()                 初始化
     * @function show()                 显示隐藏购物车
     * @function renderList             渲染购物车商品列表
     * @function renderPrice            渲染总价
     * @function getCarts               获取localstorage数据
     * @function bindEvent              绑定事件
     * @function renderCarts            渲染右上角购物车
     * @var      this.all_goods         获取的全部商品
     * @var      this.GLOBAL_STORE      获取本地购物车数据
     * @var      this.result            pxx的商品数据对象
     * @var      this.data              this.GLOBAL_STORE中的carts数据
     */
    class Carts {
        constructor() {

        }

        //初始化
        init() {
            this.goodsList = $(".js_shop_100511")
            this.all_goods = null;
            this.GLOBAL_STORE = this.getCarts();
            this.result = JSON.parse(localStorage.pxx)
            this.show();
            this.renderList(this.result);
            this.bindEvent();
            this.renderCarts(this.result);
        }
        //显示购物车列表 还是 显示购物车未有商品
        show(){        
            if(this.GLOBAL_STORE.carts.length>0){
                
                //$(".hasCarts").addClass("show");
                $(".gouwuche").addClass("show");
                $(".carts_body").addClass("show");
                $(".cart_bottom_wrap").addClass("show")
                $(".cart_empty").addClass("hide")
                $(".carts").addClass("hide")
            }else{
                //$(".hasCarts").removeClass("show");
                $(".gouwuche").removeClass("show");
                $(".carts_body").removeClass("show");
                $(".cart_bottom_wrap").removeClass("show");
                $(".cart_empty").removeClass("hide");
                $(".carts").removeClass("hide");
            }
        }

        //渲染右上角购物车
        renderCarts(res){
            this.data = JSON.parse(localStorage.carts).carts;
            this.show()
            var str = ""
            for (let i = 0; i < this.data.length; i++) {
                for (let k = 0; k < this.all_goods.length; k++) {
                    if (this.data[i].id == this.all_goods[k].goods_id) {
                        str += 
                                `<li class="common_cart_item">
                                <div class="product_img left">
                                    <img src=${this.all_goods[k].hd_thumb_url}>
                                </div>
                                <div class="product_info left">
                                    <div class="product_title">
                                        <a target="_blank" href="/detail/index?itemid=1000000000100511206101">
                                        ${this.all_goods[k].goods_name} </a>
                                    </div>
                                    <div class="product_sku">
                                    ${this.all_goods[k].sales_tip}</div>
                                </div>
                                <div class="cart_operation right">
                                    <span class="cart_price">¥${(this.all_goods[k].normal_price / 100).toFixed(2)}</span>
                                    <span class="operation_delete js_common_cart_delete" data-id=${this.all_goods[k].goods_id}>删除</span>
                                </div>
                            </li>`
                    }
                }
            }
            $(".js_common_cart_list").html(str);
        }

        //渲染商品列表
        renderList(res) {
            this.data = JSON.parse(localStorage.carts).carts;
            this.show()
            this.all_goods = res.goods;
            var html = "";
            for (let i = 0; i < this.data.length; i++) {
                for (let k = 0; k < this.all_goods.length; k++) {
                    if (this.data[i].id == this.all_goods[k].goods_id) {
                       // this.all_price += (this.all_goods[k].normal_price / 100 * this.data[i].count);
                        html += 
                                `<div class="item_detail">

                                        <div class="cart_choose">
                                            <div class="item_choose_wrap3">
                                                <div class="item_choose_wrap1 item_choose_wrap yes" data-id=${this.data[i].id}></div>
                                            </div>
                                        </div>
                    
                                        <div class="item_sub_detail">
                                            <div class="cart_img">
                                                <img src=${this.all_goods[k].hd_thumb_url}>
                                            </div>
                                            <div class="cart_product" title="大1P全直流变频空调 一级能效 冷暖挂机 智能操控 KFR-26GW/WXDN8A1@">
                                                <a target="_blank" href="/detail/index?itemid=1000000000100511235588">
                                                    ${this.all_goods[k].goods_name} </a>
                                            </div>
                                            <div class="cart_sku">
                                                <span class="sku_color">${this.all_goods[k].short_name}</span>
                                                <span class="sku_spec">${this.all_goods[k].sales_tip}</span>
                                            </div>
                                            <div class="cart_price">
                                                <span class="price_old">${(this.all_goods[k].normal_price / 100).toFixed(2)}</span>
                                            </div>
                                            <div class="cart_num">                      
                                                <div class="num_wrap" id="divEditNum_235588" data-type="product" data-id="235588">
                                                    <span class="minus" data-id=${this.data[i].id} count=${this.data[i].count} price=${this.data[i].price}> <span class="inner"></span></span>
                                                    <input class="num" type="text"  value=${this.data[i].count}>
                                                    <span class="plus" data-id=${this.data[i].id} count=${this.data[i].count} price=${this.data[i].price}><span class="inner"></span></span>
                                                    <div class="cart_product_status js_product_status_235588"></div>
                                                </div>
                                            </div>
                                            <div class="cart_total">${(this.all_goods[k].normal_price / 100 * this.data[i].count).toFixed(2)}</div>
                                            <div class="cart_operation">
                                                <span class="operation_delete js_item_delete"  data-id=${this.data[i].id}
                                                    >删除</span>
                                            </div>
                                        </div>
                                </div>`
                    }
                }
            }
            this.goodsList.html(html)
            this.renderPrice()            
        }

        //渲染价格
        renderPrice() {
            this.all_price = 0;
            this.goods_counts = 0;
            for(let c = 0 ; c < $(".item_detail").length ; c++){
                if($(".item_detail").eq(c).find(".item_choose_wrap1").hasClass("yes")){
                    var jiage =parseInt( $(".item_detail").eq(c).find(".price_old").html());
                    var shuliang = parseInt( $(".item_detail").eq(c).find(".num").val());
                     this.all_price+= jiage*shuliang;
                     this.goods_counts++;
                }
                
            }
            $(".js_total_check").html(this.goods_counts)
            $(".js_total_price").html(this.all_price.toFixed(2))
        }

        //获取本地购物车数据
        getCarts() {
            if ((localStorage.getItem("carts"))) {
                return JSON.parse(localStorage.getItem("carts"))
            } else {
                return { carts: [] };
            }
        }

        bindEvent() {

            //商品数量减按钮及功能
            $(".gouwuche").on("click", ".minus", function () {
                var id = $(this).attr("data-id")
                carts.GLOBAL_STORE.carts.some((item) => {
                    if (item.id === id) {
                        if (item.count > 1) {
                            item.count--;
                        }
                        return true;
                    }
                })
                carts.saveDate("carts", carts.GLOBAL_STORE)
            })

            //商品数量加按钮以及功能
            $(".gouwuche").on("click", ".plus", function () {
                var id = $(this).attr("data-id")
                carts.GLOBAL_STORE.carts.some((item) => {
                    if (item.id === id) {
                        item.count++;
                        return true;
                    }
                })
                carts.saveDate("carts", carts.GLOBAL_STORE)
            })

            //右上角购物车的删除按钮
            $(".gouwuche").on("click", ".operation_delete", function () {
                var id1 = $(this).attr("data-id")
                carts.GLOBAL_STORE.carts.some(item => {
                    if (item.id === id1) {

                        var a = carts.GLOBAL_STORE.carts.indexOf(item);
                        carts.GLOBAL_STORE.carts.splice(a, 1)
                        return true;
                    }
                })
                carts.saveDate("carts", carts.GLOBAL_STORE)
            })

            //每条商品后面的删除按钮
            $(".nav_carts").on("click" , ".operation_delete",function(){
                var id2 =  $(this).attr("data-id")
                carts.GLOBAL_STORE.carts.some(item => {
                    if (item.id === id2) {
                        var a2 = carts.GLOBAL_STORE.carts.indexOf(item);
                        carts.GLOBAL_STORE.carts.splice(a2, 1)
                        return true;
                    }
                })
                carts.saveDate("carts", carts.GLOBAL_STORE)
            })

            //点击上面的全选按钮会把按钮全选中
            $("#top_btn").on("click",".js_sum_choose",function () {
                if($(this).hasClass("yes")){
                    $(this).removeClass("yes");
                    $(".item_choose_wrap1").removeClass("yes")
                    $(".b_btn").removeClass("yes")
                }else{      
                    $(this).addClass("yes");
                    $(".b_btn").addClass("yes")
                    $(".item_choose_wrap1").addClass("yes")
                }
                carts.renderPrice();
            })

            //点击底下全选按钮时候会把按钮全选中
            $("#btn_all").on("click",".b_btn",function () { 
                if($(this).hasClass("yes")){
                    $(this).removeClass("yes");
                    $("#top_btn .js_sum_choose").removeClass("yes");
                    $(".item_choose_wrap1").removeClass("yes")
                }else{
                    $(this).addClass("yes");
                     $("#top_btn .js_sum_choose").addClass("yes");
                     $(".item_choose_wrap1").addClass("yes")
                }
                carts.renderPrice();
            })

            //判断商品是否全选中，然后全选按钮是否自动跟着选中
            $(".js_shop_100511").on("click",".item_choose_wrap1",function(){
                $(this).toggleClass("yes");
                var count = 0;
                for(var i = 0 ; i < $(".item_choose_wrap1").length ; i++){
                    if(($(".item_choose_wrap1").eq(i).hasClass("yes"))){
                        count++
                    }
                }
                if(count==$(".item_choose_wrap1").length){
                    $("#top_btn .js_sum_choose").addClass("yes");
                    $(".b_btn").addClass("yes")
                }else{
                    $("#top_btn .js_sum_choose").removeClass("yes");
                    $(".b_btn").removeClass("yes")
                }
                carts.renderPrice();
            })
            
            //删除选定的商品
            $("#all_delete").on("click",function(){
                $.each($(".item_choose_wrap1"),function(){
                    if($(this).hasClass("yes")){
                        carts.GLOBAL_STORE.carts.some(item => {
                            if (item.id === $(this).attr("data-id")) {
                                var a2 = carts.GLOBAL_STORE.carts.indexOf(item);
                                carts.GLOBAL_STORE.carts.splice(a2, 1)
                                return true;
                            }
                        })
                        carts.saveDate("carts", carts.GLOBAL_STORE)
                    }
                })
            })

        }
        //向本地localstorage里保存数据
        saveDate(type, json) {
            localStorage.setItem(type, JSON.stringify(json))
            this.renderList(this.result);
            this.renderCarts(this.result);
        }

    }

    var carts = new Carts;
    carts.init()

})();