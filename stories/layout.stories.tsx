import React from 'react';
import {Layout, Header, Footer, Side, Body} from '../src/Layout';

export default {
  title: 'Layout',
  parameters: {
      info: {
        inline: false,
        },
  },
};

export const basic = () => (
    <Layout>
      <Header>
          Header
      </Header>
      <Side>
          Side
      </Side>
      <Body>
          Body
      </Body>
      <Footer>
          Footer
      </Footer>
    </Layout>
);

