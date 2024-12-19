;; (function () {

    var addCart = $.Callbacks();
    var GLOBAL_STORE = getCarts()
    console.log(GLOBAL_STORE)
    function init() {
        bindEvent();
        renderCarts();
    }

    function getCarts() {
        if (localStorage.getItem("carts")) {
            return JSON.parse(localStorage.getItem("carts"))
        } else {
            return { carts: [] };
        }
    }

    function addCartsData() {
        var attr = $(this).attr("data_id")

        var hasSameGoods = GLOBAL_STORE.carts.some((item) => {
            if (item.id == attr) {
                item.count++;
                return true;
            }
        })

        if (!hasSameGoods) {
            var data = {
                id: attr,
                count: 1,
            }
            GLOBAL_STORE.carts.push(data);
        }
        saveDate("carts", GLOBAL_STORE)
    }

    function saveDate(type, json) {
        localStorage.setItem(type, JSON.stringify(json))
    }

    function bindEvent() {
        addCart.add(addCartsData);
        addCart.add(renderCarts)
        
        $("#render_goods").on("click", ".js_add_to_cart", addCart.fire);
        
        $(".nav_carts").on("click", ".operation_delete", function () {
            var id2 = $(this).attr("data-id")
            GLOBAL_STORE.carts.some(item => {
                if (item.id === id2) {
                    var a2 = GLOBAL_STORE.carts.indexOf(item);                   
                    console.log(GLOBAL_STORE.carts, a2)
                    GLOBAL_STORE.carts.splice(a2, 1)
                    return true;
                }
            })
            saveDate("carts", GLOBAL_STORE)
            renderCarts();
        })
    }
    function renderCarts() {
        var data = GLOBAL_STORE.carts;
        try {
            var all_goods = (JSON.parse(localStorage.pxx)).goods;
        } catch (error) {

        }
        show(data)
        var str = ""
        for (let i = 0; i < data.length; i++) {
            for (let k = 0; k < all_goods.length; k++) {
                if (data[i].id == all_goods[k].goods_id) {
                    str +=
                        `<li class="common_cart_item">
                            <div class="product_img left">
                                <img src=${all_goods[k].hd_thumb_url}>
                            </div>
                            <div class="product_info left">
                                <div class="product_title">
                                    <a target="_blank" href="/detail/index?itemid=1000000000100511206101">
                                    ${all_goods[k].goods_name} </a>
                                </div>
                                <div class="product_sku">
                                ${all_goods[k].sales_tip}</div>
                            </div>
                            <div class="cart_operation right">
                                <span class="cart_price">¥${(all_goods[k].normal_price / 100).toFixed(2)}</span>
                                <span class="operation_delete js_common_cart_delete" data-id=${all_goods[k].goods_id}>删除</span>
                            </div>
                        </li>`
                }
            }
        }
        $(".js_common_cart_list").html(str);
    }

    function show(data) {
        if (data.length > 0) {
            $(".carts").addClass("hide")
        } else {
            $(".carts").removeClass("hide");
        }
    }
    $(init);

})();