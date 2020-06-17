import PropTypes from 'prop-types';
import styled from "styled-components";

export const Layout = styled.div`
  font-family: roboto;
  min-height: calc(100vh);
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 220px auto;
  grid-row-gap:00px;
  grid-column-gap:0px;
  grid-template-areas:
        "side header"
        "side body"
        "side footer";
  font-size: 14px;
`;

export const Header = styled.header`
  grid-area: header;
  min-height:50px;
  line-height:50px;
  border-bottom: 1px solid #FBECEC;
`;

export const Footer = styled.footer`
  grid-area:footer;
  min-height:30px;
  line-height:30px;
  border-top: 1px solid #FBECEC;
`;

export const Body = styled.div`
  grid-area: body;
  padding:20px;
  max-height:calc(100vh - 100px);
  overflow:auto;
`;

export const Side = styled.div`
  grid-area: side;
  background-color:#F9F9FF;
  border-right: 1px solid #FBECEC;
  min-height: 50px;
  color: #000;
`

Layout.propTypes = Header.propTypes = Footer.propTypes = Body.propTypes = Side.propTypes = {
  children: PropTypes.node
}

