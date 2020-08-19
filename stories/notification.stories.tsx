import React from 'react';
import { Notification } from '../src/Notification';

export default {
  title: 'Notification',
  parameters: {
      info: {
        inline: false,
      },
    },
};

const notifications = [ 
  { type: "success", message: "All good!" }, 
  { type: "failure", message: "Something is wrong!" },
  { type: "", message: "This is a long message and their is no type defined for it." }
]
                          

export const basic = () => (
  <Notification notifications={notifications} />
);
