
$(".price").on("mouseover",()=>{
    $(".price>ul").css({display:"block"})
    $(".price>span").css({color:"#f60"})
})

$(".price").on("mouseout",()=>{
    $(".price>ul").css({display:"none"})
    $(".price>span").css({color:"#333"})
})

$(".aaaa").children().eq(1).css({
    color:"#0092d8"
})

$(".gggg").children().eq(1).css({
    color:"#0092d8"
})

$(".js_mod_filter_item").on("click",()=>{
    if(!($(".js_mod_filter_item>i").attr("class")==="active")){
        $(".js_mod_filter_item>i").addClass("active")
        return false;
    }
    $(".js_mod_filter_item>i").removeClass("active")
})

$("#render_goods").on("click",".hproduct",function(){
    var k = $(this).attr("data-id");
    var p = $(this).attr("data-img")
    var kkkk = {"id":k , img :p}
    localStorage.setItem( "id",JSON.stringify(kkkk) )
})