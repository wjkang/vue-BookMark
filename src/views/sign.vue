<template>
    <div class="bg">
        <div class="main">
            <div class="center">
                <form action="" id="formOne" method="post" onsubmit="return submitB()">
                    <i class="fa fa-user Cone">  | </i>
                    <input type="text" name="uer" id="user" placeholder="用户名" onblur="checkUser()" />
                    <span id="user_pass"></span>
                    <br/>
                    <i class="fa fa-key Cone">  | </i>
                    <input type="password" name="pwd" id="pwd" placeholder="密码" onblur="checkUser1()" />
                    <span id="pwd_pass"></span>
                    <br/>
                    <i class="fa fa-folder-open Cone">  | </i>
                    <input type="text" name="surePwd" id="surePwd" placeholder="验证码" onblur="checkUser2()" />
                    <span id="surePwd_pass"></span><br/>
                    <input type="submit" value="Sign in" id="submit" name="submit">
                    <br/>
                </form>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  }
}
</script>
<style>
    .bg{
        background-image: url(../assets/image/bg03.jpg);
    height: 100%;
    /*transform: scale(1);*/
    transform-origin: center top 0px;
    }
    .main {
        /*width: 100%;*/
        height: auto;
        background-size: 100% 100%;
        margin: auto;
        background-image: url(../assets/image/huabian.png);
        background-repeat: no-repeat;
        /*background-position: 5% 5%;*/
        background-size: 73% 100%;
        background-position: 50% 40%;
    }
    
    input {
        width: 45%;
        height: 3em;
        background-color: rgba(224, 227, 232, 0.11);
        margin-left: 23%;
        border-radius: 5px;
        /*margin: auto;*/
        opacity: 1;
        outline-style: none;
        border: 1px solid rgba(239, 239, 239, 0.15);
        font-size: 1em;
        color: #bdc0b8;
        font-family: "寰蒋闆呴粦";
        padding-left: 40px;
        margin-top: 4%;
    }
    
    input:focus {
        background-color: rgba(196, 199, 204, 0.40);
        /*border: 1px solid #7FCAF1;*/
        box-shadow: 0px 0px 5px rgba(241, 237, 239, 0.35);
        opacity: 1;
    }
    
    #submit {
        width: 51.2%;
        height: 3em;
        font-size: 1em;
        background-color: rgba(0, 133, 159, 0.96);
        font-weight: bolder;
        font-family: "寰蒋闆呴粦";
        opacity: 1;
        margin-left: 22.9%;
    }
    
    #submit:active {
        background-color: rgba(0, 113, 136, 0.96);
        top: 5px;
        box-shadow: 0px 0px 5px rgba(241, 237, 239, 0.35);
    }
    
    .main .center {
        width: 35%;
        height: 28em;
        padding: 5.5% 0% 0% 0%;
        background-image: url(../assets/image/center.png);
        background-size: 170% 150%;
        background-position: 53% 49%;
        opacity: 1;
        margin: auto;
        font-size: 14px;
        color: #cccccc;
    }
    
    #user_pass {
        display: block;
        position: absolute;
        width: 17%;
        height: auto;
        /*background-color: red;*/
        margin-left: -2%;
        /*margin-top: -2.3%;*/
    }
    
    #pwd_pass {
        display: block;
        position: absolute;
        width: 14%;
        height: auto;
        /*background-color: red;*/
        margin-left: -2%;
    }
    
    #surePwd_pass {
        display: block;
        position: absolute;
        width: 14%;
        height: auto;
        /*background-color: red;*/
        margin-left: -2%;
    }
    
    #surePwd {
        background-image: url(../assets/image/we2.png);
        background-repeat: no-repeat;
        background-position: 96%;
        background-size: 20% 78%;
    }
    
    .Cone {
        color: #adadad;
        position: absolute;
        margin-left: 8.3%;
        margin-top: 2%;
        height: 50px;
        font-size: 1.35em;
    }
</style>