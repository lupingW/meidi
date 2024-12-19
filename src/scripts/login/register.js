// 账号密码登陆正则验证

$(".type1_accounts").on("change", () => {
    // console.log($(".type1_accounts").val())
    if (!(/^1[34578]\d{9}$/.test($(".type1_accounts").val()))) {
        $(".type1_accounts_p").css({ display: "block" })
        return false;
    }
    $(".type1_accounts_p").css({ display: "none" })
})

$(".type1_password").on("change", () => {
    if (!(/^[A-Za-z0-9！@#￥%……^&*()_+-=":';?><,./`~]{6,20}$/.test($(".type1_password").val()))) {
        $(".type1_password_p").css({ display: "block" })
        console.log("1")
        return false;
    }
    $(".type1_password_p").css({ display: "none" })
})

$(".type1_btn").on("click", () => {
    if (!(/^1[34578]\d{9}$/.test($(".type1_accounts").val()))) {
        $(".type1_accounts_p").css({ display: "block" })
        return false;
    }
    if (!(/^[A-Za-z0-9！@#￥%……^&*()_+-=":';?><,./`~]{6,20}$/.test($(".type1_password").val()))) {
        $(".type1_password_p").css({ display: "block" })
        console.log("1")
        return false;
    }
    $(".type1_accounts_p").css({ display: "none" })
    $(".type1_password_p").css({ display: "none" })
    console.log( $(".type1_accounts").val(),$(".type1_password").val())
    $.ajax({
        type: "GET",
        url : "http://zhaoyx0907.com/users/login.do",
        data :{
            username : $(".type1_accounts").val(),
            password : $(".type1_password").val()
        },
        success:function(res){
            if(res == 1){
                alert("登陆失败，用户名不存在")
                history.go(0) 
                return false;
            }
            alert("恭喜你登陆成功，点击跳转首页")
            var data = {
                user : $(".type1_accounts").val() ,
            }

            localStorage.setItem("user" , JSON.stringify(data)) ;
            location.href = "./index.html"  
            
        }
    })
})
// 短信登陆正则验证
$(".type2_accounts").on("change", () => {
    // console.log($(".type1_accounts").val())
    if (!(/^1[34578]\d{9}$/.test($(".type2_accounts").val()))) {
        $(".type2_accounts_p").css({ display: "block" })
        return false;
    }
    $(".type2_accounts_p").css({ display: "none" })
})

$(".type2_password").on("change", () => {
    // console.log($(".type1_accounts").val())
    if (!(/^[0-9]{6}$/.test($(".type2_password").val()))) {
        $(".type2_password_p").css({ display: "block" })
        console.log("1")
        return false;
    }
    $(".type2_password_p").css({ display: "none" })
})

$(".type2_btn").on("click", () => {
    if (!(/^1[34578]\d{9}$/.test($(".type2_accounts").val()))) {
        $(".type2_accounts_p").css({ display: "block" })
        console.log("1")
        return false;
    }
    if (!(/^[A-Za-z0-9]{6,20}$/.test($(".type2_password").val()))) {
        $(".type2_password_p").css({ display: "block" })
        console.log("1")
        return false;
    }
    $(".type2_accounts_p").css({ display: "none" })
    $(".type2_password_p").css({ display: "none" })
})

//登录切换
$(".msg_login").on("click", () => {
    $(".login_type2").css({ display: "block" })
    $(".login_type1").css({ display: 'none' })

})

$(".msg_login2").on("click", () => {
    $(".login_type1").css({ display: "block" })
    $(".login_type2").css({ display: 'none' })

})

$(".msg_logins").on("click", () => {
    $("#login").css({ display: 'none' })
    $("#login_register").css({ display: "block" })
})

//点击加上背景图的i
$(".login_from_row>i").on("click", () => {
    if ($(".login_from_row>i").attr("class") === "active") {
        $(".login_from_row>i").attr({ class: "" })
        return false;
    }
    $(".login_from_row>i").attr({ class: "active" })
})


//注册页正则验证
$(".phone_login").on("change", () => {
    // console.log($(".type1_accounts").val())
    if (!(/^1[34578]\d{9}$/.test($(".phone_login").val()))) {
        $(".phone_login_warn").css({ display: "block" }).html("请输入正确手机号")
        return false;
    }
    $(".phone_login_warn").css({ display: "none" })
})

$(".set_pwd").on("change", () => {
    if (!(/((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,16}$))/.test($(".set_pwd").val()))) {
        $(".set_pwd_warn").css({ display: "block" }).html("密码必须包含大小写字母，数字，符号至少三种，且位数大于8")
        return false;
    }
    $(".set_pwd_warn").css({ display: "none" })
})

$(".affirm_pwd").on("change", () => {
    if (!(/((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,16}$))/.test($(".affirm_pwd").val()))) {
        $(".affirm_pwd_warn").css({ display: "block" }).html("密码必须包含大小写字母，数字，符号至少三种，且位数大于8")
        return false;
    }
    $(".affirm_pwd_warn").css({ display: "none" })
})


$(".login_register_btn").on("click", () => {
    if (!(/^1[34578]\d{9}$/.test($(".phone_login").val()))) {
        $(".phone_login_warn").css({ display: "block" }).html("请输入正确手机号")
        return false;
    }
    $(".phone_login_warn").css({ display: "none" })

    if (!(/((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,16}$))/.test($(".set_pwd").val()))) {
        $(".set_pwd_warn").css({ display: "block" }).html("密码必须包含大小写字母，数字，符号至少三种,且位数大于8")
        return false;
    }
    $(".set_pwd_warn").css({ display: "none" })

    if (!(/((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,16}$))/.test($(".affirm_pwd").val()))) {
        $(".affirm_pwd_warn").css({ display: "block" }).html("密码必须包含大小写字母，数字，符号至少三种，且为数大于8")
        return false;
    }
    $(".affirm_pwd_warn").css({ display: "none" })

    if (!($(".set_pwd").val() === $(".affirm_pwd").val())) {
        $(".affirm_pwd_warn").css({ display: "block" }).html("两次密码输入的不一致")
        return false;
    }
    $(".affirm_pwd_warn").css({ display: "none" })
    if (!($(".login_from_row>i").attr("class") === "active")) {
        $(".iii").css({ display: "block" }).html("未同意用户注册协议")
        return false;
    }
    $(".iii").css({ display: "none" })
    $.ajax({
        type: "POST",
        url : "http://zhaoyx0907.com/users/register.do",
        data :{
            username : $(".phone_login").val(), 
            password : $(".set_pwd").val()
        },
        success:function(res){
            if(res == 0){
                alert("恭喜你注册成功")
                history.go(0) 
            }
            if(res == 1){
                alert("抱歉，该用户名已经被使用了")
            
            }
        }
    })
   
})