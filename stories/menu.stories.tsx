import React from 'react';
import Menu, {MenuItem} from '../src/Menu';

export default {
  title: 'Menu',
  parameters: {
      info: {
        inline: false,
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
    <Menu >
      <MenuItem>
        Item
      </MenuItem>
      <MenuItem>
        Item
      </MenuItem>
      <MenuItem>
        Item
      </MenuItem>
    </Menu>
);
