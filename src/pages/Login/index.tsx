/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-12 14:12:12
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 15:40:51
 */
import React from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
import styles from './index.less';
import logo from '@/assets/logo.png';
import axios from 'axios';
import {history} from 'umi';

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
      if(response.data.data.用户id != null){
        message.success('登录成功',2).then(()=>history.push('/'));
      }
      else{
        message.error('登录失败',2)
      }
      console.log("response: ", response);
  })
  .catch((err) => {if(err.response){message.error('登陆失败',2)}})
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
                prefix: <LockOutlined />,
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
