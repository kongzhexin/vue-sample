<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="mail">邮箱注册</mt-tab-item>
            <mt-tab-item id="mobile">手机注册</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="mail">
                <mt-field label="用户名" placeholder="请输入用户名"  v-model="user.username"></mt-field>
                <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="user.email"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="user.password"></mt-field>
                <div style="margin-top:50px">
                    <mt-button size="large" type='primary' @click.native="mailRegist">注册</mt-button>
                    <mt-button size="large" type='default' style="margin-top:10px">登录</mt-button>
                </div>  
            </mt-tab-container-item>
            <mt-tab-container-item id="mobile">
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="user.phone">
                </mt-field>
                <mt-field placeholder="请输入验证码" label="验证码" v-model="verifyCode">
                    <mt-button size="small" type='primary' style="margin-top:7px" @click.native="sendMessage">获取验证码</mt-button>
                </mt-field>
                <div style="margin-top:50px">
                    <mt-button size="large" type='primary' @click.native="mobileRegist">注册</mt-button>
                    <mt-button size="large" type='default' style="margin-top:10px">登录</mt-button>
                </div>  
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import AV from 'leancloud-storage'
// import BV from 'leancloud-realtime'
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';

export default {
    name:'register',
    data () {
        return {
            selected:'mobile',
            verifyCode:'',
            user:{
                username:'',
                password:'',
                email:'',
                phone:''
            }
        }
    },
    created () {
        const APP_ID = 'e4gpBGLDN8nfL8waG81voviH-gzGzoHsz';
        const APP_KEY = 'jzrtGoIKk327Ca5ts0mHhBMH';
        AV.init({
        appId: APP_ID,
        appKey: APP_KEY
        });
    },
    methods:{
        sendMessage () {
            Indicator.open({
                text: 'Loading...',
                spinnerType: 'fading-circle'
            });
            if(/[\d]{11}/g.test(this.user.phone)===false){
                Toast({
                    message: '请输入正确的手机号',
                    iconClass: 'icon icon-fail',
                    duration: 500
                });
                Indicator.close();
                return false;
            }
            var param = {
                mobilePhoneNumber: this.user.phone,
                template: 'Notice_Welcome',
                service_name: '月度周刊',
                order_id: '7623432424540'
                }
            AV.Cloud.requestSmsCode(this.user.phone).then(function (success) {

                    Indicator.close();
                }, function (error) {
                    Indicator.close();
            });
        },
        mailRegist () {
            var user = new AV.User();
            // 设置用户名
            user.setUsername(this.user.username);
            // 设置密码
            user.setPassword(this.user.password);
            // 设置邮箱
            user.setEmail(this.user.email);
            var self =this;
            user.signUp().then(function (loginedUser) {
                Toast({
                    message: '注册成功',
                    iconClass: 'icon icon-success',
                    duration: 1000
                });
                self.$emit('switchTab','mine')
            }, function (error) {
                Toast({
                    message: error,
                    iconClass: 'icon icon-fail',
                    duration: 1000
                });
            });
        },
        mobileRegist () {
            if(/[\d]{6}/g.test(this.user.verifyCode)===false){
                Toast({
                    message: '请输入正确的验证码',
                    iconClass: 'icon icon-fail',
                    duration: 500
                });
                Indicator.close();
                return false;
            }
            AV.User.signUpOrlogInWithMobilePhone(this.user.phone, verifyCode).then(function (success) {
                    // 成功
                }, function (error) {
                    // 失败
                });
        }
    }

}
</script>