/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-12 14:12:12
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-12 20:51:07
 */
import React from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import axios from 'axios';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type LoginParamsType = {
  userName: string;
  password: string;
  phone: string;
  captcha: string;
};

const handleSubmit = (values: LoginParamsType) => {
  axios.post('api2/customer/user/login', values)
  .then(function (response) {
    console.log(response.data.message);
      if(response.data.message === "登陆成功"){
        alert("登陆成功");
        window.location.href = '/';
        console.log("success");
      }
      else{
        alert("登陆失败");
      }
      console.log("response: ", response);
  })
  .catch(err => console.log(err))
};

const Login = () => {
  return (
    <div
      style={{
        width: 330,
        margin: 'auto',
        marginTop: 100,
      }}
    >
      <ProForm
        onFinish={(values) => {
        console.log(values);
        handleSubmit(values as LoginParamsType);
        return Promise.resolve();
        }}
        submitter={{
          searchConfig: {
            submitText: '登录',
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
      >
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          <img
            style={{
              height: '44px',
              marginRight: 16,
            }}
            alt="logo"
            src= {logo}
          />
          租享宝
        </h1>
        <div
          style={{
            marginTop: 12,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          智能化共享租赁平台
        </div>
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MobileOutlined />,
          }}
          name="phone"
          placeholder="请输入手机号"
          rules={[
            {
              required: true,
              message: '请输入手机号!',
            },
            {
              pattern: /^1\d{10}$/,
              message: '不合法的手机号格式!',
            },
          ]}
        />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder='请输入密码'
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            />
        <ProFormCaptcha
          fieldProps={{
            size: 'large',
            prefix: <MailOutlined />,
          }}
          captchaProps={{
            size: 'large',
          }}
          phoneName="phone"
          name="captcha"
          rules={[
            {
              required: true,
              message: '请输入验证码',
            },
          ]}
          placeholder="请输入验证码"
          onGetCaptcha={async (phone) => {
            await waitTime(1000);
            message.success(`手机号 ${phone} 验证码发送成功!`);
          }}
        />
       <a href='register' style={{marginLeft:80}}>还没有账号，点击注册</a>
      </ProForm>    
    </div>
  );
};
export default Login;
