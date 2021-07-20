/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-19 13:59:31
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-20 10:12:10
 */
import { Button, Input, message, Table, Image } from 'antd';
import React, {useState} from 'react';
import axios from 'axios';

const recode = (origin: any) => {
  let reg = new RegExp('/', 'g');
  let newMsg = JSON.stringify(origin).replace(reg,'*');
  return newMsg;
}

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '可能性',
    dataIndex: 'probability',
    width: 200,
  },
];
/*
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    probability: 32,
  });
}
*/
function BaiDuAi() {
  const [data,setData] = useState();
  const [path,setPath] = useState();

 const changePath = e => {
  console.log(e.target.value);
  // let filePath = recode(value);
  setPath(e.target.value);
 }

  const apply = () => {
    let filepath = recode(path);
    axios.get(`api2/baidu/${filepath}`)
    .then(function (response) {
      console.log(response);
        if(response){
          setData(response.data.result);
          console.log(data);
        }
        else{
          message.error("获取失败");
        }
        console.log("response: ", response);
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <div style={{marginBottom: 50}}>
      <Input placeholder="请输入图片链接" onChange={e => changePath(e)} size="middle" style={{width: 350 ,marginRight: 50}}/>
      <Button onClick={apply} size="middle">识别</Button>
    </div>
    <Image src={path}/>
    <Table columns={columns} dataSource={data}  scroll={{ y: 240 }} />
    </>
  );
}

export default BaiDuAi;
