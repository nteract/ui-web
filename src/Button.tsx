import  React  from "react";
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

${
  props =>  props.disabled ? "" : `&:hover{
    cursor:pointer;
  }

  &:active{
  background-color: #282357;
}
`};

&.outlined {
  background-color: #fff;
  color: #444343;

${
  props =>  props.disabled ? "" : `&:hover{
    border: 1px solid #FBECEC;
    color: #000;
    cursor: pointer;
  }

  &:active{
    background-color: #FBECEC;
  }

`};

}

&.transparent {
  background-color: #fff;
  color: #444343;

${
  props =>  props.disabled ? "" : `&:hover{
    color: #000;
  }
  `
};

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
  onClick?: () => void;
  /** For disabled buttons */
  disabled?: boolean;
}


const Button = (props: Props) => {
      return (
        <ButtonDefault 
          {...props} 
          disabled={props.disabled}
          onClick={ () => {props.disabled = !props.disabled}  }
          className={`${props.varient}`} >
           <span className="icon"> {props.icon} </span>  {props.text} 
        </ButtonDefault>
      );
  } 


export default Button
