import React, { FC,  HTMLAttributes} from "react";
import styled from "styled-components";

const Box = styled.div<Props>`
 color:  #545454;
 font-family: roboto;
 font-size: 13px;

input, select {
  height: 30px; 
  min-width: 80px;
  background-color: #fff;
  border: 1px solid #EBD8D8;
  border-radius: 2px;
  padding-left: 5px;
}

label {
  position: absolute;
  margin-top: -30px;
}

`;




export interface Props extends HTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  children?: React.ReactNode | string;
  variant?: "select" | "input";
  label?: string;
}

export const Input: FC<Props> = (props: Props) => {
      return (
        <Box >
          <label >{props.label}</label>
          { props.variant == "input" 
              ? <input  id={props.id} type="input" {...props} />
              : <select id={props.id} {...props} >
                  {props.children}
              </select>
          }
        </Box>
      );
  } 

Input.defaultProps = {
  id: "name",
  variant: "input",
  label: "label",
}


