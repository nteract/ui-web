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

        <div>
          Left Menu
        </div>
        <div>
          Center Menu
        </div>
        <div>
          Right Menu
        </div>

      </Header>
      <Side>
          <div className="logo">
            Logo
          </div>
          Side

      </Side>
      <Body>

          Body

      </Body>
      <Footer>

       <div>
          Left Menu
        </div>
        <div>
          Center Menu
        </div>
        <div>
          Right Menu
        </div>


      </Footer>
    </Layout>
);


