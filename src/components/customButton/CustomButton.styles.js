import styled, { css } from "styled-components";

const ButtonStyles = css`
  border: none;
  color: white;
  background-color: black;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

`;

const InvertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

const GoogleStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;

const CollectionStyles = css`
    ${InvertedStyles}
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;

const getButtonStyle = props => {
    if(props.isGoogleSignIn){
        return GoogleStyles;
    }
    if(props.collectionButton){
        return CollectionStyles;
    }
    return props.inverted ? InvertedStyles : ButtonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 11px 0 11px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyle}

  @media screen and (max-width:900px) {
    min-width:115px;
    padding:0;
    font-size: 12px;
  }

`;

