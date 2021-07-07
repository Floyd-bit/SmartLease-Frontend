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
