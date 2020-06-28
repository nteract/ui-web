import React from 'react';
import { Sidebar } from '../src/Sidebar';

export default {
  title: 'Explorer',
  parameters: {
      info: {
        inline: false,
      },
    },
};

const directoryList = [
  {
    name: 'My Root Folder',
    subItems: [
      { name: 'My Subfolder', subItems: [{ name: 'lasers.ipynb' }] },
      { name: 'notebook.ipynb' },
      { name: 'test.ipynb' },
      {
        name: 'Another Folder',
        subItems: [{ name: 'recentTrends.ipynb' }, { name: 'newData.ipynb' }, { name: 'My Subfolder', subItems: [{ name: 'lasers.ipynb' }] }],
      },

    ],
  },
];


export const basic = () => (
  <Sidebar subItems={directoryList}> </Sidebar>
);
