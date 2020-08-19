import React, { FC,  HTMLAttributes} from "react";
import styled from "styled-components";


const NotificationWrapper = styled.div<Props>`
  width: 300px;
  position: absolute;
  top: 50px;
  right: 30px;
  z-index: 1000;
`;

const NotificationBox = styled.div<NotifProps>`
  padding: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: gray;
  margin-top: 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;

  &.success{
      background: #096409;
  }


  &.failure{
    background: #8F1803;
  } 
`;

export interface NotifProps extends HTMLAttributes<HTMLDivElement>   {
  children: React.ReactNode,
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  notifications: { type: string; message: string; }[]
}

export const Notification: FC<Props> = (props: Props) => {
      
      return (
        <NotificationWrapper {...props} >
          { props.notifications.map( (value, index) => {
             return (<NotificationBox className={value.type}> {value.message} </NotificationBox> )
          })
          }

        </NotificationWrapper>
      );
  } 

