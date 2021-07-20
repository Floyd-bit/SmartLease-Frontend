/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-20 17:06:02
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-20 17:26:55
 */
import { Radio } from 'antd';
import React from 'react';

interface SelectItem {
  title: string;
  values: string[];
}
interface ParamsSelectProps {
  paramsList: SelectItem[];
}

const ProductDetailParamsSelect: React.FC<ParamsSelectProps> = (props) => {
  return (
    <>
      {props.paramsList.map((selectItem) => (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ marginRight: '10px' }}>{selectItem.title}</div>
          <Radio.Group defaultValue={1} buttonStyle="solid">
            {selectItem.values.map((item, index) => (
              <Radio.Button value={index + 1} style={{ margin: '10px' }}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
      ))}
    </>
  );
};

export default ProductDetailParamsSelect;
