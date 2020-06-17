import React from 'react';
import Console from '../src/Console';

export default {
  title: 'Console',
  parameters: {
      info: {
        inline: true,
      },
    },
};

export const basic = () => (
    <Console >
      Font: Monaco, monospace; <br/>
      Size: 12px;
    </Console>
);
