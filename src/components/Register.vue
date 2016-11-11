<template>
    <div>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="user.phone">
        </mt-field>
        <mt-field placeholder="请输入验证码" label="验证码" v-model="verifyCode">
            <mt-button size="small" type='primary' style="margin-top:7px" @click.native="sendMessage">获取验证码</mt-button>
        </mt-field>
        <div style="margin-top:50px">
            <mt-button size="large" type='primary' @click.native="regist">注册</mt-button>
            <mt-button size="large" type='default' style="margin-top:10px">登录</mt-button>
        </div>
    </div>
</template>

<script>
import AV from 'leancloud-storage'
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';

export default {
    data () {
        return {
            status:false,
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
        const APP_ID = '';
        const APP_KEY = '';
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
            AV.Cloud.requestMobilePhoneVerify(this.user.phone).then(function (success) {

                    Indicator.close();
                }, function (error) {
                    Indicator.close();
            });
            this.status = true;
        },
        regist () {
            if(/[\d]{6}/g.test(this.user.verifyCode)===false){
                Toast({
                    message: '请输入正确的验证码',
                    iconClass: 'icon icon-fail',
                    duration: 500
                });
                Indicator.close();
                return false;
            }
            AV.User.verifyMobilePhone(this.user.phone, verifyCode).then(function (success) {
                    // 成功
                }, function (error) {
                    // 失败
                });
        }
    }

}
</script>