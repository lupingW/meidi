"use strict";$(".type1_accounts").on("change",function(){if(!/^1[34578]\d{9}$/.test($(".type1_accounts").val()))return $(".type1_accounts_p").css({display:"block"}),!1;$(".type1_accounts_p").css({display:"none"})}),$(".type1_password").on("change",function(){if(!/^[A-Za-z0-9！@#￥%……^&*()_+-=":';?><,./`~]{6,20}$/.test($(".type1_password").val()))return $(".type1_password_p").css({display:"block"}),console.log("1"),!1;$(".type1_password_p").css({display:"none"})}),$(".type1_btn").on("click",function(){return/^1[34578]\d{9}$/.test($(".type1_accounts").val())?/^[A-Za-z0-9！@#￥%……^&*()_+-=":';?><,./`~]{6,20}$/.test($(".type1_password").val())?($(".type1_accounts_p").css({display:"none"}),$(".type1_password_p").css({display:"none"}),console.log($(".type1_accounts").val(),$(".type1_password").val()),void $.ajax({type:"GET",url:"http://zhaoyx0907.com/users/login.do",data:{username:$(".type1_accounts").val(),password:$(".type1_password").val()},success:function(s){if(1==s)return alert("登陆失败，用户名不存在"),history.go(0),!1;alert("恭喜你登陆成功，点击跳转首页");var a={user:$(".type1_accounts").val()};localStorage.setItem("user",JSON.stringify(a)),location.href="./index.html"}})):($(".type1_password_p").css({display:"block"}),console.log("1"),!1):($(".type1_accounts_p").css({display:"block"}),!1)}),$(".type2_accounts").on("change",function(){if(!/^1[34578]\d{9}$/.test($(".type2_accounts").val()))return $(".type2_accounts_p").css({display:"block"}),!1;$(".type2_accounts_p").css({display:"none"})}),$(".type2_password").on("change",function(){if(!/^[0-9]{6}$/.test($(".type2_password").val()))return $(".type2_password_p").css({display:"block"}),console.log("1"),!1;$(".type2_password_p").css({display:"none"})}),$(".type2_btn").on("click",function(){return/^1[34578]\d{9}$/.test($(".type2_accounts").val())?/^[A-Za-z0-9]{6,20}$/.test($(".type2_password").val())?($(".type2_accounts_p").css({display:"none"}),void $(".type2_password_p").css({display:"none"})):($(".type2_password_p").css({display:"block"}),console.log("1"),!1):($(".type2_accounts_p").css({display:"block"}),console.log("1"),!1)}),$(".msg_login").on("click",function(){$(".login_type2").css({display:"block"}),$(".login_type1").css({display:"none"})}),$(".msg_login2").on("click",function(){$(".login_type1").css({display:"block"}),$(".login_type2").css({display:"none"})}),$(".msg_logins").on("click",function(){$("#login").css({display:"none"}),$("#login_register").css({display:"block"})}),$(".login_from_row>i").on("click",function(){if("active"===$(".login_from_row>i").attr("class"))return $(".login_from_row>i").attr({class:""}),!1;$(".login_from_row>i").attr({class:"active"})}),$(".phone_login").on("change",function(){if(!/^1[34578]\d{9}$/.test($(".phone_login").val()))return $(".phone_login_warn").css({display:"block"}).html("请输入正确手机号"),!1;$(".phone_login_warn").css({display:"none"})}),$(".set_pwd").on("change",function(){if(!/((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,16}$))/.test($(".set_pwd").val()))return $(".set_pwd_warn").css({display:"block"}).html("密码必须包含大小写字母，数字，符号至少三种，且位数大于8"),!1;$(".set_pwd_warn").css({display:"none"})}),$(".affirm_pwd").on("change",function(){if(!/((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,16}$))/.test($(".affirm_pwd").val()))return $(".affirm_pwd_warn").css({display:"block"}).html("密码必须包含大小写字母，数字，符号至少三种，且位数大于8"),!1;$(".affirm_pwd_warn").css({display:"none"})}),$(".login_register_btn").on("click",function(){return/^1[34578]\d{9}$/.test($(".phone_login").val())?($(".phone_login_warn").css({display:"none"}),/((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,16}$))/.test($(".set_pwd").val())?($(".set_pwd_warn").css({display:"none"}),/((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,16}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,16}$))/.test($(".affirm_pwd").val())?($(".affirm_pwd_warn").css({display:"none"}),$(".set_pwd").val()!==$(".affirm_pwd").val()?($(".affirm_pwd_warn").css({display:"block"}).html("两次密码输入的不一致"),!1):($(".affirm_pwd_warn").css({display:"none"}),"active"!==$(".login_from_row>i").attr("class")?($(".iii").css({display:"block"}).html("未同意用户注册协议"),!1):($(".iii").css({display:"none"}),void $.ajax({type:"POST",url:"http://zhaoyx0907.com/users/register.do",data:{username:$(".phone_login").val(),password:$(".set_pwd").val()},success:function(s){0==s&&(alert("恭喜你注册成功"),history.go(0)),1==s&&alert("抱歉，该用户名已经被使用了")}})))):($(".affirm_pwd_warn").css({display:"block"}).html("密码必须包含大小写字母，数字，符号至少三种，且为数大于8"),!1)):($(".set_pwd_warn").css({display:"block"}).html("密码必须包含大小写字母，数字，符号至少三种,且位数大于8"),!1)):($(".phone_login_warn").css({display:"block"}).html("请输入正确手机号"),!1)});