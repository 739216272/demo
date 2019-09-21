<template>
  <div class="home">
    <div class="form">
      <el-row :gutter="20">
        <!-- 左侧图文 -->
        <el-col :span="12">
          <div class="imgs" align="center">
            <img src="../assets/favicon.png" alt />
          </div>
          <el-col :span="24" class="text—a">
            <h2>智学无忧后台系统</h2>
          </el-col>
          <el-col :span="24" class="text-b">
            <h5>做最有态度、良心、责任的IT教育</h5>
          </el-col>
        </el-col>
        <!-- 右侧登录 -->
        <el-col :span="12" class="right_log">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <!-- 账号 -->
            <div class="name">
              <el-col :span="24">
                <el-form-item prop="name">
                  <el-input v-model.number="ruleForm.name" id="account_number" type="text"></el-input>
                </el-form-item>
              </el-col>
            </div>
            <!-- 密码 -->
            <div class="pwd">
              <el-col :span="24">
                <el-form-item prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" id="password" autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
            </div>
            <!-- 记住密码 -->
            <el-col :span="24" class="radio-pwd">
              <input type="radio" />记住密码
            </el-col>
            <!-- 提交 -->
            <el-col :span="24" class>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" id="click_login">登录</el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    msg: String
  },
  data() {
    // 账号
    var checkNAME = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 10000) {
            callback(new Error("格式错误，必须为五位数"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    // 密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: checkNAME, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 登录按钮
    submitForm(formName) {
      var account_number=document.getElementById("account_number").value
      var password=document.getElementById("password").value;
      var _this=this
      var click_login=document.getElementById("click_login")
      click_login.disabled=true;
      this.axios.get('http://192.168.1.188/api/OAuth/authenticate?stuMobile='+account_number+'&stuPassword='+password)
      .then(function(response){
        click_login.disabled=false;
        console.log(response)
        _this.$message({
          showClose: true,
          message: '登录成功！',
          type: 'success'
        });
         _this.$refs[formName].validate(valid => {
        if (valid) {
          _this.$router.push('/')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      })
      .catch(function(error){
        click_login.disabled=false;
        console.log(error)
        _this.$message({
          showClose: true,
          message: '账号或密码错误，请重新输入',
          type: 'error'
        });
      })
      
    }
  }
};
</script>

<style scoped>
/* 背景图片 */
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/background.jpg);
  position: fixed;
}
/* 表单 */
.form {
  width: 45%;
  height: 300px;
  padding: 5rem;
  margin: auto;
  background: #d7ebf5;
  margin-top: 4rem;
  border: 10px solid #4487d7;
}
/* 栅格 */
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/* 左侧图文 */
.imgs {
  width: 50%;
  margin: auto;
  border: 1px solid white;
  border-radius: 50%;
  background: white;
}
.imgs img {
  width: 70%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.text—a {
  text-align: center;
  color: #1b918a;
  margin-top: 2rem；;
}
.text-b {
  color: #b1c0c6;
  text-align: center;
}

.clear {
  clear: both;
}
/* 右侧登录 */
.radio-pwd {
  color: #66b1ff;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.el-button--primary {
  background: #1b918a;
  width: 100%;
}
.right_log {
  margin-top: 2rem;
}
</style>
