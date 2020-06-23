import React from 'react';
import { Input } from '../src/Input';

export default {
  title: 'Input',
  decorators: [ (storyFn: () => {}) => <div style={{marginTop: '50px'}}>{storyFn()}</div>],
  parameters: {
      info: {
        inline: false,
      },
    },
};


export const basic = () => (
  <Input />
);

export const select = () => (
  <Input variant="select" >
      <option> Value 1 </option>
    <option> Value 2 </option>
  </Input>
);

export const textArea = () => (
  <Input variant="textarea" value="Data" />
);



