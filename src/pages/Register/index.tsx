import React from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
import styles from './index.less';
import logo from '@/assets/logo.png';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
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
        onFinish={async () => {
          await waitTime(2000);
          message.success('提交成功');
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
         <a href='login'>已有账号，点击登录</a>
      </ProForm>

    </div>
  );
}

export default Register;
