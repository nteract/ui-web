import React from 'react';
import Button from '../src/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Button',
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

const icon =  <FontAwesomeIcon icon={faPlay} />

export const basic = () => (
    <Button text="Default Button" />
);

export const outlined = () => (
<div>
  <Button text="Outlined Button" varient="outlined" />
  <br/>  
  <Button text="Outlined Button" varient="outlined" icon={icon} />
</div>
);

export const link = () => (
  <Button text="Transparent Button" varient="transparent" />
);

