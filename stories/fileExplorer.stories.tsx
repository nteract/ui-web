import React from 'react';
import { FileExplorer } from '../src/FileExplorer';

export default {
  title: 'FileExplorer',
  parameters: {
      info: {
        inline: false,
      },
    },
};

export const basic = () => (
  <FileExplorer/>
);
