<template>
  <!--router-view会替换掉展示组件的第一层根标签-->
  <div>
    <div id="loginPage">
      <Card style="width: 320px" class="loginform">
        <div style="text-align: center" class="logincontent">
          <img src="@/assets/imgs/theme/artisanLee.png" />
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
              <Input
                type="text"
                v-model="formInline.user"
                placeholder="Username"
              >
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input
                type="password"
                v-model="formInline.password"
                placeholder="Password"
              >
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')"
                >登录</Button
              >
              <Button
                type="default"
                @click="handleReset('formInline')"
                style="margin-left: 8px"
                >重置</Button
              >
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      // 表单数据验证
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
      // console.log("ready to send axios。。。");
      // 发送axios请求进行登录
      axios({
        baseURL: "http://127.0.0.1:12019/login",
        method: "POST",
        timeout: 30000,
        headers: {
          "Content-type": "application/json",
        },
        // data: JSON.stringify({
        //   username: this.formInline.user,
        //   password: this.formInline.password,
        // }),
        data: {
          username: this.formInline.user,
          password: this.formInline.password,
        },
      })
        .then((res) => {
          // 登录成功，将token写到localStroage中
          // console.log("res的内容："+res.data.date)
          if (res.data.code == 200) {
            // axios自己会封装一层data！
            window.localStorage.setItem("access_token", res.data.data.access_token);
            this.$router.push("/homepage")
            alert(res.data.msg)
          }else{
            alert(res.data.msg)
          }
        })
        .catch((res) => {
          console.log(res.data)
          alert(res.data.msg)
        });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>

<style scoped>
/*#loginPage {*/
/*  position: relative;*/
/*  top: 140px;*/
/*  left: 75px;*/
/*}*/

img {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-bottom: 20px;
}

.loginform {
  background: rgba(233, 232, 232, 0.4);
}
</style>
