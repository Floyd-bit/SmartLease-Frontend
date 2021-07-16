import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, Radio, Select, Upload } from 'antd';
import { defaultMaxListeners } from 'events';
import React from 'react';

const ServiceTable: React.FC = () => {
  const { Option } = Select;
  const { TextArea } = Input;
  return (
    <div
      style={{
        width: '100%',
        border: '2px solid #D5D5D5',
        paddingTop: '30px',
        paddingLeft: '50px',
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
      >
        <Form.Item label="服务类型" name="username" required>
          <Radio.Group>
            <Radio value={1}>维修</Radio>
            <Radio value={2}>退换货</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="提交数量" name="count" required>
          <InputNumber />
        </Form.Item>
        <Form.Item label="提交原因" required>
          <Select>
            <Option value="不想要了">不想要了</Option>
            <Option value="质量问题">质量问题</Option>
            <Option value="其他">其他</Option>
          </Select>
        </Form.Item>
        <Form.Item label="提交原因" required>
          <TextArea rows={4}></TextArea>
        </Form.Item>
        <Form.Item label="图片信息">
          <Upload name="file">
            <Button icon={<UploadOutlined />}>点击上传图片</Button>
          </Upload>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ServiceTable;
