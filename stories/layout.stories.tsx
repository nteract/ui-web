import React from 'react';
import {Layout, Header, Footer, Side, Body} from '../src/Layout';
import Menu, {MenuItem} from '../src/Menu';
import Button from '../src/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSave, faBars} from '@fortawesome/free-solid-svg-icons'

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


const runIcon =  <FontAwesomeIcon icon={faPlay} />
const saveIcon =  <FontAwesomeIcon icon={faSave} />
const menuIcon =  <FontAwesomeIcon icon={faBars} />

export const WithContent = () => (
    <Layout>
      <Header>

        <Menu>
          <MenuItem>
            <Button text="Run" varient="outlined" icon={runIcon}/>
          </MenuItem>
          <MenuItem>
            <Button text="Save" varient="outlined" icon={saveIcon}/>
          </MenuItem>
          <MenuItem>
            <Button text="Menu" varient="outlined" icon={menuIcon}/>
          </MenuItem>

        </Menu>
        
        <div>
          Right Menu
        </div>

      </Header>
      <Side>

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


