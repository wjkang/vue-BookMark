<template>
    <div>
        <div id="login_bg" class="login_bg"></div>
        <div class="login_header">
            <span></span>
        </div>

        <div class="container">
            <div class="form_header">
                <h1 id="logo">BookMark</h1>
            </div>
            <div class="signup_forms" class="signup_forms">
                <div id="signup_forms_container" class="signup_forms_container">
                    <div class="signup_account" id="signup_account">
                        <div class="form_user">
                            <input type="text" name="email" placeholder="Email" id="signup_email">
                        </div>
                        <div class="form_password">
                            <input type="password" name="password" placeholder="Password" id="signup_password">
                        </div>
                    </div>
                </div>
                <button type="button" id="signup_forms_submit"><span><strong>Log in</strong></span></button>
            </div>
        </div>

        <div class="footer">
            <div class="footer_signup_link">
                <a class="signup_link" v-link="{path:'/signup'}">Sign up</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    div {
        display: block;
    }
    
    a {
        text-decoration: none;
        opacity: 1;
        color: #fff;
    }
    
    input,
    button {
        outline: none;
    }
    
    .login_bg {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url(../assets/image/u3.jpg);
        background-size: cover;
    }
    
    .login_header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    
    .container {
        position: relative;
        top: 30%;
        margin: 0 auto;
        width: 260px;
    }
    
    #logo {
        display: block;
        text-align: center;
        font-weight: bold;
        font-size: 50px;
        color: white;
        height: 100%;
    }
    
    #subheading {
        position: relative;
        width: 517px;
        left: 50%;
        margin: 10px 0 16px -258px;
        font-size: 15px;
        font-weight: normal;
        color: #fff;
        text-align: center;
    }
    
    .signup_forms {
        width: 260px;
        height: 145px;
    }
    
    .signup_forms_container {
        width: 260px;
        overflow: hidden;
        background: #fff;
        border-radius: 3px;
    }
    
    .form_user,
    .form_password {
        width: 260px;
        height: 45px;
        margin: 0px;
        padding: 0px;
        border: 0px;
    }
    
    .form_password {
        border-top: 1px solid #e3e3e3;
    }
    
    .signup_forms input {
        width: 100%;
        margin: 0px;
        background: 0;
        font: 16px/1.4 "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif;
        border: 0px;
    }
    
    #signup_forms_submit {
        margin-top: 8px;
        width: 260px;
        height: 45px;
        background: #529ECC;
        border: 0px;
        border-radius: 3px;
        cursor: pointer;
    }
    
    #signup_forms_submit span {
        color: #fff;
        font: "Helvetica Neue", Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
    
    .footer {
        position: fixed;
        top: auto;
        right: 0;
        bottom: 0;
        left: 0;
    }
    
    .footer_signup_link {
        position: absolute;
        width: 141px;
        height: 78px;
        bottom: 0;
        padding: 0 20px;
        margin: 0 0 13px 0;
        line-height: 25px;
        text-align: center;
        opacity: 1;
        color: #fff;
    }
    
    .signup_link {
        display: block;
        height: 45px;
        padding: 0 10px;
        margin: 0 0 8px 0;
        font-size: 16px;
        font-weight: bold;
        line-height: 45px;
        border: 0;
        border-radius: 2px;
        color: #fff;
        background: rgba(255, 255, 255, 0.33);
    }
    
    .link {
        font-size: 14px;
        padding-right: 5px;
        margin-right: 12px;
        color: #fff;
    }
</style>