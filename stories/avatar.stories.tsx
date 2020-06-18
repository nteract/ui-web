import React from 'react';
import { Avatar } from '../src/Avatar';

export default {
  title: 'Avatar',
  parameters: {
      info: {
        inline: false,
      },
    },
};

export const basic = () => (
  <Avatar 
    username="ramantehlan"
  />
);
