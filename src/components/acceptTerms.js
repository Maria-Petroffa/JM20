import React from 'react';
import { FormItem, Label } from './style';

export class AcceptTerms extends React.Component {
  render() {
    const { id, labelName, onChange } = this.props;
    return (
      <FormItem>
        <label htmlFor={id}>{labelName}</label>
        <input type="checkbox" onChange={onChange} id={id} name={id} />
      </FormItem>
    );
  }
}
