import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    styles: {
      header: {
        backgroundColor: `#fff`,
        marginBottom: '20px',
        h1: {
          marginRight: '10px',
          fontSize: '24px',
          display: 'inline',
        },
        body: {
          padding: '20px',
          paddingLeft: '0px',
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: '#fff',
        marginTop: '10px',
        padding: '10px',
        lineHeight: '2',
        fontSize: '14px'
      },
    },
    inline: true,
    source: false,
  })
);
