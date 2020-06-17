import * as React from "react";
import styled from "styled-components";


const MenuDiv = styled.ul`
  list-style:none;
  margin: 0px;
  padding:0px;
  display: flex;
`;

export const MenuItem = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
`;

export interface Props {
  children?: React.ReactNode;
}

const Menu  = (props: Props) => {
      return (
        <MenuDiv {...props} >
          {props.children} 
        </MenuDiv>
      );
  } 

export default Menu
