;;(function(){
    var client_Height = document.documentElement.clientHeight;
    $(".zhezhaoceng").css({"height":client_Height})

    $("#btn_cart").on("click",()=>{
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
})();