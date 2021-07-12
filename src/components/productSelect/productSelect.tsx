import { Card, Col, Row } from 'antd';
import React from 'react';
// 此处url用做跳转
type productItem = {
  subtitle: { title: string; url?: string };
  items: { title: string; url?: string }[];
};
interface ProductSelectProps {
  product: productItem[];
}

const product = [
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
  {
    subtitle: { title: '家用电器' },
    items: [{ title: '手机' }, { title: '运营商' }, { title: '数码' }],
  },
];

const ProductSelect: React.FC<ProductSelectProps> = props => {
  return (
    <Card title="主题市场" bordered={false} style={{ width: '100%', height: 400 }}>
      {props.product.map(item => {
        return (
          <Col span={24} style={{ marginBottom: '15px' }}>
            {/*此处留出未来提供url的空位*/}
            <div style={{ fontSize: '17px', marginBottom: '5px' }}>{item.subtitle.title}</div>
            <Row>
              {/*此处留出未来提供url的空位*/}
              {item.items.map(subitem => (
                <Col span={8}>
                  <div style={{ textAlign: 'center', width: '5em' }}>{subitem.title}</div>
                </Col>
              ))}
            </Row>
          </Col>
        );
      })}
    </Card>
  );
};

export default ProductSelect;
