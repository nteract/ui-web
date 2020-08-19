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

const logs = [ 
  { type: "success", message: "All good!" }, 
  { type: "failure", message: "Something is wrong!" },
  { type: "", message: "This is a long message and their is no type defined for it." }
]

export const basic = () => (
  <Console logs={logs} >
    </Console>
);
