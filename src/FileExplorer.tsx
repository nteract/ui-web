import React, { FC,  HTMLAttributes} from "react";
import styled from "styled-components";


const Box = styled.div<Props>`
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
  z-index: 1000;
`;


export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FileExplorer: FC<Props> = (props: Props) => {
      return (
        <Box {...props} >
          {props.children} 
        </Box>
      );
  } 

