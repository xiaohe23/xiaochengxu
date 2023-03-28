// login.js
Page({
  data: {
    phone: "",
    password: ""
  },
  bindPhoneInput: function(event) {
    this.setData({
      phone: event.detail.value
    });
  },
  bindPasswordInput: function(event) {
    this.setData({
      password: event.detail.value
    });
  },
  doLogin: function(event) {
    console.log("手机号：" + this.data.phone);
    console.log("密码：" + this.data.password);
    // TODO: 调用登录接口验证手机号和密码，成功
  }
})