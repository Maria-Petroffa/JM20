import React from 'react';

import { FormItem, Label } from '../style';


export class AcceptTerms extends React.Component {
  render() {
    const { id, labelName, onChange } = this.props;

    return (
      <FormItem>
        <Label htmlFor={id}>{labelName}</Label>
        <input type="checkbox" onChange={onChange} id={id} name={id} />
      </FormItem>
    );
  }
}
