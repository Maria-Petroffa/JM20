import React from 'react';

import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { FormItem, Label } from './style';

export class Password extends React.Component {
  render() {
    const {
      id, labelName, onChange, value,
    } = this.props;

    return (
      <FormItem>
        <Label htmlFor={id}>{labelName}</Label>
        <Input.Password
          placeholder={labelName}
          id={id}
          name={id}
          type="text"
          onChange={onChange}
          value={value}
          style={{ width: '100%', height: 30 }}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </FormItem>
    );
  }
}
