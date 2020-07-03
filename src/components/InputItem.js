import React from 'react';

import { Input } from 'antd';

import { FormItem, Label } from './style';

export class InputItem extends React.Component {
  render() {
    const {
      id, labelName, onChange, value, type,
    } = this.props;

    return (
      <FormItem>
        <Label htmlFor={id}>{labelName}</Label>
        <Input
          placeholder={labelName}
          id={id}
          name={id}
          type={type}
          onChange={onChange}
          value={value}
          style={{ width: '90%', height: 30 }}
        />
      </FormItem>
    );
  }
}
