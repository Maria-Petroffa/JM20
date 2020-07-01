import React from 'react';

import { Input } from 'antd';

import { FormItem, Label } from '../style';

export class Email extends React.Component {
  render() {
    const {
      id, labelName, onChange, value,
    } = this.props;

    return (
      <FormItem>
        <Label htmlFor={id}>{labelName}</Label>
        <Input
          placeholder={labelName}
          id={id}
          name={id}
          type="email"
          onChange={onChange}
          value={value}
          style={{ width: 300, height: 30 }}
        />
      </FormItem>
    );
  }
}
