import React from 'react';
import {Menu, MenuItem} from '../src/Menu';
import { Avatar } from '../src/Avatar';

export default {
  title: 'Menu',
  parameters: {
      info: {
        inline: false,
        },
    },
};

export const basic = () => (
    <Menu >
      <MenuItem>
        <Avatar />
      </MenuItem>
      <MenuItem>
        Item
      </MenuItem>
      <MenuItem>
        Item
      </MenuItem>
    </Menu>
);
