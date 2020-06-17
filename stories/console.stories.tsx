import React from 'react';
import Console from '../src/Console';

export default {
  title: 'Console',
  parameters: {
      info: {
        inline: true,
        text: `
    
    ~~~js
    <Console>
      Font: Monaco, monospace; <br/>
      Size: 12px;
    </Console>
    ~~~
  `,},
    },
};

export const basic = () => (
    <Console >
      Font: Monaco, monospace; <br/>
      Size: 12px;
    </Console>
);
