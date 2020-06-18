import React from 'react';
import { Console } from '../src/Console';

export default {
  title: 'Console',
  parameters: {
      info: {
        inline: false,
      },
    },
};

export const basic = () => (
  <Console id="3" >
      Font: Monaco, monospace; <br/>
      Size: 12px;
    </Console>
);
