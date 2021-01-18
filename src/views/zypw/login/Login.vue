<template>
  <!--router-view会替换掉展示组件的第一层根标签-->
  <div>
    <div id="loginPage">
      <Card style="width:320px" class="loginform">
        <div style="text-align:center" class="logincontent">
          <!--HTML中引用别名加不加'~'都可以-->
          <img src="@/assets/imgs/theme/artisanLee.png">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: 'Please fill in the user name', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'},
            {type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style scoped>
  #loginPage {
    height: 100vh;
    background-image: url("../../../assets/imgs/background/bgimg1.jpg");
    background-size: cover; /*设置背景图充满屏幕*/
    background-repeat: no-repeat; /*设置背景图不重复*/
  }

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-bottom: 20px;
  }

  .loginform {
    /*rgba()可以设置背景透明但是内容不透明*/
    background: rgba(100, 100, 100, 0.8);
    margin-top: 150px;
    margin-left: 100px;
  }
</style>
