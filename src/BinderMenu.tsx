import React, { FC,  HTMLAttributes,  useState } from "react";
import styled from "styled-components";
import { Button } from "../src/Button";
import { Input } from "../src/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const rocketIcon =  <FontAwesomeIcon icon={faRocket} />


const BinderMenuDiv = styled.div<Props>`
    border-bottom:0px solid #d1e3dd;
    padding:25px;
    display: flex;

    form {
        display: flex;
    }

    input, select, button, label {
      margin-left: 25px;
    }


  .binder-logo {
    width: 80px;
    display: block;
  }

`;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Children is the child/sub nodes **/
  children?: React.ReactNode;
  /** Provider is the name of VCS **/
  provider?: "gh";
  /** VCS owner of the repo **/
  org?: string;
  /** Name of the VCS repo **/
  repo?: string;
  /** Branch or git reference **/
  gitRef?: string;
  /** Function to update the VCS info **/
  updateVCSInfo: (e: React.FormEvent<HTMLFormElement>, x: string | undefined, y: string | undefined, z: string | undefined, a: string | undefined) => void;
}

function useInput(val: string | undefined ){
  const [value, setValue] = useState(val);
  
  function handleChange(e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) {
    setValue(e.currentTarget.value);
  }
  
  return { 
    value, 
    onChange: handleChange
  }
}

 
export const BinderMenu: FC<Props> = (props: Props) => {
  const provider = useInput(props.provider)
  const org = useInput( props.org)
  const repo = useInput(props.repo)
  const gitRef = useInput(props.gitRef)
   
  return (
       <>

      <BinderMenuDiv {...props}>

        <img className="binder-logo" src="https://mybinder.org/static/logo.svg?v=f9f0d927b67cc9dc99d788c822ca21c0" />
        <form onSubmit={(e) => props.updateVCSInfo( e, provider.value, org.value, repo.value, gitRef.value )} >
          <Input variant="select" { ...provider} style={{width: "120px"}}>
                      <option value="gh">Github</option>
                </Input>
                <Input label="Owner" {...org} />
                <Input  label="Repository" {...repo}/>
                <Input label="Branch" {...gitRef}/>
                <Button text="Launch" style={ {marginLeft: '30px'}} icon={rocketIcon} />
          </form>
      </BinderMenuDiv>
      </>
      );
  } 

// If we want to pass on the default values
BinderMenu.defaultProps = {
  provider: "gh",
  org: "",
  repo: "",
  gitRef: "",
}

