/*
 * @Description:
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-09 08:54:42
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-10 11:23:34
 */
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// 点击菜单项
const handleClick = e => {
  console.log(e.key);
};

function SiderMenu(props: any) {
  return (
    <Menu
      onClick={handleClick}
      mode="inline"
      defaultSelectedKeys={[props.selectedKey]}
      defaultOpenKeys={['sub2', 'sub3']}
      style={{ height: '100%', borderRight: 0, width: 200 }}
    >
      <Menu.Item key="sub1" icon={<UserOutlined />}>
        <Link to="my">我的主页</Link>
      </Menu.Item>
      <SubMenu key="sub2" title="我的交易">
        <Menu.Item key="5">购物车</Menu.Item>
        <Menu.Item key="6">
          <Link to="orderlist">我的订单</Link>
        </Menu.Item>
        <Menu.Item key="7">优惠劵</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" title="我的账户">
        <Menu.Item key="9">我的收藏</Menu.Item>
        <Menu.Item key="10">
          <Link to="shoppinglist">浏览历史</Link>
        </Menu.Item>
        <Menu.Item key="11">收获地址</Menu.Item>
        <Menu.Item key="12">退货管理</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default SiderMenu;
