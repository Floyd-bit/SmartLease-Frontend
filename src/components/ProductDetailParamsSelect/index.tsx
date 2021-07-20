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
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          {selectItem.title}
          <Radio.Group defaultValue={1} buttonStyle="solid">
            {selectItem.values.map((item, index) => {
              <Radio.Button value={index + 1} style={{ margin: '10px' }}>
                {item}
              </Radio.Button>;
            })}
          </Radio.Group>
        </div>
      ))}
    </>
  );
};

export default ProductDetailParamsSelect;
