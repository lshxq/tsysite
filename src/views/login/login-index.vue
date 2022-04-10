<template lang="pug">
  .login-index-main
    pano-viewer(:img='backgroundComp' :cfg='panoCfg')
    .mask
      .login-panel
        .title 登录
        .sub-title 田世远的空间
        el-form.login-form(label-wdith='80px' :model='model' ref='loginFormRef' :rules='rules')
          el-form-item(prop='username')
            el-input(v-model='model.username' placeholder='请输入用户名')
          el-form-item(prop='password')
            el-input(v-model='model.password' show-password placeholder='请输入密码')
          el-form-item
            el-button.w0(type='primary' @click='login') 登录
        
</template>

<script>
export default {
  created() {
    this.rules = {
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入登录密码", trigger: "blur" },
      ],
    };
    this.panoCfg = {
      navbar: false,
      autorotateDelay: 400,
      autorotateSpeed: "0.1rpm",
    }
  },
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      backgrounds: [
        require('@/assets/images/pano/00.jpeg'),
        require('@/assets/images/pano/02.jpeg'),
        require('@/assets/images/pano/03.jpeg'),
        require('@/assets/images/pano/04.jpeg'),
        require('@/assets/images/pano/01.jpeg'),
        require('@/assets/images/pano/05.jpeg')
      ]
    }
  },
  computed: {
    backgroundComp() {
      const {
        backgrounds
      } = this
      return backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }
  },
   methods: {
    login() {
      this.$refs.loginFormRef.validate((valid) => {
        if (valid) {
          this.$axios({
            url: '/login',
            params: {
              ...this.model
            }
          }).then(resp => {
            console.log(resp)
            this.goto("home")
          })
        }
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.login-index-main
  height: 100%
  width: 100%
  position: relative

  .mask
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center
    .login-panel
      width: 400px
      background: white
      padding: 30px
      .title
        text-align: center
        margin-bottom: 10px
        font-size: 40px
      .sub-title
        text-align: center
        margin-bottom: 20px
        font-size: 16px

</style>
