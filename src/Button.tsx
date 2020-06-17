import * as React from "react";
import styled from "styled-components";

const ButtonDefault = styled.button<Props>`
border: 1px solid transparent;
color: #fff;
background-color: #3A347E;
line-height: 28px;
height: 30px;
padding-left: 15px;
padding-right: 15px;
border-radius: 3px;
text-transform: capitalize;
cursor: pointer;

&.outlined {
  background-color: #fff;
  color: #444343;

&:hover{
  border: 1px solid #FBECEC;
  color: #000;
  }

&:active{
  background-color: #FBECEC;
}
}

&.transparent {
  background-color: #fff;
  color: #444343;

&:hover{
  color: #000;
}

}

.icon {
  margin-right: 3px;
}

`;



export interface Props {
  /** Value of the button */
  text?: string;
  /** Type of button */
  varient?: "outlined" | "transparent" ;
  /** Icon for the button */
  icon?: React.ReactNode;
}

const Button = (props: Props) => {
      return (
        <ButtonDefault {...props} className={`${props.varient}`} >
           <span className="icon"> {props.icon} </span>  {props.text} 
        </ButtonDefault>
      );
  } 


export default Button
