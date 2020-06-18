import React from "react";
import styled from "styled-components";

const Box = styled.div<Props>`
  display: flex;
  font-family: roboto;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Username = styled.div<Props>`
 height: 35px;
 line-height: 35px;
 margin-right: 10px;
 font-weight: bold;
 color: #545454;

 &:hover{
  color: #000;
 }
`;

const Img = styled.img<Props>`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background-color: #EBD8D8;
`;

export interface Props {
  userImage?: string,
  username?: string,
  userlink?: string,
  children?: React.ReactNode
}

const Avatar = (props: Props) => {
      return (
        <Box >
            <Username >
                <a href={props.userlink}> 
                  @{props.username}
                </a>
            </Username>
          <Img src={props.userImage} />
        </Box>
      );
  } 

Avatar.defaultProps = {
  username: "username",
  userImage: "https://api.adorable.io/avatars/61/abott@adorable.png",
  userlink: "#",
}

export default Avatar
