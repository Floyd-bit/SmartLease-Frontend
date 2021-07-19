/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-12 15:10:07
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-19 15:34:30
 */
import React from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
import styles from './index.less';
import logo from '@/assets/logo.png';
import axios from 'axios';
import { history } from 'umi';
import Password from 'antd/lib/input/Password';


const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type LoginParamsType = {
  password: string;
  phone: string;
  captcha: string;
};

const handleSubmit = (values: LoginParamsType) => {
  if(values.password == values.password2){
  axios.post('api2/customer/user/singUp', values)
  .then(function (response) {
    console.log(response.data.message);
      if(response.data.message === "创建成功"){
        message.success('注册成功',2).then(()=>history.push('/login'));
        console.log("success");
      }
      else{
        message.error('注册失败',2)
      }
      console.log("response: ", response);
  })
  .catch((err) => {if(err.response){message.error(err.response.data.message,2)}})
  }
  else{
    alert("两次密码输入不一致");
  }
};

const Register = () => {
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
          handleSubmit(values as LoginParamsType);
          return Promise.resolve();
          }}
        submitter={{
          searchConfig: {
            submitText: '注册',
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
            src={logo}
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
            <ProFormText.Password
              name="password2"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder='请再次输入密码'
              rules={[
                {
                  required: true,
                  message: '请再次输入密码',
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
         <a href='login' style={{marginLeft:80}}>已有账号，点击登录</a>
      </ProForm>

    </div>
  );
}

export default Register;
