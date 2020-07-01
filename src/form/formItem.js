import React from 'react';

import { Input } from 'antd';

import { FormItem, Label } from './style';

class Item extends React.Component {
  render() {
    const {
      id, type, labelName, onChange, value, iconRender,
    } = this.props;
    if (id === 'password' || id === 'repeatPassword') {
      return (
        <FormItem>
          <Label htmlFor={id}>{labelName}</Label>
          <Input.Password
            placeholder={labelName}
            id={id}
            name={id}
            type={type}
            onChange={onChange}
            value={value}
            iconRender={iconRender}
            style={{ width: 300, height: 30 }}
          />
        </FormItem>
      );
    }

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
          iconRender={iconRender !== undefined ? { iconRender } : null}
          style={{ width: 300, height: 30 }}
        />
      </FormItem>
    );
  }
}
export default Item;
