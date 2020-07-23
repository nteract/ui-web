import React from 'react';
import { action } from '@storybook/addon-actions';
import {BinderMenu} from '../src/BinderMenu';

export default {
  title: 'BinderMenu',
  parameters: {
      info: {
        inline: false,
      },
    },
};

function updateVCSInfo(e: React.FormEvent<HTMLFormElement>, provider: string | undefined, organ: string | undefined, repo: string | undefined, gitRef: string | undefined){
    console.log("update State maybe")
    e.preventDefault()
}

export const basic = () => (
    <BinderMenu provider="gh" updateVCSInfo={updateVCSInfo} onClick={action('onclick')} >
    </BinderMenu>
);
