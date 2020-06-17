import * as React from "react";
import styled from "styled-components";


const ConsoleDiv = styled.div<Props>`
  clear: left;
  min-height: 200px;
  padding: 20px;
  color: #f1f1f1;
  font-family: Monaco, monospace;
  font-size: 12px;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #22223B;
  overflow: auto;
  counter-reset: line-numbering;
  border-top: 1px solid #000;
`;

export interface Props {
  children?: React.ReactNode;
  }

const Console = (props: Props) => {
      return (
        <ConsoleDiv {...props} >
          {props.children} 
        </ConsoleDiv>
      );
  } 

export default Console
