/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-08 00:27:07
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-09 20:55:03
 */
import React from 'react';
import { Card , Avatar} from 'antd';
import { EditOutline, EllipsisOutline, SettingOutline } from '@ant-design/icons';

const { Meta } = Card;

function Product() {
    return (
      <div>
        <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      </div>
    )
}

export default Product;
