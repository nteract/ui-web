import React from 'react';
import Button from '../src/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  parameters: {
      info: {
        inline: false,
      },
    },
};

const icon =  <FontAwesomeIcon icon={faPlay} />

export const basic = () => (
    <Button text="Default Button" onClick={action('onClick')}  />
);

export const outlined = () => (
<div>
  <Button text="Outlined Button" variant="outlined" onClick={action('onClick')}  />
  <br/>
  <Button text="Icon Button" variant="outlined" onClick={action('onClick')} icon={icon} />
  <br />
  <Button text="Disabled Button" variant="outlined" disabled onClick={action('onClick')}  />
</div>
);

export const link = () => (
  <Button text="Transparent Button" variant="transparent" onClick={action('onClick')} />
);
