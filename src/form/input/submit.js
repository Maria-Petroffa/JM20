import React from 'react';

import { FormItem } from '../style';

export class Submit extends React.Component {
  render() {
    const { labelName } = this.props;

    return (
      <FormItem>
        <button type="submit">{labelName}</button>
      </FormItem>
    );
  }
}
