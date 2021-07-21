/*
 * @Descripttion:
 * @version:
 * @Author: 王宇阳
 * @Date: 2021-07-20 17:06:02
 * @LastEditors: 王宇阳
 * @LastEditTime: 2021-07-21 18:58:51
 */
import { Radio } from 'antd';
import React, { useEffect, useState } from 'react';

interface SelectItem {
  title: string;
  values: string[];
}
interface ParamsSelectProps {
  paramsList: SelectItem[];
  setSelected:any;
}

const ProductDetailParamsSelect: React.FC<ParamsSelectProps> = (props) => {
  const [value, setValue] = useState<any>([])
  const [flag,setFlag]=useState(false);
  useEffect(() => {
    props.setSelected(value);
  }, [flag])
  return (
    <>
      {props.paramsList.map((selectItem,index) => (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ marginRight: '10px' }}>{selectItem.title}</div>
          <Radio.Group buttonStyle="solid" onChange={(e)=>{value[index]=e.target.value;setFlag(!flag)}}>
            {selectItem.values.map((item, index) => (
              <Radio.Button value={index} style={{ margin: '10px' }}>
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
